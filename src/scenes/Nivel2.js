import Player from "../../Player/Player.js";
import Obstacule from "../../obstacules/Obstacule.js";

class Nivel2 extends Phaser.Scene {
    constructor() {
        super({
            key: "Nivel2"
        });
        this.velocityX = -300;
        this.obstaculesObject = [];
    }

    init() {
        console.log("Nivel 2 start");
        this.song = null;
        this.isPaused = false;
    }

    create() {
        // create scene
        this.loadScene();


        // create portal
        this.portalNivel2 = this.physics.add.sprite(5500, 200, "portalFlap")
            .setScale(1.4)
            .setVelocityX(this.velocityX);
        // create player
        this.player = new Player({
            scene: this,
            x: 200,
            y: this.scale.height - 150,
            flipY: true,
            gravityY: -4000,
            isGravityInverted: true,
        }, this.input);

        // create enemies
        this.loadObstacles();

        //create colliders
        this.addColliders();

        this.pauseButton = this.add.sprite(400, 250, 'pause', { frameWidth: 100, frameHeight: 49 }).setInteractive().setScale(0.5);
        
        var keyObj = this.input.keyboard.addKey('p');

        keyObj.on('down', () => {
            this.isGamePaused();
        });

    }

    loadScene() {
        this.background = this.physics.add.sprite(0, -20, "background2")
            .setOrigin(0, 0)
            .setVelocityX(this.velocityX);

        this.walls = this.physics.add.staticGroup();
        this.walls.create(0, this.scale.height, "invisible-floor")
            .setOrigin(0, 0)
            .setSize(15000, 100);

        this.walls.create(0, 0, "floor2")
            .setOrigin(0, 0)
            .setSize(15000, 60);
        this.walls.refresh();

        this.song = this.sound.add('song1');
        this.song.play();
    }

    addColliders() {
        this.physics.add.collider([this.player, this.portalNivel2, this.background], this.walls);
        this.physics.add.collider(this.obstaculesObject, this.walls);
        this.physics.add.collider(this.player, this.obstaculesObject, () => {
            this.song.stop();
            this.scene.start("GameOver");
        })

        this.physics.add.overlap(this.player, this.portalNivel2, () => {
            this.song.stop();
            this.scene.start("Nivel3");
        })
    }

    update() {
        this.player.update();
        this.pauseButton.visible = false;
    }

    isGamePaused() {

        if (this.isPaused === false) {
            
            this.isPaused = true;
            console.log("Juego Pausado");
            // this.song.pause();
            this.scene.launch("Pause");
            this.scene.setVisible(true, "Pause");
            this.scene.pause("Nivel2");
            this.pauseButton.visible = true;
        } else {
            this.scene.resume("Nivel2");
            // this.song.resume();
            this.isPaused = false;
            console.log("Juego Continua");
            this.pauseButton.visible = false;
        }
    }

    loadObstacles() {
        api.fetchObstacles(2)
            .then(responseA => {
                responseA.forEach(obs => {
                    let gravityY = -4000;
                    let flipX = false;
                    let flipY = true;
                    if (obs.spriteName === 'obstacule_5') {
                        gravityY = 0;
                        flipX = true;
                        flipY = false;
                    }
                    this.obstaculesObject.push(new Obstacule({
                        scene: this,
                        x: obs.x_value,
                        y: obs.y_value,
                        spriteName: obs.spriteName,
                        flipY: flipY,
                        flipX: flipX,
                        gravityY: gravityY,
                        scale: 3.4,
                        size: {
                            x: 10,
                            y: 15
                        },
                        offset: {
                            x: 5,
                            y: 0
                        }

                    }, this.input));
                });
            })
    }
}

export default Nivel2;