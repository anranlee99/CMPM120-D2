import { Intro } from "./scenes/intro.js";
import { Incubator } from "./scenes/incubator.js";
import { Tasks } from "./scenes/tasks.js";
import { Outro } from "./scenes/outro.js";



const game = new Phaser.Game({
    scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH,
        width: 1920,
        height: 1080
    },
    physics: {
        default: 'arcade',
        arcade: {
            debug: false
        }
    },
    scene: [Intro, Incubator, Tasks, Outro],
    title: "Everything's a Nail",
});

