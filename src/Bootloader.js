class Bootloader extends Phaser.Scene {
    constructor() {
        super('Bootloader'); 
    }

    preload() {
        this.load.setPath('./assets/game/');
        this.load.image([
            "floor",
            "floor2",
            "invisible-floor",
            "background",
            "background2",
            "background3",
            "portalGravity",
            "portal",
            "portalFlap",
            "menu",
            "pause",
            "victory",
            "gameOver"
        ]);

        this.load.atlas("player_flap", "../playerFlap/playerFlap.png", "../playerFlap/playerFlap_atlas.json");
        this.load.animation("playerFlapAnim", "../playerFlap/playerFlap_anims.json");

        this.load.atlas("player", "../player/player.png", "../player/player_atlas.json");
        this.load.animation("playerAnim", "../player/player_anims.json");

        this.load.atlas("obstacule_7", "../obstacule_7/obstacule_7.png", "../obstacule_7/obstacule_7_atlas.json");
        this.load.animation("obstacule7Anim", "../obstacule_7/obstacule_7_anims.json");

        this.load.atlas("obstacule_6", "../obstacule_6/obstacule_6.png", "../obstacule_6/obstacule_6_atlas.json");
        this.load.animation("obstacule6Anim", "../obstacule_6/obstacule_6_anims.json");

        this.load.atlas("obstacule_5", "../obstacule_5/obstacule_5.png", "../obstacule_5/obstacule_5_atlas.json");
        this.load.animation("obstacule5Anim", "../obstacule_5/obstacule_5_anims.json");

        this.load.atlas("obstacule_4", "../obstacule_4/obstacule_4.png", "../obstacule_4/obstacule_4_atlas.json");
        this.load.animation("obstacule4Anim", "../obstacule_4/obstacule_4_anims.json");

        this.load.atlas("obstacule_3", "../obstacule_3/obstacule_3.png", "../obstacule_3/obstacule_3_atlas.json");
        this.load.animation("obstacule3Anim", "../obstacule_3/obstacule_3_anims.json");

        this.load.atlas("obstacule_2", "../obstacule_2/obstacule_2.png", "../obstacule_2/obstacule_2_atlas.json");
        this.load.animation("obstacule2Anim", "../obstacule_2/obstacule_2_anims.json");

        this.load.atlas("obstacule_1", "../obstacule_1/obstacule_1.png", "../obstacule_1/obstacule_1_atlas.json");
        this.load.animation("obstacule1Anim", "../obstacule_1/obstacule_1_anims.json");

        this.load.audio('song', "../sounds/sound1.ogg");

        this.load.audio('song1', "../sounds/sound2.ogg");

        this.load.audio('song2', "../sounds/sound3.ogg");

        this.load.on('complete', () => {
            this.scene.start("Menu");
        });
    }

    create() {
    }
}
export default Bootloader;