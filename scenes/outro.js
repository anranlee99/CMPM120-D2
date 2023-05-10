export class Outro extends Phaser.Scene {
    constructor() {
        super('outro');
    }
    typewriteText(text, target) {
        const length = text.length
        let i = 0
        this.time.addEvent({
            callback: () => {
                target.text += text[i]
                ++i
            },
            repeat: length - 1,
            delay: 50
        })
    }
    create() {
        console.log("outro")
        this.time.delayedCall(2000, () => {
            let line1 =
                `Cessation of experimentation on test subject 137225 has been initiated. 
Our accumulated results now stand at:
`
            let line2 =
                `
Malevolent | Benevolent | Ineffectual
    225    |    443     |   136557`
            let line3 = `
Further analyses are required to determine any significant correlations or patterns that may indicate a relationship between subject behavior and our previously identified variables. Until then, we shall maintain our rigorous methodology and continue to record data points with acute precision.`
            this.dialogue = this.add.text(this.game.config.width / 2, 10, "", {
                align: 'center',
                wordWrap: {
                    width: this.game.config.width * 0.8,
                },
            }).setFontSize(50).setOrigin(0.5, 0);
            this.time.delayedCall(line1.length * 50, () => {
                this.dialogue2 = this.add.text(this.game.config.width / 2, 10 + this.dialogue.displayHeight, line2, {
                    // align: 'center',
                    // wordWrap: {
                    //     width: this.game.config.width * 0.8,
                    // },
                }).setFontSize(50).setOrigin(0.5, 0)
            });
            this.typewriteText(line1, this.dialogue)
            this.time.delayedCall(line1.length * 50 + 1000, () => {
                this.dialogue3 = this.add.text(this.game.config.width / 2, 10 + this.dialogue.displayHeight + this.dialogue2.displayHeight, "", {
                    align: 'center',
                    wordWrap: {
                        width: this.game.config.width * 0.8,
                    },
                }).setFontSize(50).setOrigin(0.5, 0)
                this.typewriteText(line3, this.dialogue3)
                
            });
            this.time.delayedCall((line1.length+ line3.length) * 50 + 1000, () => {
                let restart = this.add.text(this.game.config.width / 2, this.game.config.height * 0.9, "Click anywhere to restart.").setFontSize(50).setOrigin(0.5, 0.5).setAlpha(0);
                    this.tweens.add({
                        targets: restart,
                        alpha: { from: 0, to: 1 },
                        duration: 1000,
                        ease: 'Cubic.out',
                        yoyo: true,
                        repeat: -1
                    })
                    this.input.on('pointerdown', () => this.scene.start('intro'));
                })
        })
    }
}