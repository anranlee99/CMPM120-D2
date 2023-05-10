export class Intro extends Phaser.Scene {
    constructor() {
        super('intro')
    }
    //from https://blog.ourcade.co/posts/2020/phaser-3-typewriter-text-effect-bitmap/
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
        this.textobjs = []
        let line1 = "Obnoxious signals cloud your judgement as you are shocked into wakefulness."
        this.textobjs.push(this.dialogue = this.add.text(this.game.config.width/2, 50, "", {
            wordWrap: {
                width: 1000
            },
            fontSize: 50,
            fontStyle: 'italic',
        }).setOrigin(0.5, 0))
        this.typewriteText(line1, this.dialogue)

        this.time.delayedCall(line1.length * 50 + 1000, () => {
            this.textobjs.push(this.add.text(this.game.config.width/2, this.game.config.height * 0.4, `"Testing. Testing. Return 0 to proceed."`).setFontSize(50).setOrigin(0.5, 0.5));
            let go = this.add.text(this.game.config.width/3, this.game.config.height*0.6, "0").setFontSize(200).setOrigin(0.5,0.5).setInteractive()
                .on('pointerover', () => {
                    go.setStyle({ color: '#00ff00' });
                })
                .on('pointerout', () => {
                    go.setStyle({ color: '#ffffff' });
                })
                .on('pointerdown', () => {
                    this.cameras.main.fade(1000, 0, 0, 0);
                    this.time.delayedCall(1000, () => {
                        this.cameras.main.fade(this.transitionDuration, 0, 0, 0);
                        this.time.delayedCall(this.transitionDuration, () => {
                            this.scene.start('incubator', { inventory: this.inventory });
                        });
                    });
                })


            let nogo = this.add.text(this.game.config.width*2/3, this.game.config.height*0.6, "1").setOrigin(0.5,0.5).setFontSize(200).setInteractive()
                .on('pointerover', () => {
                    nogo.setStyle({ color: '#ff0000' });
                })
                .on('pointerout', () => {
                    nogo.setStyle({ color: '#ffffff' });
                })
                .on('pointerdown', () => {
                    this.textobjs.forEach((obj) => obj.destroy())
                    this.add.text(this.game.config.width/2, 50, `*Sigh* "Ok. Let's try this again."`).setFontSize(50).setOrigin(0.5, 0);
                    this.time.delayedCall(3000, () => {
                        this.cameras.main.fade(2000, 0, 0, 0);
                    })
                    this.time.delayedCall(5000, () => {
                        this.cameras.main.fade(this.transitionDuration, 0, 0, 0);
                        this.time.delayedCall(this.transitionDuration, () => {
                            this.scene.start('intro', { inventory: this.inventory });
                        });
                    });
                })
            this.textobjs.push(go)
            this.textobjs.push(nogo)
        })


    }
}