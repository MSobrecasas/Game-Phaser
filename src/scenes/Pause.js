class Pause extends Phaser.Scene {
    constructor() {
        super({
            key: "Pause"
        });

    }

    init() {
        console.log("Pause");
    }
    create() {
        this.add.sprite(400, 250, 'pause');


    }

    update() {
        var keyObj = this.input.keyboard.addKey('p');
        keyObj.on('down', () => {

            this.scene.resume("Nivel1");
            this.scene.resume("Nivel2");
            this.scene.resume("Nivel3");
            this.scene.stop();
        });
    }


}

export default Pause;