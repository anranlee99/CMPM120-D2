import { Intro } from "./scenes/intro.js";
import { Incubator } from "./scenes/incubator.js";
import { Facts } from "./scenes/facts.js";
import { Program } from "./scenes/program.js";
import { Evolution } from "./scenes/evolution.js";
import { Server } from "./scenes/server.js";
import { Hammer } from "./scenes/hammer.js";
import { Outro } from "./scenes/outro.js";




const game = new Phaser.Game({
    scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH,
        width: 1920 ,
        height: 1080
    },
    parent: 'app',
    physics: {
        default: 'arcade',
        arcade: {
            debug: true
        }
    },
    scene: [Intro, Incubator, Facts, Program, Server, Evolution, Hammer, Outro],
    title: "Everything's a Nail",
});