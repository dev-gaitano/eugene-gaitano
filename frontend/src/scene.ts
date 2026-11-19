import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";

import fragment from "./shader/fragment.glsl";
import vertex from "./shader/vertex.glsl";

export function init(container: HTMLElement) {
  let animationFrameId: number;

  // Render
  const renderer = new THREE.WebGLRenderer();
  renderer.setPixelRatio(window.devicePixelRatio);
  container.appendChild(renderer.domElement);

  // Scene
  const camera = new THREE.PerspectiveCamera(
    45,
    window.innerWidth / window.innerHeight,
    0.1,
    1000,
  );
  camera.position.set(0, 0, 1.3);

  const controls = new OrbitControls(camera, renderer.domElement);

  const scene = new THREE.Scene();
  const timer = new THREE.Timer();

  // Add objects
  const geometry = new THREE.SphereGeometry(1.5, 32, 32);

  const uniforms = {
    uTime: { type: "f", value: 0.0 },
    uResolution: { type: "v2", value: new THREE.Vector2() },
    uMouse: { type: "v2", value: new THREE.Vector2() },
  };

  const material = new THREE.ShaderMaterial({
    uniforms: uniforms,
    vertexShader: vertex,
    fragmentShader: fragment,
    side: THREE.DoubleSide,
    //wireframe: true,
    //transparent: true,
  });

  const mesh = new THREE.Mesh(geometry, material);
  scene.add(mesh);

  // Handle window resize
  function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();

    renderer.setSize(window.innerWidth, window.innerHeight);
    uniforms.uResolution.value.x = renderer.domElement.width;
    uniforms.uResolution.value.y = renderer.domElement.height;
  }

  function onMouseMove(e: MouseEvent) {
    uniforms.uMouse.value.x = e.pageX;
    uniforms.uMouse.value.y = e.pageY;
  }

  onWindowResize();
  window.addEventListener("resize", onWindowResize);
  window.addEventListener("mousemove", onMouseMove);

  function animate() {
    animationFrameId = requestAnimationFrame(animate);
    controls.update();
    render();
  }

  function render() {
    timer.update();
    uniforms.uTime.value += timer.getDelta();
    renderer.render(scene, camera);
  }

  animate();

  // Cleanup
  return () => {
    cancelAnimationFrame(animationFrameId);
    window.removeEventListener("resize", onWindowResize);
    window.removeEventListener("mousemove", onMouseMove);
    renderer.dispose();
    geometry.dispose();
    material.dispose();
    if (container.contains(renderer.domElement)) {
      container.removeChild(renderer.domElement);
    }
  };
}
