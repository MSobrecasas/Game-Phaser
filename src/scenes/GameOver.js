class GameOver extends Phaser.Scene {
    constructor() {
        super({
            key: "GameOver"
        });
        this.velocityX = -300;
    }

    init() {
        console.log("GameOver");
    }
    create() {
        this.background = this.physics.add.sprite(0, -20, "background")
        .setOrigin(0, 0)
        .setVelocityX(this.velocityX);

        this.startButton = this.add.sprite(400,250,'gameOver').setInteractive();

        this.startButton.on('pointerdown', () => {
            this.scene.start("Menu");
          });
    
    }




    update() {

    }


}

export default GameOver;