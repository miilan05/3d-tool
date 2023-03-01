import * as THREE from "three";
import {OrbitControls} from '../node_modules/three/examples/jsm/controls/OrbitControls';

class createBasicScene {
    constructor(canvas) {
      this.canvas = canvas
      this._camera = null
      this._renderer = null
      this._scene = null
      this._controls = null
      
    }
    
    createScene() {
        const scene = new THREE.Scene()

        const geometry = new THREE.BoxGeometry(5, 5, 5)
        const material = new THREE.MeshStandardMaterial({color: "blue"})
        const mesh = new THREE.Mesh(geometry, material)
        
        const light2 = new THREE.AmbientLight(0xffffff, 0.4)
        const light3 = new THREE.DirectionalLight(0xffffff, 0.6) 

        const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 3, 1000)
        // const camera = new THREE.OrthographicCamera(window.innerWidth / - 240, window.innerWidth / 240, window.innerHeight / 280, window.innerHeight / - 280, 0, 1000 );
        camera.position.set(10, 10, 10)
        camera.lookAt(0, 0, 0)  

        const renderer = new THREE.WebGLRenderer({canvas: this.canvas, antialias: true, alpha:true})
        renderer.setClearColor(0x000000, 0)
        renderer.setSize(window.innerWidth, window.innerHeight)
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
        renderer.render(scene, camera)

        const controls = new OrbitControls(camera, renderer.domElement);
        controls.enableRotate = true
        controls.enablePan = false

        scene.add(mesh, light2, light3, camera)    

        this._camera = camera
        this._renderer = renderer
        this._scene = scene
        this._controls = controls
    }

    get camera() {
        return this._camera
    }

    get renderer() {
        return this._renderer
    }

    get scene() {
        return this._scene
    }

    get controls() {
        return this._controls
    }

}

 export default createBasicScene 