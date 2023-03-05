import * as THREE from "three";
import { OrbitControls } from "https://samoolean.github.io/UniPourTous/js/OrbitControls.js";
//import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

//v.2.0.3(index)

let controls = new OrbitControls( camera, renderer.domElement );

let scene = new THREE.Scene();
let camera = new THREE.PerspectiveCamera(100, window.innerWidth / window.innerHeight, 0.1, 3000);

let renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);
/*
renderer.setClearColor(0xf58a42);
camera.Posistion.z = 100;
renderer.render(scene, camera);*/ 

var geometry = new THREE.BoxGeometry( 1, 1, 1 );
var material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );

var cube = new THREE.Mesh( geometry, material );
scene.add( cube );

camera.position.z = 5;

controls.update;

let animate = function() {

	requestAnimationFrame(animate);

	cube.rotation.x += 0.02
	cube.rotation.y += 0.01

	renderer.render(scene, camera);
}

animate();
