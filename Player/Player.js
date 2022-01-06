class Player extends Phaser.GameObjects.Sprite{
    constructor(config){
        super(config.scene, config.x, config.y);
        this.scene = config.scene;
        this.scene.physics.world.enable(this);
        this.scene.add.existing(this);
        this.previousMovement = "run";
        this.spriteName = "player";
        this.actualAnimation = "player_run";
        this.body.setSize(35, 95);
        this.body.setOffset(0, -1);
        this.setScale(1.7);
        this.anims.play(this.actualAnimation);
        this.movement = this.scene.input.keyboard.createCursorKeys();
        this.isJumping = true;
        this.setFlipY(config.flipY);
        this.body.setGravityY(config.gravityY);
        this.isGravityInverted = config.isGravityInverted;
    }

    update(){
        if (this.movement.up.isDown && !this.isJumping && !this.isGravityInverted){
            this.isJumping = true;
            this.body.setVelocityY(-1500);
            if (this.previousMovement !== "jump"){
                this.previousMovement = "jump";
                this.anims.play("player_jump");
            }
        } else if (this.movement.up.isDown && !this.isJumping && this.isGravityInverted){
            this.isJumping = true;
            this.body.setVelocityY(1300);
            if (this.previousMovement !== "jump"){
                this.previousMovement = "jump";
                this.anims.play("player_run");
            }
        } else if (this.body.blocked.down || this.body.blocked.up){
            this.isJumping = false;
            this.body.setVelocityY(0);
            if (this.previousMovement !== "run"){
                this.previousMovement = "run";
                this.anims.play("player_run");
            }
        }
    }
}

export default Player;