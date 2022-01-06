import Bootloader from './Bootloader.js';
import Menu from './scenes/Menu.js'; 
import Pause from './scenes/Pause.js' 
import Nivel1 from './scenes/Nivel1.js';
import Nivel2 from './scenes/Nivel2.js';
import Nivel3 from './scenes/Nivel3.js';
import Victory from './scenes/Victory.js';
import GameOver from './scenes/GameOver.js';

const config = {
    title: "TrabajoFinal",
    version: "0.0.1",
    type: Phaser.AUTO,
    scale: {
        parent: "phaser_container",
        width: 800,
        height: 500,
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH
    },
    backgroundColor: "#f9ca24",
    pixelArt: true,
    physics: {
        default: "arcade",
        "arcade": {
            gravity: {
                y: 0,
                x: 0
            },
            debug: false
        }
    },
    scene: [
        Bootloader,
        Menu,
        Pause,
        Nivel1,
        Nivel2,
        Nivel3,
        Victory,
        GameOver
    ]
};

new Phaser.Game(config);