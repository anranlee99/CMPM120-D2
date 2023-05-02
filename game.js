import { Incubator } from "./scenes/incubator.js";
import { Intro } from "./scenes/intro.js";
import { Outro } from "./scenes/outro.js";
class Demo2 extends AdventureScene {
    constructor() {
        super("demo2", "The second room has a long name (it truly does).");
    }
    onEnter() {
        this.add.text(this.w * 0.3, this.w * 0.4, "just go back")
            .setFontSize(this.s * 2)
            .setInteractive()
            .on('pointerover', () => {
                this.showMessage("You've got no other choice, really.");
            })
            .on('pointerdown', () => {
                this.gotoScene('demo1');
            });

        let finish = this.add.text(this.w * 0.6, this.w * 0.2, '(finish the game)')
            .setInteractive()
            .on('pointerover', () => {
                this.showMessage('*giggles*');
                this.tweens.add({
                    targets: finish,
                    x: this.s + (this.h - 2 * this.s) * Math.random(),
                    y: this.s + (this.h - 2 * this.s) * Math.random(),
                    ease: 'Sine.inOut',
                    duration: 500
                });
            })
            .on('pointerdown', () => this.gotoScene('outro'));
    }
}


const game = new Phaser.Game({
    scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH,
        width: 1920,
        height: 1080
    },
    scene: [Intro, Incubator, Demo2, Outro],
    title: "Everything's a Nail",
});

