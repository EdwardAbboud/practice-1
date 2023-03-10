import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import Stats from "three/examples/jsm/libs/stats.module.js";

const CubeCreator = (myDiv, shapeSelector) => {
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(
    50,
    window.innerWidth / window.innerHeight,
    1,
    1000
  );
  camera.position.z = 96;

  const canvas = document.getElementById(myDiv);
  const renderer = new THREE.WebGL1Renderer({
    canvas,
    antialias: true,
  });
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.body.appendChild(renderer.domElement);

  const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
  ambientLight.castShadow = true;
  scene.add(ambientLight);

  const spotLight = new THREE.SpotLight(0xffffff, 1);
  spotLight.castShadow = true;
  spotLight.position.set(0, 64, 32);
  scene.add(spotLight);

  const boxMaterial = new THREE.MeshNormalMaterial();
  const boxMesh = new THREE.Mesh(shapeSelector, boxMaterial);
  scene.add(boxMesh);

  const controls = new OrbitControls(camera, renderer.domElement);
  const stats = Stats();
  document.body.appendChild(stats.dom);

  const animate = () => {
    stats.update();
    controls.update();
    renderer.render(scene, camera);
    window.requestAnimationFrame(animate);
  };

  animate();
};

export default CubeCreator;
