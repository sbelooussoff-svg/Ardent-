/* Ardent Worlds — Three.js r180, MIT, locally hosted. Photographs remain the product source of truth. */
(function () {
  'use strict';
  if (window.ArdentWorld) { window.ArdentWorld.scan(); return; }
  var script = document.currentScript;
  var libraryURL = new URL('ardent-three.module.min.js', script ? script.src : location.href).href;
  var instances = new Map(), library, pendingLibrary, frame = 0, lastFrame = 0;
  var reduced = window.matchMedia('(prefers-reduced-motion: reduce)');
  var mobile = window.matchMedia('(max-width: 749px)');
  var MAX_CONTEXTS = 2, targetFPS = mobile.matches ? 28 : 40;
  var clamp = function (n, a, b) { return Math.min(b, Math.max(a, n)); };
  var style = document.createElement('style');
  style.textContent = '[data-ardent-world]{position:absolute;inset:0;overflow:hidden;isolation:isolate;background:#090a0c;pointer-events:none}[data-ardent-world][data-element="fire"]{background:radial-gradient(ellipse at 50% 110%,#a74618 0%,#291910 42%,#08080b 80%)}[data-ardent-world][data-element="water"]{background:radial-gradient(ellipse at 50% -10%,#4a929e,#0d353e 48%,#021b27 85%)}[data-ardent-world][data-element="air"]{background:linear-gradient(180deg,#526980,#c3c7ca 53%,#eadbcc)}[data-ardent-world]>canvas{display:block;width:100%;height:100%;opacity:0;transition:opacity .65s ease}[data-ardent-world][data-world-ready="true"]>canvas{opacity:1}[data-ardent-world][data-world-changing="true"]>canvas{opacity:0}@media(prefers-reduced-motion:reduce){[data-ardent-world]>canvas{transition:none}}';
  document.head.appendChild(style);

  function rand(seed) {
    var value = seed >>> 0;
    return function () { value = (value * 1664525 + 1013904223) >>> 0; return value / 4294967296; };
  }
  function load() {
    if (!pendingLibrary) pendingLibrary = import(libraryURL).then(function (m) { library = m; return m; }).catch(function (e) { console.warn('[Ardent] 3D unavailable; editorial background retained.', e.message); throw e; });
    return pendingLibrary;
  }
  function shader(THREE, uniforms, vertexShader, fragmentShader, options) {
    return new THREE.ShaderMaterial(Object.assign({ uniforms: uniforms, vertexShader: vertexShader, fragmentShader: fragmentShader }, options || {}));
  }
  var noiseGLSL = 'float hash(vec2 p){return fract(sin(dot(p,vec2(127.1,311.7)))*43758.5453);} float noise(vec2 p){vec2 i=floor(p),f=fract(p);f=f*f*(3.-2.*f);return mix(mix(hash(i),hash(i+vec2(1,0)),f.x),mix(hash(i+vec2(0,1)),hash(i+vec2(1,1)),f.x),f.y);} float fbm(vec2 p){return .5*noise(p)+.25*noise(p*2.03)+.125*noise(p*4.07)+.0625*noise(p*8.13);}';

  function makeAtmosphere(THREE, scene, element, uniforms) {
    var colors = element === 'fire' ? [0x090b12, 0x241710, 0x93441d] : element === 'water' ? [0x5da2b3, 0x0c3a47, 0x01131d] : [0x6488b4, 0xbecdd8, 0xf1dbc6];
    var mat = shader(THREE, { uTime: uniforms.time, uProgress: uniforms.progress, uTop: { value: new THREE.Color(colors[0]) }, uMid: { value: new THREE.Color(colors[1]) }, uBottom: { value: new THREE.Color(colors[2]) }, uAir: { value: element === 'air' ? 1 : 0 } },
      'varying vec3 vPos;void main(){vPos=position;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}',
      noiseGLSL + 'varying vec3 vPos;uniform float uTime,uProgress,uAir;uniform vec3 uTop,uMid,uBottom;void main(){vec3 p=normalize(vPos);float h=p.y*.5+.5;vec3 col=mix(uBottom,uMid,smoothstep(.06,.51,h));col=mix(col,uTop,smoothstep(.38,.9,h));float haze=fbm(p.xz*4.+vec2(uTime*.009,0.));col+=haze*.025;if(uAir>.5){float space=smoothstep(.48,1.,uProgress);col=mix(col,vec3(.007,.015,.04),space*smoothstep(.15,.7,h));}gl_FragColor=vec4(col,1.);}', { side: THREE.BackSide, depthWrite: false });
    var mesh = new THREE.Mesh(new THREE.SphereGeometry(110, 24, 16), mat); mesh.renderOrder = -10; scene.add(mesh);
  }

  function particles(THREE, scene, count, color, random, uniforms, type) {
    var geo = new THREE.BufferGeometry(), pos = new Float32Array(count * 3), seeds = new Float32Array(count);
    for (var i = 0; i < count; i++) { pos[i * 3] = (random() - .5) * 46; pos[i * 3 + 1] = random() * 27 - 10; pos[i * 3 + 2] = -random() * 50; seeds[i] = random(); }
    geo.setAttribute('position', new THREE.BufferAttribute(pos, 3)); geo.setAttribute('aSeed', new THREE.BufferAttribute(seeds, 1));
    var mat = shader(THREE, { uTime: uniforms.time, uColor: { value: new THREE.Color(color) }, uType: { value: type }, uProgress: uniforms.progress },
      'attribute float aSeed;uniform float uTime,uType,uProgress;varying float vAlpha;void main(){vec3 p=position;if(uType<.5){p.y=mod(p.y+uTime*(.6+aSeed*.8)+10.,27.)-10.;p.x+=sin(uTime*.2+aSeed*40.)*.8;}else if(uType<1.5){p.y+=sin(uTime*.25+aSeed*10.)*.4;p.x+=sin(uTime*.1+aSeed*16.)*.4;}vec4 mv=modelViewMatrix*vec4(p,1.);gl_Position=projectionMatrix*mv;gl_PointSize=clamp((uType>1.5?23.:45.)*(.25+aSeed)/-mv.z,1.,4.);vAlpha=uType>1.5?smoothstep(.45,.95,uProgress)*(.3+aSeed*.6):(.18+aSeed*.5);}',
      'uniform vec3 uColor;varying float vAlpha;void main(){float d=length(gl_PointCoord-.5)*2.;float a=(1.-smoothstep(.05,1.,d))*vAlpha;gl_FragColor=vec4(uColor,a);}', { transparent: true, blending: THREE.AdditiveBlending, depthWrite: false });
    var points = new THREE.Points(geo, mat); scene.add(points); return points;
  }

  function makeFire(THREE, scene, u, random, small) {
    scene.fog = new THREE.FogExp2(0x1a100d, .018);
    scene.add(new THREE.HemisphereLight(0x8099b0, 0x301509, 1.6));
    var sun = new THREE.DirectionalLight(0xdfb392, 3.1); sun.position.set(-8, 12, -8); scene.add(sun);
    var glow = new THREE.PointLight(0xff732a, 48, 40, 1.8); glow.position.set(0, -1, -10); scene.add(glow);
    var terrain = new THREE.PlaneGeometry(88, 88, small ? 70 : 100, small ? 70 : 100); terrain.rotateX(-Math.PI / 2);
    var p = terrain.attributes.position, c = new Float32Array(p.count * 3), vertexColor = new THREE.Color();
    for (var i = 0; i < p.count; i++) {
      var x = p.getX(i), z = p.getZ(i) - 10, r = Math.sqrt(x * x + (z + 12) * (z + 12));
      var rim = 4.8 * Math.exp(-Math.pow((r - 14) / 4.2, 2));
      var rough = (Math.sin(x * .73 + Math.sin(z * .3)) * .55 + Math.cos(z * 1.1 + x * .15) * .4 + Math.sin(x * 2.4 + z) * .18) * Math.min(1, r / 10);
      p.setY(i, -6 + rim + rough); p.setZ(i, z);
      vertexColor.setRGB(.072 + rough * .016, .065 + rough * .015, .060 + rough * .014); c.set([vertexColor.r, vertexColor.g, vertexColor.b], i * 3);
    }
    terrain.setAttribute('color', new THREE.BufferAttribute(c, 3)); terrain.computeVertexNormals();
    scene.add(new THREE.Mesh(terrain, new THREE.MeshStandardMaterial({ vertexColors: true, roughness: .98, metalness: .08 })));
    var lavaMat = shader(THREE, { uTime: u.time },
      'varying vec2 vUv;void main(){vUv=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}',
      noiseGLSL + 'varying vec2 vUv;uniform float uTime;void main(){vec2 p=vUv*14.;float n=fbm(p+vec2(uTime*.018,-uTime*.012));float crust=fbm(p*2.4+vec2(n*2.,uTime*.02));float seams=1.-smoothstep(.02,.10,abs(sin((n+crust*.25)*20.)));vec3 col=mix(vec3(.09,.018,.007),vec3(.95,.25,.025),seams);col+=vec3(.35,.085,.009)*smoothstep(.43,.75,n);gl_FragColor=vec4(col,1.);}', { side: THREE.DoubleSide });
    var lava = new THREE.Mesh(new THREE.CircleGeometry(12.5, 80), lavaMat); lava.rotation.x = -Math.PI / 2; lava.position.set(0, -5.7, -22); scene.add(lava);
    var rockGeo = makeRockGeometry(THREE), rockMat = makeRockMaterial(THREE, 0x242321, .07);
    var rocks = new THREE.InstancedMesh(rockGeo, rockMat, small ? 30 : 65), dummy = new THREE.Object3D();
    for (var k = 0; k < rocks.count; k++) { var angle = random() * Math.PI * 2, radius = 15 + random() * 18; dummy.position.set(Math.cos(angle) * radius, -4.6 + random() * 1.6, Math.sin(angle) * radius - 22); var size = .3 + random() * 2.5; dummy.scale.set(size, size * (.6 + random()), size); dummy.rotation.set(random(), random() * 6, random()); dummy.updateMatrix(); rocks.setMatrixAt(k, dummy.matrix); } scene.add(rocks);
    particles(THREE, scene, small ? 100 : 210, 0xffbd75, random, u, 0);
    return function (time, progress, camera, pointer) {
      camera.position.set(Math.sin(time * .025) * .3 + pointer.x * .32, 3.2 + progress * 3, 12 - progress * 14);
      camera.lookAt(pointer.x * .12, -1.7 + progress * .4, -17 - progress * 7);
      glow.intensity = 42 + Math.sin(time * 1.7) * 5 + Math.sin(time * 4.2) * 2;
    };
  }

  function makeWater(THREE, scene, u, random, small) {
    scene.fog = new THREE.FogExp2(0x073744, .022);
    scene.add(new THREE.HemisphereLight(0x9bd7e5, 0x05292e, 2.6));
    var sun = new THREE.DirectionalLight(0xc3eced, 3); sun.position.set(-10, 18, 4); scene.add(sun);
    var floorGeo = new THREE.PlaneGeometry(100, 100, 56, 56); floorGeo.rotateX(-Math.PI / 2);
    var p = floorGeo.attributes.position;
    for (var i = 0; i < p.count; i++) { var x = p.getX(i), z = p.getZ(i); p.setY(i, -13 + Math.sin(x * .28 + z * .1) * 1.3 + Math.sin(z * .23) * .7); }
    floorGeo.computeVertexNormals();
    var floorMat = new THREE.MeshStandardMaterial({ color: 0x507b77, roughness: .98 });
    floorMat.onBeforeCompile = function (s) { s.uniforms.uArdentTime = u.time; s.vertexShader = 'varying vec3 vArdentP;\n' + s.vertexShader.replace('#include <begin_vertex>', '#include <begin_vertex>\nvArdentP=position;'); s.fragmentShader = 'uniform float uArdentTime;varying vec3 vArdentP;\n' + s.fragmentShader.replace('#include <color_fragment>', '#include <color_fragment>\nfloat caustic=pow(max(0.,sin(vArdentP.x*1.9+sin(vArdentP.z*.9+uArdentTime*.5))+sin(vArdentP.z*2.2+cos(vArdentP.x+uArdentTime*.35)))*.5,7.);diffuseColor.rgb+=vec3(.18,.27,.25)*caustic;'); };
    scene.add(new THREE.Mesh(floorGeo, floorMat));
    var surfaceMat = shader(THREE, { uTime: u.time },
      'varying vec2 vUv;uniform float uTime;void main(){vUv=uv;vec3 p=position;p.z+=sin(p.x*.45+uTime*.55)*.2+cos(p.y*.52+uTime*.35)*.16;gl_Position=projectionMatrix*modelViewMatrix*vec4(p,1.);}',
      noiseGLSL + 'varying vec2 vUv;uniform float uTime;void main(){float n=fbm(vUv*16.+vec2(uTime*.045,uTime*.015));float rim=pow(1.-abs(sin(n*18.)),9.);vec3 col=mix(vec3(.08,.28,.33),vec3(.50,.77,.81),n);col+=rim*vec3(.3,.42,.4);gl_FragColor=vec4(col,.74);}', { transparent: true, side: THREE.DoubleSide, depthWrite: false });
    var surface = new THREE.Mesh(new THREE.PlaneGeometry(110, 110, 42, 42), surfaceMat); surface.rotation.x = Math.PI / 2; surface.position.y = 7.5; scene.add(surface);
    var beamMat = shader(THREE, { uTime: u.time },
      'varying vec2 vUv;void main(){vUv=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}',
      'varying vec2 vUv;uniform float uTime;void main(){float edge=pow(sin(vUv.x*3.14159),3.);float tip=smoothstep(0.,.15,vUv.y)*(1.-vUv.y)*.085;gl_FragColor=vec4(.55,.83,.84,edge*tip*(.8+sin(uTime*.4+vUv.y*6.)*.2));}', { transparent: true, depthWrite: false, side: THREE.DoubleSide, blending: THREE.AdditiveBlending });
    for (var b = 0; b < (small ? 5 : 9); b++) { var beam = new THREE.Mesh(new THREE.PlaneGeometry(1.7 + random() * 2.2, 32), beamMat); beam.position.set((random() - .5) * 40, -6, -8 - random() * 36); beam.rotation.z = -.23; scene.add(beam); }
    var rockGeo = makeRockGeometry(THREE), rockMat = makeRockMaterial(THREE, 0x153c40, .13);
    var rocks = new THREE.InstancedMesh(rockGeo, rockMat, 35), dummy = new THREE.Object3D();
    for (var r = 0; r < 35; r++) { dummy.position.set((random() - .5) * 70, -12, -random() * 65); var size = .7 + random() * 2.8; dummy.scale.set(size * 1.5, size, size); dummy.rotation.set(random(), random() * 6, random()); dummy.updateMatrix(); rocks.setMatrixAt(r, dummy.matrix); } scene.add(rocks);
    var school = new THREE.Group(), fishes = [], fishMaterial = new THREE.MeshStandardMaterial({ color: 0x0d303b, roughness: .56, metalness: .16 });
    var fishBody = new THREE.SphereGeometry(1, 10, 6);
    var tailGeo = new THREE.ConeGeometry(.21, .42, 3); tailGeo.rotateZ(-Math.PI / 2);
    for (var f = 0; f < (small ? 12 : 22); f++) { var fish = new THREE.Group(), body = new THREE.Mesh(fishBody, fishMaterial); body.scale.set(.38, .115, .09); fish.add(body); var tail = new THREE.Mesh(tailGeo, fishMaterial); tail.position.x = -.48; fish.add(tail); var base = { x: (random() - .5) * 36, y: -5 + random() * 10, z: -12 - random() * 35, speed: .7 + random(), phase: random() * 6.28 }; fish.userData = base; fish.scale.setScalar(.6 + random()); school.add(fish); fishes.push(fish); } scene.add(school);
    particles(THREE, scene, small ? 110 : 240, 0x9dd8df, random, u, 1);
    return function (time, progress, camera, pointer) {
      camera.position.set(pointer.x * .3 + Math.sin(time * .05) * .15, 1.4 - progress * 8, 10 - progress * 15);
      camera.lookAt(pointer.x * .15, -1 - progress * 5.5, -24 - progress * 20);
      scene.fog.density = .019 + progress * .017;
      fishes.forEach(function (fish) { var d = fish.userData; fish.position.set(((d.x + time * d.speed + 50) % 70) - 35, d.y + Math.sin(time * .6 + d.phase) * .45, d.z); fish.rotation.y = Math.sin(time * 3 + d.phase) * .14; fish.rotation.z = Math.cos(time * .6 + d.phase) * .02; });
    };
  }

  function makeAir(THREE, scene, u, random, small) {
    scene.fog = new THREE.FogExp2(0xc5d1dc, .004);
    var cloudGeo = new THREE.PlaneGeometry(1, 1), clouds = [];
    var cloudMat = shader(THREE, { uTime: u.time, uProgress: u.progress },
      'varying vec2 vUv;void main(){vUv=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}',
      noiseGLSL + 'varying vec2 vUv;uniform float uTime,uProgress;void main(){vec2 p=vUv-.5;float ellipse=1.-smoothstep(.13,.49,length(p*vec2(1.05,1.4)));float n=fbm(vUv*4.+vec2(uTime*.008,0.));float detail=smoothstep(.18,.65,n);float border=smoothstep(0.,.15,vUv.x)*smoothstep(0.,.15,1.-vUv.x)*smoothstep(0.,.18,vUv.y)*smoothstep(0.,.18,1.-vUv.y);float a=ellipse*detail*border*.88*(1.-smoothstep(.65,1.,uProgress));vec3 c=mix(vec3(.55,.66,.76),vec3(1.,.98,.91),smoothstep(.20,.72,vUv.y+n*.3));gl_FragColor=vec4(c,a);}', { transparent: true, depthWrite: false, side: THREE.DoubleSide });
    for (var i = 0; i < (small ? 15 : 24); i++) { var cloud = new THREE.Mesh(cloudGeo, cloudMat); var width = 22 + random() * 22; cloud.scale.set(width, width * (.45 + random() * .2), 1); cloud.position.set((random() - .5) * 85, -5 + random() * 16, -10 - random() * 75); cloud.userData = { x: cloud.position.x, phase: random() * 6.28 }; scene.add(cloud); clouds.push(cloud); }
    particles(THREE, scene, small ? 180 : 360, 0xe6edf9, random, u, 2);
    var earthMat = shader(THREE, { uProgress: u.progress },
      'varying vec2 vUv;varying vec3 vNormal,vView;void main(){vUv=uv;vec4 p=modelViewMatrix*vec4(position,1.);vView=-p.xyz;vNormal=normalMatrix*normal;gl_Position=projectionMatrix*p;}',
      noiseGLSL + 'varying vec2 vUv;varying vec3 vNormal,vView;uniform float uProgress;void main(){float rim=pow(1.-max(0.,dot(normalize(vNormal),normalize(vView))),4.);float cloud=fbm(vUv*40.);vec3 c=mix(vec3(.003,.014,.025),vec3(.06,.12,.18),cloud*.6);c+=vec3(.16,.48,.76)*rim;gl_FragColor=vec4(c,smoothstep(.35,.9,uProgress));}', { transparent: true, side: THREE.DoubleSide });
    var earth = new THREE.Mesh(new THREE.SphereGeometry(150, 56, 28), earthMat); earth.position.set(0, -161, -80); scene.add(earth);
    return function (time, progress, camera, pointer) {
      camera.position.set(pointer.x * .35, 2 + progress * 24, 15 - progress * 18);
      camera.lookAt(pointer.x * .15, 2 + progress * 11, -35);
      clouds.forEach(function (cloud) { cloud.position.x = cloud.userData.x + Math.sin(time * .022 + cloud.userData.phase) * 4 + time * .09; cloud.quaternion.copy(camera.quaternion); });
      scene.fog.density = .004 * (1 - progress);
    };
  }

  function makeRockGeometry(THREE) {
    var geo = new THREE.IcosahedronGeometry(1, 3), p = geo.attributes.position;
    for (var i = 0; i < p.count; i++) { var x = p.getX(i), y = p.getY(i), z = p.getZ(i); var d = 1 + .12 * Math.sin(x * 9 + z * 3) * Math.cos(y * 8 + z * 4) + .07 * Math.sin(z * 17 + x * 7); p.setXYZ(i, x * d, y * d, z * d); }
    // Keep the sphere's shared-direction normals: non-indexed recomputation would facet every triangle.
    return geo;
  }
  function makeRockMaterial(THREE, color, amount) {
    var material = new THREE.MeshStandardMaterial({ color: color, roughness: .98 });
    material.onBeforeCompile = function (s) { s.vertexShader = 'varying vec3 vRockP;\n' + s.vertexShader.replace('#include <begin_vertex>', '#include <begin_vertex>\nvRockP=position;'); s.fragmentShader = 'varying vec3 vRockP;\n' + s.fragmentShader.replace('#include <color_fragment>', '#include <color_fragment>\nfloat fleck=sin(vRockP.x*119.)*sin(vRockP.y*73.)*sin(vRockP.z*97.);diffuseColor.rgb*=.78+fleck*' + amount.toFixed(2) + ';'); };
    return material;
  }

  function disposeScene(scene) {
    if (!scene) return;
    var geometries = new Set(), materials = new Set();
    scene.traverse(function (object) { if (object.geometry) geometries.add(object.geometry); if (object.material) (Array.isArray(object.material) ? object.material : [object.material]).forEach(function (m) { materials.add(m); }); });
    geometries.forEach(function (g) { g.dispose(); }); materials.forEach(function (m) { m.dispose(); }); scene.clear();
  }
  function build(instance) {
    var THREE = library, scene = new THREE.Scene(), random = rand(instance.element === 'fire' ? 137 : instance.element === 'water' ? 683 : 991);
    var uniforms = { time: { value: 0 }, progress: { value: instance.progress } };
    makeAtmosphere(THREE, scene, instance.element, uniforms);
    var update = (instance.element === 'fire' ? makeFire : instance.element === 'water' ? makeWater : makeAir)(THREE, scene, uniforms, random, mobile.matches);
    disposeScene(instance.scene); instance.scene = scene; instance.uniforms = uniforms; instance.updateWorld = update; instance.sceneElement = instance.element;
  }
  function resize(instance) {
    if (!instance.renderer) return;
    var rect = instance.host.getBoundingClientRect(), width = Math.max(1, Math.round(rect.width)), height = Math.max(1, Math.round(rect.height));
    var pixelRatio = Math.min(window.devicePixelRatio || 1, mobile.matches ? 1.25 : 1.5, Math.sqrt(2000000 / (width * height)));
    instance.renderer.setPixelRatio(Math.max(.6, pixelRatio)); instance.renderer.setSize(width, height, false); instance.camera.aspect = width / height; instance.camera.updateProjectionMatrix(); instance.dirty = true;
  }
  function release(instance) {
    if (!instance.renderer) return;
    disposeScene(instance.scene); instance.scene = null;
    instance.renderer.dispose(); instance.renderer.forceContextLoss(); instance.renderer.domElement.remove(); instance.renderer = null;
    instance.host.removeAttribute('data-world-ready');
  }
  function activate(instance) {
    if (instance.renderer || instance.loading || instance.failed || !instance.host.isConnected) return;
    instance.loading = true;
    load().then(function (THREE) {
      instance.loading = false;
      if (!instance.visible || document.hidden || !instance.host.isConnected || !instances.has(instance.host)) return;
      var active = Array.from(instances.values()).filter(function (item) { return !!item.renderer; });
      if (active.length >= MAX_CONTEXTS) { var expendable = active.find(function (item) { return !item.visible; }); if (expendable) release(expendable); else return; }
      try {
        var renderer = new THREE.WebGLRenderer({ alpha: false, antialias: !mobile.matches, powerPreference: 'low-power', failIfMajorPerformanceCaveat: true });
        renderer.setClearColor(0x080b10, 1); renderer.outputColorSpace = THREE.SRGBColorSpace; renderer.toneMapping = THREE.ACESFilmicToneMapping; renderer.toneMappingExposure = 1.08;
        renderer.domElement.setAttribute('aria-hidden', 'true'); renderer.domElement.tabIndex = -1;
        instance.renderer = renderer; instance.camera = new THREE.PerspectiveCamera(44, 1, .1, 230); instance.host.appendChild(renderer.domElement);
        renderer.domElement.addEventListener('webglcontextlost', function (event) { event.preventDefault(); if (instance.renderer) { instance.failed = true; release(instance); } }, { once: true });
        build(instance); resize(instance); instance.dirty = true; instance.host.dataset.worldReady = 'true'; schedule();
      } catch (error) { instance.failed = true; release(instance); instance.host.dataset.worldFallback = 'true'; console.warn('[Ardent] Static fallback:', error.message); }
    }).catch(function () { instance.loading = false; instance.failed = true; instance.host.dataset.worldFallback = 'true'; });
  }
  function schedule() { if (!frame && !document.hidden) frame = requestAnimationFrame(render); }
  function render(now) {
    frame = 0; var delta = Math.min((now - lastFrame) / 1000, .08);
    if (now - lastFrame < 1000 / targetFPS) { schedule(); return; } lastFrame = now;
    var keepGoing = false;
    instances.forEach(function (instance) {
      if (!instance.host.isConnected) { instance.controller.destroy(); return; }
      if (!instance.visible || !instance.renderer) return;
      if (instance.paused && !instance.dirty) return;
      if (!reduced.matches && !instance.paused) { instance.time += delta; keepGoing = true; }
      if (!instance.dirty && reduced.matches) return;
      if (instance.sceneElement !== instance.element) build(instance);
      instance.progress += (instance.targetProgress - instance.progress) * (reduced.matches ? 1 : .075);
      if (Math.abs(instance.targetProgress - instance.progress) > .001) { instance.dirty = true; keepGoing = true; } else instance.dirty = false;
      instance.uniforms.time.value = instance.time; instance.uniforms.progress.value = instance.progress;
      instance.updateWorld(instance.time, instance.progress, instance.camera, reduced.matches ? { x: 0, y: 0 } : instance.pointer);
      instance.renderer.render(instance.scene, instance.camera);
    });
    if (keepGoing && !document.hidden) schedule();
  }
  var observer = 'IntersectionObserver' in window ? new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) { var instance = instances.get(entry.target); if (!instance) return; instance.visible = entry.isIntersecting && entry.intersectionRatio > 0; instance.dirty = true; if (!instance.visible) release(instance); });
    instances.forEach(function (instance) { if (instance.visible) activate(instance); }); schedule();
  }, { threshold: [0, .01, .25] }) : null;

  function mount(host) {
    if (!host || host.nodeType !== 1) return null;
    if (instances.has(host)) return instances.get(host).controller;
    var instance = { host: host, element: ['fire', 'water', 'air'].indexOf(host.dataset.element) > -1 ? host.dataset.element : 'fire', sceneElement: null, progress: clamp(Number(host.dataset.progress) || 0, 0, 1), targetProgress: clamp(Number(host.dataset.progress) || 0, 0, 1), pointer: { x: 0, y: 0 }, visible: !observer, paused: false, dirty: true, time: 0, renderer: null, loading: false, failed: false };
    instance.controller = {
      setElement: function (element) { if (['fire', 'water', 'air'].indexOf(element) < 0 || instance.element === element) return; instance.element = element; host.dataset.element = element; instance.dirty = true; schedule(); },
      setProgress: function (progress) { instance.targetProgress = clamp(Number(progress) || 0, 0, 1); instance.dirty = true; schedule(); },
      setPaused: function (paused) { instance.paused = !!paused; instance.dirty = true; schedule(); },
      resize: function () { resize(instance); schedule(); },
      destroy: function () { if (observer) observer.unobserve(host); if (instance.resizeObserver) instance.resizeObserver.disconnect(); instance.attributes.disconnect(); release(instance); instances.delete(host); },
      get is3D() { return !!instance.renderer; }
    };
    instances.set(host, instance);
    instance.attributes = new MutationObserver(function (changes) { changes.forEach(function (change) { if (change.attributeName === 'data-element') instance.controller.setElement(host.dataset.element); else instance.controller.setProgress(host.dataset.progress); }); });
    instance.attributes.observe(host, { attributes: true, attributeFilter: ['data-element', 'data-progress'] });
    if ('ResizeObserver' in window) { instance.resizeObserver = new ResizeObserver(function () { resize(instance); schedule(); }); instance.resizeObserver.observe(host); }
    if (observer) observer.observe(host); else activate(instance);
    return instance.controller;
  }
  function scan(root) { (root || document).querySelectorAll('[data-ardent-world]').forEach(mount); }
  window.ArdentWorld = { mount: mount, scan: scan, version: '1.0.0', diagnostics: function () { return Array.from(instances.values()).map(function (i) { return { element: i.element, visible: i.visible, active: !!i.renderer, fallback: i.failed, progress: i.targetProgress, time: i.time, drawCalls: i.renderer ? i.renderer.info.render.calls : 0, geometries: i.renderer ? i.renderer.info.memory.geometries : 0 }; }); } };
  document.addEventListener('pointermove', function (event) { if (event.pointerType === 'touch' || reduced.matches) return; instances.forEach(function (i) { if (!i.visible) return; var r = i.host.getBoundingClientRect(); i.pointer.x = clamp((event.clientX - r.left) / r.width - .5, -.5, .5); i.pointer.y = clamp((event.clientY - r.top) / r.height - .5, -.5, .5); }); }, { passive: true });
  document.addEventListener('visibilitychange', function () { if (document.hidden) { cancelAnimationFrame(frame); frame = 0; } else { lastFrame = performance.now(); instances.forEach(function (i) { if (i.visible) { i.dirty = true; activate(i); } }); schedule(); } });
  document.addEventListener('shopify:section:load', function (event) { scan(event.target); });
  document.addEventListener('shopify:section:unload', function (event) { instances.forEach(function (i) { if (event.target.contains(i.host)) i.controller.destroy(); }); });
  reduced.addEventListener('change', function () { instances.forEach(function (i) { i.dirty = true; }); schedule(); });
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', function () { scan(); }, { once: true }); else scan();
})();
