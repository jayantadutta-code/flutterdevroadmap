// Realistic Photorealistic 3D WebGL Game Engine using Three.js
// Features MeshPhysicalMaterial Clearcoat Car, PBR Lighting, Soft Shadows, Realistic Asphalt Road, Curbs, & Environments

class GameEngine3D {
  constructor() {
    this.canvas = document.getElementById('gameCanvas');
    this.ctx = this.canvas.getContext('2d');
    this.roadTotalLength = 18500;
    this.xpScore = 0;
    this.isAutoDrive = true;

    this.lastMilestoneTriggerTime = {};
    this.isCrashing = false;

    // Car Physics & Jump State
    this.carState = {
      x: 0,
      y: 0,
      z: 0,
      vy: 0,
      isJumping: false,
      lane: 1, // 0: Left (-3.5), 1: Center (0), 2: Right (3.5)
      targetLaneX: 0,
      speed: 0,
      maxSpeed: 16,
      acceleration: 0.3,
      friction: 0.96,
      boost: false
    };

    this.laneOffset = [-3.5, 0, 3.5];

    this.controls = {
      up: false, down: false, left: false, right: false,
      gas: false, brake: false, boost: false, jump: false
    };

    this.gems = [];
    this.obstacles = [];
    this.clouds = [];
    this.birds = [];

    // Initialize WebGL Three.js Engine
    this.useWebGL = false;
    if (typeof THREE !== 'undefined') {
      try {
        this.initThreeRealistic();
        this.createSkyElementsRealistic();
        this.createCarRealistic();
        this.createCurvedRoadRealistic();
        this.createRoadsideStreetlightsRealistic();
        this.createBiomesRealistic();
        this.createMilestoneGatesRealistic();
        this.createGemsRealistic();
        this.createObstaclesRealistic();
        this.useWebGL = true;
      } catch (e) {
        console.warn("WebGL initialization fallback to Canvas 3D renderer:", e);
        this.useWebGL = false;
      }
    }

    if (!this.useWebGL) {
      this.initCanvasFallback();
    }

    this.setupInputs();
    window.addEventListener('resize', () => this.onWindowResize());
  }

  // --- CURVED ROAD PATH MATHEMATICS ---
  getRoadPoint(z) {
    const curveX = Math.sin(z * 0.005) * 26 + Math.cos(z * 0.002) * 14;
    const hillY = Math.sin(z * 0.008) * 3.5;

    const deltaZ = 0.5;
    const nextX = Math.sin((z - deltaZ) * 0.005) * 26 + Math.cos((z - deltaZ) * 0.002) * 14;
    const dx = nextX - curveX;
    const angleY = Math.atan2(dx, deltaZ);
    const bankZ = -dx * 0.06;

    return { x: curveX, y: hillY, z: z, angleY: angleY, bankZ: bankZ };
  }

  // --- REALISTIC PBR LIGHTING & ATMOSPHERE ---
  initThreeRealistic() {
    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color(0x87ceeb); // Realistic Sky Blue
    this.scene.fog = new THREE.FogExp2(0x87ceeb, 0.0018); // Natural Horizon Haze

    this.camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 1400);
    this.camera.position.set(0, 4.2, 11);

    this.renderer = new THREE.WebGLRenderer({ canvas: this.canvas, antialias: true, alpha: false });
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    // High Quality Shadows
    this.renderer.shadowMap.enabled = true;
    this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
    this.renderer.toneMappingExposure = 1.1;

    // Realistic Hemisphere Lighting (Sky blue top + Earth tone bottom)
    this.hemiLight = new THREE.HemisphereLight(0x87ceeb, 0xd2b48c, 1.2);
    this.scene.add(this.hemiLight);

