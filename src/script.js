import * as THREE from "three";
import orbitBallController from './orbitBallController'
import createBasicScene from "./createBasicScene";
import resize from "./resize"
import './style.css'

const canvas = document.getElementById("mainCanvas")

let basicScene  = new createBasicScene(canvas)
basicScene.createScene()

const camera = basicScene.camera
const renderer = basicScene.renderer
const scene = basicScene.scene
const controls = basicScene.controls

let resizer = new resize(camera, renderer)
window.addEventListener("resize", ()=> {resizer.resizeCamera()})

function animate() {
    controls.update();
	renderer.render(scene, camera);
    requestAnimationFrame(animate);
}
animate()