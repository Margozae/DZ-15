'use strict';
const scene = new THREE.Scene();

const WIDTH = window.innerWidth;
const HEIGHT = window.innerHeight;

const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(WIDTH, HEIGHT);
renderer.setClearColor(0xDDDDDD, 1);
document.body.appendChild(renderer.domElement);

const camera = new THREE.PerspectiveCamera(70, WIDTH / HEIGHT);
camera.position.z = 50;
scene.add(camera);

const geometry = new THREE.TorusBufferGeometry(10, 3, 16, 50);
const material = new THREE.MeshNormalMaterial({ color: 0xffff00 });
const torus = new THREE.Mesh(geometry, material);
scene.add(torus);

const geometryCone = new THREE.ConeGeometry(5, 20, 32);
const materialCone = new THREE.MeshPhongMaterial({ color: 0x80ff00 });
const cone = new THREE.Mesh(geometryCone, materialCone);
scene.add(cone);
cone.rotation.x = 5;

const light = new THREE.DirectionalLight(0xffff00, 1);
light.position.set(5, 2, 6);

scene.add(light);

function render() {
    requestAnimationFrame(render);
    renderer.render(scene, camera);
    torus.rotation.x += 0.01;
    cone.rotation.x += 0.01;
}
render();