    // Realistic Sun Directional Light casting High-Res Shadows
    this.dirLight = new THREE.DirectionalLight(0xfffbeb, 2.5);
    this.dirLight.position.set(50, 120, 40);
    this.dirLight.castShadow = true;
    this.dirLight.shadow.mapSize.width = 2048;
    this.dirLight.shadow.mapSize.height = 2048;
    this.dirLight.shadow.bias = -0.0001;
    this.scene.add(this.dirLight);
  }

  // --- REALISTIC SKY: SUN, CLOUDS & BIRDS ---
  createSkyElementsRealistic() {
    // 1. Realistic 3D Sun
    const sunGeo = new THREE.SphereGeometry(14, 32, 32);
    const sunMat = new THREE.MeshBasicMaterial({ color: 0xfff59d });
    this.sunMesh = new THREE.Mesh(sunGeo, sunMat);
    this.sunMesh.position.set(90, 150, -400);
    this.scene.add(this.sunMesh);

    // 2. Realistic 3D Clouds
    const cloudMat = new THREE.MeshStandardMaterial({
      color: 0xffffff,
      roughness: 0.9,
      metalness: 0.1,
      transparent: true,
      opacity: 0.92
    });

    for (let i = 0; i < 35; i++) {
      const cloudGroup = new THREE.Group();
      const numPuffs = 5 + Math.floor(Math.random() * 4);

      for (let j = 0; j < numPuffs; j++) {
        const puffRadius = 6 + Math.random() * 7;
        const puffGeo = new THREE.SphereGeometry(puffRadius, 14, 14);
        const puff = new THREE.Mesh(puffGeo, cloudMat);
        puff.position.set(j * 6 - 14, (Math.random() - 0.5) * 4, (Math.random() - 0.5) * 7);
        cloudGroup.add(puff);
      }

      const cloudZ = -Math.random() * this.roadTotalLength;
      const pt = this.getRoadPoint(cloudZ);
      const cx = pt.x + (Math.random() - 0.5) * 350;
      const cy = 45 + Math.random() * 55;

      cloudGroup.position.set(cx, cy, cloudZ);
      this.scene.add(cloudGroup);
      this.clouds.push(cloudGroup);
    }

    // 3. Realistic Animated Birds
    const birdMat = new THREE.MeshStandardMaterial({ color: 0x1e293b, side: THREE.DoubleSide });
    for (let b = 0; b < 14; b++) {
      const birdGroup = new THREE.Group();
      const wingLeftGeo = new THREE.BufferGeometry();
      wingLeftGeo.setAttribute('position', new THREE.BufferAttribute(new Float32Array([0,0,0, -2.0,0.5,0, 0,0,0.9]), 3));
      const wingLeft = new THREE.Mesh(wingLeftGeo, birdMat);
      birdGroup.add(wingLeft);

      const wingRightGeo = new THREE.BufferGeometry();
      wingRightGeo.setAttribute('position', new THREE.BufferAttribute(new Float32Array([0,0,0, 2.0,0.5,0, 0,0,0.9]), 3));
      const wingRight = new THREE.Mesh(wingRightGeo, birdMat);
      birdGroup.add(wingRight);

      const birdZ = -Math.random() * (this.roadTotalLength * 0.85);
      birdGroup.position.set((Math.random() - 0.5) * 140, 32 + Math.random() * 25, birdZ);
      birdGroup.scale.set(0.7, 0.7, 0.7);

      this.scene.add(birdGroup);
      this.birds.push({ group: birdGroup, wingLeft: wingLeft, wingRight: wingRight, speed: 0.15 + Math.random() * 0.1, phase: Math.random() * Math.PI * 2 });
    }
  }

  // --- PHOTOREALISTIC 3D SPORTS CAR (CLEARCOAT METALLIC PAINT) ---
  createCarRealistic() {
    this.carGroup = new THREE.Group();

    // Body Chassis using MeshPhysicalMaterial with Clearcoat Reflection
    const bodyGeo = new THREE.BoxGeometry(1.85, 0.72, 3.7);
    const bodyMat = new THREE.MeshPhysicalMaterial({
      color: 0x0175c2,
      metalness: 0.9,
      roughness: 0.1,
      clearcoat: 1.0,
      clearcoatRoughness: 0.05,
      reflectivity: 1.0
    });
    this.carBodyMesh = new THREE.Mesh(bodyGeo, bodyMat);
    this.carBodyMesh.position.y = 0.52;
    this.carBodyMesh.castShadow = true;
    this.carBodyMesh.receiveShadow = true;
    this.carGroup.add(this.carBodyMesh);

    // Realistic Tinted Glass Cabin
    const cabinGeo = new THREE.BoxGeometry(1.42, 0.52, 1.85);
    const cabinMat = new THREE.MeshPhysicalMaterial({
      color: 0x0a0e1a,
      metalness: 0.9,
      roughness: 0.0,
      transparent: true,
      opacity: 0.9,
      transmission: 0.6
    });
    const cabinMesh = new THREE.Mesh(cabinGeo, cabinMat);
    cabinMesh.position.set(0, 1.02, -0.2);
    cabinMesh.castShadow = true;
    this.carGroup.add(cabinMesh);

    // Realistic Wheels (Rubber Tire + Chrome Alloy Rim)
    const tireGeo = new THREE.CylinderGeometry(0.36, 0.36, 0.32, 24);
    tireGeo.rotateZ(Math.PI / 2);
    const tireMat = new THREE.MeshStandardMaterial({ color: 0x1e293b, roughness: 0.9 });
    const chromeRimMat = new THREE.MeshStandardMaterial({ color: 0xffffff, metalness: 0.95, roughness: 0.05 });

    const wheelPositions = [
      [-0.92, 0.36, 1.05], [0.92, 0.36, 1.05],
      [-0.92, 0.36, -1.05], [0.92, 0.36, -1.05]
    ];

    wheelPositions.forEach(pos => {
      const wMesh = new THREE.Mesh(tireGeo, tireMat);
      wMesh.position.set(...pos);
      wMesh.castShadow = true;

      const rimGeo = new THREE.TorusGeometry(0.22, 0.04, 10, 20);
      rimGeo.rotateY(Math.PI / 2);
      const rimMesh = new THREE.Mesh(rimGeo, chromeRimMat);
      wMesh.add(rimMesh);

      this.carGroup.add(wMesh);
    });

    // LED Headlights & Forward Spotlight Beam
    const lightGeo = new THREE.SphereGeometry(0.14, 12, 12);
    const lightMat = new THREE.MeshBasicMaterial({ color: 0x00e5ff });

    const headLeft = new THREE.Mesh(lightGeo, lightMat);
    headLeft.position.set(-0.62, 0.52, -1.85);
    const headRight = new THREE.Mesh(lightGeo, lightMat);
    headRight.position.set(0.62, 0.52, -1.85);

    this.carGroup.add(headLeft);
    this.carGroup.add(headRight);

    this.headSpotLight = new THREE.SpotLight(0x00e5ff, 4.5, 130, Math.PI / 4, 0.3);
    this.headSpotLight.position.set(0, 0.75, -1.85);
    this.carSpotTarget = new THREE.Object3D();
    this.carSpotTarget.position.set(0, 0, -45);
    this.carGroup.add(this.carSpotTarget);
    this.headSpotLight.target = this.carSpotTarget;
    this.headSpotLight.castShadow = true;
    this.carGroup.add(this.headSpotLight);

    this.scene.add(this.carGroup);
  }

  // --- REALISTIC ASPHALT ROAD HIGHWAY, CURBS & CHROME GUARDRAILS ---
  createCurvedRoadRealistic() {
    this.roadGroup = new THREE.Group();

    const segments = 1200;
    const roadWidth = 11.5;
    const stepZ = this.roadTotalLength / segments;

    // Realistic Asphalt Texture Material
    const roadMat = new THREE.MeshStandardMaterial({
      color: 0x334155,
      roughness: 0.7,
      metalness: 0.15,
      side: THREE.DoubleSide
    });

    // Chrome Metallic Guardrails
    this.railMat = new THREE.MeshStandardMaterial({
      color: 0xe2e8f0,
      metalness: 0.9,
      roughness: 0.15,
      emissive: 0x0175c2,
      emissiveIntensity: 0.4
    });

    const railGeo = new THREE.BoxGeometry(0.38, 0.75, stepZ * 1.05);
    const curbGeo = new THREE.BoxGeometry(0.5, 0.3, stepZ * 1.05);
    const curbMat = new THREE.MeshStandardMaterial({ color: 0x475569, roughness: 0.8 });

    // Yellow Double Center Line & White Lane Dashes
    const centerLineGeo = new THREE.PlaneGeometry(0.18, stepZ * 1.05);
    centerLineGeo.rotateX(-Math.PI / 2);
    const yellowLineMat = new THREE.MeshBasicMaterial({ color: 0xfacc15 });

    const stripeGeo = new THREE.PlaneGeometry(0.2, 2.8);
    stripeGeo.rotateX(-Math.PI / 2);
    const stripeMat = new THREE.MeshBasicMaterial({ color: 0xffffff });

    for (let i = 0; i < segments; i++) {
      const z = -i * stepZ;
      const pt = this.getRoadPoint(z);

      // Road Surface Ribbon
      const segGeo = new THREE.PlaneGeometry(roadWidth, stepZ * 1.02);
      segGeo.rotateX(-Math.PI / 2);
      const segMesh = new THREE.Mesh(segGeo, roadMat);
      segMesh.position.set(pt.x, pt.y, pt.z);
      segMesh.rotation.y = pt.angleY;
      segMesh.rotation.z = pt.bankZ;
      segMesh.receiveShadow = true;
      this.roadGroup.add(segMesh);

      // 3D Raised Curbs
      [-5.8, 5.8].forEach(side => {
        const curb = new THREE.Mesh(curbGeo, curbMat);
        const cx = pt.x + side * Math.cos(pt.angleY);
        const cz = pt.z - side * Math.sin(pt.angleY);
        curb.position.set(cx, pt.y + 0.15, cz);
        curb.rotation.y = pt.angleY;
        curb.rotation.z = pt.bankZ;
        curb.receiveShadow = true;
        this.roadGroup.add(curb);
      });

      // Chrome Guardrails
      [-6.3, 6.3].forEach(side => {
        const rail = new THREE.Mesh(railGeo, this.railMat);
        const rx = pt.x + side * Math.cos(pt.angleY);
        const rz = pt.z - side * Math.sin(pt.angleY);
        rail.position.set(rx, pt.y + 0.45, rz);
        rail.rotation.y = pt.angleY;
        rail.rotation.z = pt.bankZ;
        rail.castShadow = true;
        this.roadGroup.add(rail);
      });

      // Double Yellow Center Lines
      [-0.15, 0.15].forEach(cOffset => {
        const yellowLine = new THREE.Mesh(centerLineGeo, yellowLineMat);
        const yx = pt.x + cOffset * Math.cos(pt.angleY);
        const yz = pt.z - cOffset * Math.sin(pt.angleY);
        yellowLine.position.set(yx, pt.y + 0.035, yz);
        yellowLine.rotation.y = pt.angleY;
        yellowLine.rotation.z = pt.bankZ;
        this.roadGroup.add(yellowLine);
      });

      // White Dashed Lanes
      if (i % 3 === 0) {
        [-2.4, 2.4].forEach(laneOffset => {
          const stripe = new THREE.Mesh(stripeGeo, stripeMat);
          const sx = pt.x + laneOffset * Math.cos(pt.angleY);
          const sz = pt.z - laneOffset * Math.sin(pt.angleY);
          stripe.position.set(sx, pt.y + 0.035, sz);
          stripe.rotation.y = pt.angleY;
          stripe.rotation.z = pt.bankZ;
          this.roadGroup.add(stripe);
        });
      }
    }

    this.scene.add(this.roadGroup);
  }

  // --- REALISTIC ROADSIDE STREETLIGHTS ---
  createRoadsideStreetlightsRealistic() {
    const poleGeo = new THREE.CylinderGeometry(0.14, 0.22, 6.2, 12);
    const armGeo = new THREE.BoxGeometry(2.2, 0.14, 0.14);
    const bulbGeo = new THREE.SphereGeometry(0.38, 14, 14);
    const poleMat = new THREE.MeshStandardMaterial({ color: 0x334155, metalness: 0.85, roughness: 0.2 });
    const bulbMat = new THREE.MeshStandardMaterial({ color: 0x00e5ff, emissive: 0x00e5ff, emissiveIntensity: 1.0 });

    for (let z = -60; z > -this.roadTotalLength; z -= 35) {
      const pt = this.getRoadPoint(z);
      const side = (z % 70 === 0) ? -7.2 : 7.2;

      const lightPostGroup = new THREE.Group();

      const pole = new THREE.Mesh(poleGeo, poleMat);
      pole.position.y = 3.1;
      pole.castShadow = true;
      lightPostGroup.add(pole);

      const arm = new THREE.Mesh(armGeo, poleMat);
      arm.position.set(side > 0 ? -1.0 : 1.0, 5.9, 0);
      lightPostGroup.add(arm);

      const bulb = new THREE.Mesh(bulbGeo, bulbMat);
      bulb.position.set(side > 0 ? -2.0 : 2.0, 5.8, 0);
      lightPostGroup.add(bulb);

      const pLight = new THREE.PointLight(0x00e5ff, 2.2, 32);
      pLight.position.set(side > 0 ? -2.0 : 2.0, 5.5, 0);
      lightPostGroup.add(pLight);

      const px = pt.x + side * Math.cos(pt.angleY);
      const pz = pt.z - side * Math.sin(pt.angleY);
      lightPostGroup.position.set(px, pt.y, pz);
      lightPostGroup.rotation.y = pt.angleY;
      this.scene.add(lightPostGroup);
    }
  }

  // --- PHOTOREALISTIC 3D BIOMES (ROCKS, CAVE, CITY, FOREST, SNOW, UNDERWATER, SPACE) ---
  createBiomesRealistic() {
    // 1. Photorealistic Canyon Rocks
    const rockGeo = new THREE.DodecahedronGeometry(4.0, 1);
    const rockMat = new THREE.MeshStandardMaterial({ color: 0xb45309, roughness: 0.85 });

    for (let z = 0; z > -2600; z -= 60) {
      const pt = this.getRoadPoint(z);
      [-14, 14, -20, 20].forEach(side => {
        const rock = new THREE.Mesh(rockGeo, rockMat);
        const scale = 1.2 + Math.random() * 2.2;
        rock.scale.set(scale, scale * 1.6, scale);
        rock.position.set(pt.x + side * Math.cos(pt.angleY), pt.y + scale * 0.7, pt.z - side * Math.sin(pt.angleY));
        rock.castShadow = true;
        rock.receiveShadow = true;
        this.scene.add(rock);
      });
    }

    // 2. Realistic Cave Crystals & Vault Arches
    const crystalGeo = new THREE.ConeGeometry(1.1, 4.5, 6);
    const crystalMat = new THREE.MeshStandardMaterial({ color: 0xc084fc, emissive: 0x9c27b0, emissiveIntensity: 0.9, roughness: 0.2 });
    const archGeo = new THREE.TorusGeometry(8.2, 0.5, 10, 20, Math.PI);
    const archMat = new THREE.MeshStandardMaterial({ color: 0x7e22ce, emissive: 0x7e22ce, emissiveIntensity: 0.7 });

    for (let z = -2600; z > -5200; z -= 50) {
      const pt = this.getRoadPoint(z);
      [-9.5, 9.5].forEach(side => {
        const c = new THREE.Mesh(crystalGeo, crystalMat);
        c.position.set(pt.x + side * Math.cos(pt.angleY), pt.y + 0.5, pt.z - side * Math.sin(pt.angleY));
        c.castShadow = true;
        this.scene.add(c);
      });

      const arch = new THREE.Mesh(archGeo, archMat);
      arch.position.set(pt.x, pt.y, pt.z);
      arch.rotation.y = pt.angleY;
      this.scene.add(arch);
    }

    // 3. Realistic City Skyscrapers
    const bldgMat = new THREE.MeshStandardMaterial({ color: 0x0284c7, metalness: 0.8, roughness: 0.2 });
    for (let z = -5200; z > -7800; z -= 40) {
      const pt = this.getRoadPoint(z);
      [-15, 15, -24, 24].forEach(side => {
        const h = 18 + Math.random() * 32;
        const bldg = new THREE.Mesh(new THREE.BoxGeometry(8, h, 8), bldgMat);
        bldg.position.set(pt.x + side * Math.cos(pt.angleY), pt.y + h / 2, pt.z - side * Math.sin(pt.angleY));
        bldg.castShadow = true;
        bldg.receiveShadow = true;
        this.scene.add(bldg);
      });
    }

    // 4. Realistic Emerald Forest Trees
    const trunkGeo = new THREE.CylinderGeometry(0.5, 0.75, 2.5, 10);
    const trunkMat = new THREE.MeshStandardMaterial({ color: 0x451a03, roughness: 0.9 });
    const leavesGeo = new THREE.ConeGeometry(3.2, 6.0, 10);
    const leavesMat = new THREE.MeshStandardMaterial({ color: 0x059669, roughness: 0.6 });

    for (let z = -7800; z > -10400; z -= 35) {
      const pt = this.getRoadPoint(z);
      [-11, 11, -17, 17].forEach(side => {
        const tree = new THREE.Group();
        const trunk = new THREE.Mesh(trunkGeo, trunkMat);
        trunk.position.y = 1.25;
        trunk.castShadow = true;
        tree.add(trunk);

        const l = new THREE.Mesh(leavesGeo, leavesMat);
        l.position.y = 4.8;
        l.castShadow = true;
        tree.add(l);

        tree.position.set(pt.x + side * Math.cos(pt.angleY), pt.y, pt.z - side * Math.sin(pt.angleY));
        this.scene.add(tree);
      });
    }

    // 5. Realistic Snow Mountain Terrain
    const mtnGeo = new THREE.ConeGeometry(28, 50, 8);
    const mtnMat = new THREE.MeshStandardMaterial({ color: 0xf0f9ff, roughness: 0.3 });
    for (let z = -10400; z > -13000; z -= 65) {
      const pt = this.getRoadPoint(z);
      [-32, 32].forEach(side => {
        const mtn = new THREE.Mesh(mtnGeo, mtnMat);
        mtn.position.set(pt.x + side * Math.cos(pt.angleY), pt.y + 22, pt.z - side * Math.sin(pt.angleY));
        mtn.castShadow = true;
        this.scene.add(mtn);
      });
    }

    // 6. Realistic Underwater Glass Arch
    const underwaterArchMat = new THREE.MeshPhysicalMaterial({
      color: 0x22d3ee,
      emissive: 0x22d3ee,
      emissiveIntensity: 0.8,
      transparent: true,
      opacity: 0.85
    });
    for (let z = -13000; z > -15600; z -= 50) {
      const pt = this.getRoadPoint(z);
      const arch = new THREE.Mesh(new THREE.TorusGeometry(9.0, 0.5, 10, 20, Math.PI), underwaterArchMat);
      arch.position.set(pt.x, pt.y, pt.z);
      arch.rotation.y = pt.angleY;
      this.scene.add(arch);
    }
  }

  // --- REALISTIC 3D OBSTACLES ---
  createObstaclesRealistic() {
    this.obstacles3D = [];
    const bGeo = new THREE.DodecahedronGeometry(1.25);
    const bMat = new THREE.MeshStandardMaterial({ color: 0x57534e, roughness: 0.85 });

    for (let z = -600; z > -this.roadTotalLength; z -= 210) {
      const isNearMilestone = MILESTONES_DATA.some(m => Math.abs(-m.xPos - z) < 160);
      if (!isNearMilestone) {
        const lane = Math.floor(Math.random() * 3);
        const pt = this.getRoadPoint(z);
        const mesh = new THREE.Mesh(bGeo, bMat);
        mesh.position.set(pt.x + this.laneOffset[lane] * Math.cos(pt.angleY), pt.y + 0.65, pt.z - this.laneOffset[lane] * Math.sin(pt.angleY));
        mesh.castShadow = true;
        this.scene.add(mesh);
        this.obstacles3D.push({ mesh: mesh, lane: lane, z: z, hit: false });
      }
    }
  }

  // --- REALISTIC 3D MILESTONE MONUMENTS ---
  createMilestoneGatesRealistic() {
    this.milestoneGates = [];
    const archGeo = new THREE.BoxGeometry(0.9, 6.5, 0.9);
    const topBarGeo = new THREE.BoxGeometry(16, 0.9, 0.9);

    MILESTONES_DATA.forEach((ms, index) => {
      const gateGroup = new THREE.Group();
      const zPos = -ms.xPos;
      const pt = this.getRoadPoint(zPos);

      const mat = new THREE.MeshStandardMaterial({
        color: parseInt(ms.color.replace('#', '0x')),
        emissive: parseInt(ms.color.replace('#', '0x')),
        emissiveIntensity: 0.85,
        metalness: 0.5
      });

      const pLeft = new THREE.Mesh(archGeo, mat); pLeft.position.set(-7.5, 3.25, 0); pLeft.castShadow = true; gateGroup.add(pLeft);
      const pRight = new THREE.Mesh(archGeo, mat); pRight.position.set(7.5, 3.25, 0); pRight.castShadow = true; gateGroup.add(pRight);
      const topBar = new THREE.Mesh(topBarGeo, mat); topBar.position.set(0, 6.5, 0); topBar.castShadow = true; gateGroup.add(topBar);

      const orb = new THREE.Mesh(new THREE.SphereGeometry(1.3, 20, 20), new THREE.MeshStandardMaterial({ color: 0xffffff, emissive: parseInt(ms.color.replace('#', '0x')), emissiveIntensity: 1.0 }));
      orb.position.set(0, 8.4, 0);
      gateGroup.add(orb);

      gateGroup.position.set(pt.x, pt.y, pt.z);
      gateGroup.rotation.y = pt.angleY;
      this.scene.add(gateGroup);

      this.milestoneGates.push({ group: gateGroup, zPos: zPos, data: ms, index: index });
    });
  }

  // --- REALISTIC 3D GEMS ---
  createGemsRealistic() {
    this.gems3D = [];
    const gemGeo = new THREE.OctahedronGeometry(0.75);
    const gemMat = new THREE.MeshStandardMaterial({ color: 0x00e5ff, emissive: 0x00e5ff, emissiveIntensity: 1.0, roughness: 0.0 });

    for (let z = -800; z > -this.roadTotalLength; z -= 350) {
      const isNearMilestone = MILESTONES_DATA.some(m => Math.abs(-m.xPos - z) < 160);
      if (!isNearMilestone) {
        const lane = Math.floor(Math.random() * 3);
        const pt = this.getRoadPoint(z);
        const gemMesh = new THREE.Mesh(gemGeo, gemMat);
        gemMesh.position.set(pt.x + this.laneOffset[lane] * Math.cos(pt.angleY), pt.y + 1.4, pt.z - this.laneOffset[lane] * Math.sin(pt.angleY));
        this.scene.add(gemMesh);
        this.gems3D.push({ mesh: gemMesh, lane: lane, z: z, collected: false });
      }
    }
  }

  // --- CANVAS FALLBACK ---
  initCanvasFallback() {
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
  }

  setupInputs() {
    window.addEventListener('keydown', (e) => {
      soundEngine.ensureContext();
      soundEngine.startEngine();

      switch (e.key) {
        case 'ArrowUp': case 'w': case 'W': this.controls.up = true; break;
        case 'ArrowDown': case 's': case 'S': this.controls.down = true; break;
        case 'ArrowLeft': case 'a': case 'A': this.controls.left = true; break;
        case 'ArrowRight': case 'd': case 'D': this.controls.right = true; break;
        case ' ':
          this.controls.jump = true;
          this.triggerJump();
          break;
      }
      if (['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight', ' ', 'w', 'a', 's', 'd'].includes(e.key)) {
        if (this.isAutoDrive) this.toggleAutoDrive(false);
      }
    });

    window.addEventListener('keyup', (e) => {
      switch (e.key) {
        case 'ArrowUp': case 'w': case 'W': this.controls.up = false; break;
        case 'ArrowDown': case 's': case 'S': this.controls.down = false; break;
        case 'ArrowLeft': case 'a': case 'A': this.controls.left = false; break;
        case 'ArrowRight': case 'd': case 'D': this.controls.right = false; break;
        case ' ': this.controls.jump = false; break;
      }
    });
  }

  setControlState(keyName, active) {
    this.controls[keyName] = active;
    if (active && keyName === 'jump') this.triggerJump();
    if (active && this.isAutoDrive) this.toggleAutoDrive(false);
  }

  triggerJump() {
    if (!this.carState.isJumping && this.carState.y <= 0.05) {
      this.carState.vy = 0.55;
      this.carState.isJumping = true;
      soundEngine.playJumpSound();
    }
  }

  toggleAutoDrive(forceState) {
    this.isAutoDrive = forceState !== undefined ? forceState : !this.isAutoDrive;
    return this.isAutoDrive;
  }

  teleportToMilestone(index) {
    if (index >= 0 && index < MILESTONES_DATA.length) {
      const ms = MILESTONES_DATA[index];
      this.carState.z = -ms.xPos + 250;
      this.carState.speed = 4;
      soundEngine.playBiomeWarp();
    }
  }

  triggerCrashRestart() {
    if (this.isCrashing) return;
    this.isCrashing = true;

    soundEngine.playCrashSound();
    const banner = document.getElementById('crashBanner');
    if (banner) banner.classList.add('show');
    this.carState.speed = 0;

    setTimeout(() => {
      this.carState.z = 0;
      this.carState.x = 0;
      this.carState.y = 0;
      this.carState.vy = 0;
      this.carState.lane = 1;
      this.carState.isJumping = false;

      if (this.obstacles3D) this.obstacles3D.forEach(o => o.hit = false);
      if (banner) banner.classList.remove('show');
      this.isCrashing = false;
    }, 1400);
  }

  getCurrentBiome() {
    const currentZ = -this.carState.z;
    for (let i = MILESTONES_DATA.length - 1; i >= 0; i--) {
      if (currentZ >= MILESTONES_DATA[i].xPos - 400) {
        return BIOMES[MILESTONES_DATA[i].biomeId];
      }
    }
    return BIOMES[0];
  }

  start() {
    const animate = () => {
      this.update();
      this.render();
      requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  }

  update() {
    if (this.isCrashing) return;

    // Sky Animations
    const time = Date.now() * 0.002;
    this.birds.forEach(b => {
      b.group.position.z -= b.speed * 2.0;
      if (b.group.position.z < this.carState.z - 200) {
        b.group.position.z = this.carState.z + 400;
      }
      const flap = Math.sin(time * 8 + b.phase) * 0.4;
      b.wingLeft.rotation.z = flap;
      b.wingRight.rotation.z = -flap;
    });

    if (this.sunMesh) {
      this.sunMesh.position.z = this.carState.z - 500;
    }

    if (this.isAutoDrive) {
      this.carState.speed += 0.2;
      if (this.carState.speed > 10) this.carState.speed = 10;
    } else {
      if (this.controls.gas || this.controls.up) {
        const max = this.controls.boost ? this.carState.maxSpeed * 1.4 : this.carState.maxSpeed;
        this.carState.speed += this.carState.acceleration;
        if (this.carState.speed > max) this.carState.speed = max;
      } else if (this.controls.brake || this.controls.down) {
        this.carState.speed -= this.carState.acceleration * 1.5;
        if (this.carState.speed < -8) this.carState.speed = -8;
      } else {
        this.carState.speed *= this.carState.friction;
      }
    }

    if (this.controls.left && this.carState.lane > 0) {
      this.carState.lane--;
      this.controls.left = false;
    } else if (this.controls.right && this.carState.lane < 2) {
      this.carState.lane++;
      this.controls.right = false;
    }

    if (this.carState.isJumping || this.carState.y > 0) {
      this.carState.y += this.carState.vy;
      this.carState.vy -= 0.035;

      if (this.carState.y <= 0) {
        this.carState.y = 0;
        this.carState.vy = 0;
        this.carState.isJumping = false;
      }
    }

    this.carState.z -= this.carState.speed * 0.35;
    if (this.carState.z < -this.roadTotalLength) this.carState.z = 0;
    if (this.carState.z > 50) this.carState.z = 0;

    this.carState.targetLaneX += (this.laneOffset[this.carState.lane] - this.carState.targetLaneX) * 0.2;

    const pt = this.getRoadPoint(this.carState.z);

    if (this.useWebGL) {
      const carWorldX = pt.x + this.carState.targetLaneX * Math.cos(pt.angleY);
      const carWorldY = pt.y + this.carState.y;
      const carWorldZ = pt.z - this.carState.targetLaneX * Math.sin(pt.angleY);

      this.carGroup.position.set(carWorldX, carWorldY, carWorldZ);
      this.carGroup.rotation.y = pt.angleY + (this.carState.speed < 0 ? Math.PI : 0);
      this.carGroup.rotation.z = pt.bankZ;

      const camZ = pt.z + 11.5;
      const camPt = this.getRoadPoint(camZ);

      this.camera.position.set(
        camPt.x + (this.carState.targetLaneX * 0.5) * Math.cos(camPt.angleY),
        camPt.y + 4.2 + this.carState.y * 0.5,
        camZ
      );
      this.camera.lookAt(carWorldX, carWorldY + 1.2, carWorldZ - 15);
    }

    soundEngine.updateEngine(Math.abs(this.carState.speed) / this.carState.maxSpeed);

    if (this.gems3D) {
      this.gems3D.forEach(g => {
        if (!g.collected && g.lane === this.carState.lane && Math.abs(g.z - this.carState.z) < 3.5) {
          g.collected = true;
          if (g.mesh) g.mesh.visible = false;
          this.xpScore += 50;
          soundEngine.playGemPickup();
        }
      });
    }

    if (this.obstacles3D) {
      this.obstacles3D.forEach(obs => {
        if (!obs.hit && obs.lane === this.carState.lane && Math.abs(obs.z - this.carState.z) < 3.0) {
          if (this.carState.y <= 1.0) {
            obs.hit = true;
            this.triggerCrashRestart();
          }
        }
      });
    }

    const now = Date.now();
    MILESTONES_DATA.forEach((ms, index) => {
      const zPos = -ms.xPos;
      const distZ = Math.abs(zPos - this.carState.z);
      const lastTime = this.lastMilestoneTriggerTime[index] || 0;

      if (distZ < 4.5 && (now - lastTime > 4000)) {
        this.lastMilestoneTriggerTime[index] = now;
        uiController.openMilestoneModal(ms);
        this.carState.speed = this.carState.speed > 0 ? 2 : -2;
      }
    });

    if (this.useWebGL) this.updateBiomeLighting();
    this.updateHUD();
  }

  updateBiomeLighting() {
    const currentBiome = this.getCurrentBiome();
    const targetColor = new THREE.Color(currentBiome.skyGradient[0]);
    this.scene.background.lerp(targetColor, 0.05);
    this.scene.fog.color.lerp(targetColor, 0.05);
    if (this.railMat) {
      this.railMat.emissive.lerp(new THREE.Color(currentBiome.accentColor), 0.05);
    }
  }

  updateHUD() {
    const currentBiome = this.getCurrentBiome();

    const nameEl = document.getElementById('currentBiomeName');
    const subEl = document.getElementById('currentBiomeSubtitle');
    const badgeEl = document.getElementById('currentBiomeBadge');
    if (nameEl) nameEl.innerText = currentBiome.name;
    if (subEl) subEl.innerText = currentBiome.subtitle;
    if (badgeEl) badgeEl.innerText = currentBiome.name.charAt(0);

    const speedKm = Math.round(Math.abs(this.carState.speed) * 12);
    const distMeters = Math.round(-this.carState.z);
    const speedEl = document.getElementById('speedValue');
    const distEl = document.getElementById('distValue');
    const xpEl = document.getElementById('xpValue');
    if (speedEl) speedEl.innerText = `${speedKm} km/h`;
    if (distEl) distEl.innerText = `${distMeters} m`;
    if (xpEl) xpEl.innerText = `${this.xpScore} XP`;

    const carIcon = document.getElementById('minimapCarIcon');
    if (carIcon) {
      const progressRatio = Math.min(1, Math.max(0, -this.carState.z / this.roadTotalLength));
      carIcon.style.left = `${progressRatio * 100}%`;
    }
  }

  render() {
    if (this.useWebGL) {
      this.renderer.render(this.scene, this.camera);
    } else {
      this.renderCanvasFallback();
    }
  }

  // 2D/3D Projection Render Fallback
  renderCanvasFallback() {
    const W = this.canvas.width;
    const H = this.canvas.height;
    const currentBiome = this.getCurrentBiome();

    const skyGrad = this.ctx.createLinearGradient(0, 0, 0, H * 0.6);
    skyGrad.addColorStop(0, currentBiome.skyGradient[0]);
    skyGrad.addColorStop(0.5, currentBiome.skyGradient[1]);
    skyGrad.addColorStop(1, currentBiome.skyGradient[2]);
    this.ctx.fillStyle = skyGrad;
    this.ctx.fillRect(0, 0, W, H);

    this.ctx.fillStyle = "#FFD700";
    this.ctx.beginPath();
    this.ctx.arc(W * 0.75, 110, 45, 0, Math.PI * 2);
    this.ctx.fill();

    this.ctx.fillStyle = "rgba(255, 255, 255, 0.85)";
    for (let i = 0; i < 6; i++) {
      const cx = ((i * 240 - this.carState.z * 0.1) % (W + 200)) - 100;
      this.ctx.beginPath();
      this.ctx.arc(cx, 80 + (i % 3) * 20, 30, 0, Math.PI * 2);
      this.ctx.arc(cx + 25, 75, 22, 0, Math.PI * 2);
      this.ctx.arc(cx - 25, 85, 20, 0, Math.PI * 2);
      this.ctx.fill();
    }

    const time = Date.now() * 0.003;
    this.ctx.strokeStyle = "#1E293B";
    this.ctx.lineWidth = 3;
    for (let b = 0; b < 5; b++) {
      const bx = ((b * 60 + time * 80) % W);
      const by = 130 + Math.sin(time + b) * 15;
      this.ctx.beginPath();
      this.ctx.moveTo(bx - 12, by + Math.sin(time * 6) * 6);
      this.ctx.lineTo(bx, by);
      this.ctx.lineTo(bx + 12, by + Math.sin(time * 6) * 6);
      this.ctx.stroke();
    }

    const horizonY = H * 0.55;
    if (currentBiome.theme === 'canyon') {
      this.ctx.fillStyle = "#D97706";
      for (let x = 0; x < W; x += 120) this.ctx.fillRect(x, horizonY - 90, 80, 90);
    } else if (currentBiome.theme === 'forest') {
      this.ctx.fillStyle = "#10B981";
      for (let x = 0; x < W; x += 70) {
        this.ctx.beginPath();
        this.ctx.moveTo(x, horizonY);
        this.ctx.lineTo(x + 25, horizonY - 110);
        this.ctx.lineTo(x + 50, horizonY);
        this.ctx.fill();
      }
    } else if (currentBiome.theme === 'snow') {
      this.ctx.fillStyle = "#E0F2FE";
      for (let x = 0; x < W; x += 160) {
        this.ctx.beginPath();
        this.ctx.moveTo(x, horizonY);
        this.ctx.lineTo(x + 80, horizonY - 140);
        this.ctx.lineTo(x + 160, horizonY);
        this.ctx.fill();
      }
    } else {
      this.ctx.fillStyle = "#0284C7";
      for (let x = 0; x < W; x += 100) {
        const bh = 100 + (x % 3) * 40;
        this.ctx.fillRect(x, horizonY - bh, 65, bh);
      }
    }

    this.ctx.fillStyle = "#334155";
    this.ctx.beginPath();
    this.ctx.moveTo(W * 0.45, horizonY);
    this.ctx.lineTo(W * 0.55, horizonY);
    this.ctx.lineTo(W * 0.9, H);
    this.ctx.lineTo(W * 0.1, H);
    this.ctx.closePath();
    this.ctx.fill();

    this.ctx.strokeStyle = currentBiome.accentColor;
    this.ctx.lineWidth = 6;
    this.ctx.beginPath();
    this.ctx.moveTo(W * 0.45, horizonY);
    this.ctx.lineTo(W * 0.1, H);
    this.ctx.moveTo(W * 0.55, horizonY);
    this.ctx.lineTo(W * 0.9, H);
    this.ctx.stroke();

    const carX = W * 0.5 + (this.carState.targetLaneX * 45);
    const carY = H * 0.82 - (this.carState.y * 30);

    this.ctx.fillStyle = "#0175C2";
    this.ctx.fillRect(carX - 45, carY - 20, 90, 40);
    this.ctx.fillStyle = "#0A0E1A";
    this.ctx.fillRect(carX - 25, carY - 12, 50, 24);
  }

  onWindowResize() {
    if (this.useWebGL) {
      this.camera.aspect = window.innerWidth / window.innerHeight;
      this.camera.updateProjectionMatrix();
      this.renderer.setSize(window.innerWidth, window.innerHeight);
    } else {
      this.canvas.width = window.innerWidth;
      this.canvas.height = window.innerHeight;
    }
  }
}
