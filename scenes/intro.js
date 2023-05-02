export class Intro extends Phaser.Scene {
    constructor() {
        super('intro')
    }
    create() {
        this.add.text(50, 50, "Adventure awaits!").setFontSize(50);
        this.add.text(50, 100, "Click anywhere to begin.").setFontSize(20);
        this.input.on('pointerdown', () => {
            this.cameras.main.fade(1000, 0, 0, 0);
            this.time.delayedCall(1000, () => this.scene.start('incubator'));
        });
    }
}