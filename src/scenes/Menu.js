class Menu extends Phaser.Scene {
    constructor() {
        super({
            key: "Menu"
        });
        this.velocityX = -300;

    }

    init() {
        console.log("Menu");
    }
    create() {
        this.background = this.physics.add.sprite(0, -20, "background")
            .setOrigin(0, 0)
            .setVelocityX(this.velocityX);

        this.startButton = this.add.sprite(400,250,'menu').setInteractive();
        this.startButton.width = 200;
        this.startButton.height = 200;

        this.startButton.on('pointerdown', () => {
            this.scene.start("Nivel1");
          });
    
    }




    update() {

    }


}

export default Menu;