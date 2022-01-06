class Victory extends Phaser.Scene {
    constructor() {
        super({
            key: "Victory"
        });
        this.velocityX = -300;
    }

    init() {
        console.log("Victory");
    }
    create() {
        this.background = this.physics.add.sprite(0, -20, "background2")
        .setOrigin(0, 0)
        .setVelocityX(this.velocityX);

        this.startButton = this.add.sprite(400,250,'victory').setInteractive();
        
        this.startButton.on('pointerdown', () => {
            this.scene.start("Menu");
          });
    
    }




    update() {

    }


}

export default Victory;