import PlayerFlap from "../../PlayerFlap/PlayerFlap.js";
import Obstacule from "../../obstacules/Obstacule.js";

class Nivel3 extends Phaser.Scene {
    constructor() {
        super({
            key: "Nivel3"
        });
        this.velocityX = -300;
        this.obstaculesObject = [];
    }

    init() {
        console.log("Nivel 3 start");
        this.song = null;
        this.isPaused = false;
    }
    //  COMPLETAR NAVBAR
    create() {
        // create scene
        this.loadScene();

        // create portal
        this.portalVictoria = this.physics.add.sprite(5500, 200, "portal")
            .setScale(1.4)
            .setVelocityX(this.velocityX);
        // create player
        this.player = new PlayerFlap({
            scene: this,
            x: 200,
            y: this.scale.height - 150,
            flipY: false,
            gravityY: 4000,
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
        this.background = this.physics.add.sprite(0, -20, "background3")
            .setOrigin(0, 0)
            .setVelocityX(this.velocityX);

        this.walls = this.physics.add.staticGroup();
        this.walls.create(0, this.scale.height, "invisible-floor")
            .setOrigin(0, 0)
            .setSize(15000, 100);

        this.walls.create(0, 0, "invisible-floor")
            .setOrigin(0, 1)
            .setSize(15000, 60);
        this.walls.refresh();

        this.song = this.sound.add('song2');
        this.song.play();
    }

    addColliders() {
        this.physics.add.collider([this.player, this.background], this.walls);
        this.physics.add.collider(this.obstaculesObject, this.walls);
        this.physics.add.collider(this.player, this.obstaculesObject, () => {
            this.song.stop();
            this.scene.start("GameOver");
        })

        this.physics.add.overlap(this.player, this.portalVictoria, () => {
            this.song.stop();
            this.scene.start("Victory");
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
            this.scene.pause("Nivel3");
            this.pauseButton.visible = true;
        } else {
            this.scene.resume("Nivel3");
            // this.song.resume();
            this.isPaused = false;
            console.log("Juego Continua");
            this.pauseButton.visible = false;
        }
    }

    loadObstacles() {
        api.fetchObstacles(3)
            .then(responseA => {
                responseA.forEach(obs => {
                    let tam = 1;
                    if (obs.spriteName === 'obstacule_7') {
                        tam = 0.3;
                    }
                    this.obstaculesObject.push(new Obstacule({
                        scene: this,
                        x: obs.x_value,
                        y: obs.y_value,
                        spriteName: obs.spriteName,
                        flipY: false,
                        gravityY: 0,
                        scale: tam,
                        size: {
                            x: 70,
                            y: 35
                        },
                        offset: {
                            x: 1,
                            y: 10
                        }
                    }, this.input));
                });
            })
    }
}

export default Nivel3;