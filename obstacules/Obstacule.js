class Obstacule extends Phaser.GameObjects.Sprite {
    constructor(config){
        super(config.scene, config.x, config.y);
        this.scene = config.scene;
        this.scene.physics.world.enable(this);
        this.scene.add.existing(this);

        // set properties
        this.previousMovement = "run";
        this.spriteName = config.spriteName;
        this.actualAnimation = config.spriteName + "_run";
        this.anims.play(this.actualAnimation);
        // 15, 35
        this.body.setSize(config.size.x, config.size.y);
        this.body.setOffset(config.offset.x, config.offset.y);
        this.body.setVelocityX(-300);
        this.body.setGravityY(config.gravityY);
        this.setScale(config.scale);
        this.setFlipY(config.flipY);
        this.setFlipX(config.flipX);
    }
}

export default Obstacule;