// ovde mozemo da dodamo i funkcije gde resizujemo delove programa mada moze i sa css da se sredi to

class resize {
    constructor(camera, renderer) {
        this.camera = camera
        this.renderer = renderer
    }
    resizeCamera() {
        console.log("d")
        this.camera.aspect= window.innerWidth / window.innerHeight;
        this.camera.left = window.innerWidth / - 240
        this.camera.right = window.innerWidth / 240
        this.camera.top = window.innerHeight / 280
        this.camera.bottom = window.innerHeight / - 280
        this.camera.lookAt(0, 0.3, 0)
        this.camera.updateProjectionMatrix();
        this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        this.renderer.setSize(window.innerWidth, window.innerHeight);
    }
}

export default resize