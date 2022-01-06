class PlayerFlap extends Phaser.GameObjects.Sprite{
    constructor(config){
        super(config.scene, config.x, config.y);
        this.scene = config.scene;
        this.scene.physics.world.enable(this);
        this.scene.add.existing(this);
        this.spriteName = "playerFlap";
        this.actualAnimation = "player_flap";
        this.body.setSize(63, 40);
        this.body.setOffset(0, -1);
        this.setScale(1.7);
        this.anims.play(this.actualAnimation);
        this.movement = this.scene.input.keyboard.createCursorKeys();
        this.setFlipY(config.flipY);
        this.body.setGravityY(config.gravityY);
        this.isGravityInverted = config.isGravityInverted;
    }

    update(){
        if (this.movement.up.isDown){
            this.body.setVelocityY(-400);       
        } 
    }
}

export default PlayerFlap;