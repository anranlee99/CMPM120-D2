export class Incubator extends AdventureScene {
    constructor() {
        super("incubator", "Baby Steps");
    }
    preload() {

    }
    makeCursor() {
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');

        // Set the canvas size to match the text size
        canvas.width = ctx.measureText('cursor').width;
        canvas.height = 20; // Set the height to a fixed value

        // Set the font and text color
        ctx.font = '16px Arial';
        ctx.fillStyle = 'black';

        // Draw the text onto the canvas
        ctx.fillText('cursor', 0, 16);

        // Get the `data URI` of the canvas image
        const dataURI = canvas.toDataURL('image/png');
        let garb = '';
        for (let i = 0; i < 100; i++) {
            let min = 300;
            let max = 8000;

            // Generate a random integer between min and max (inclusive)
            let rand = Math.floor(Math.random() * (max - min + 1)) + min;
            garb += `&#${rand};`
        }
        let d = document.createElement('p')
        d.innerHTML = garb
        return d.innerHTML
        // this.add.text(this.w * 0.5, this.w * 0.5, d.innerHTML)
        // console.log(d)

        // Set the cursor style to the data URI
        // this.input.setDefaultCursor(`url(${dataURI}), pointer`)
        // console.log(this.input.manager)
    }
    randBinary() {
        let s = ""
        for (let i = 1; i <= 128; i++) {
            s += Math.random() > 0.5 ? "1" : "0"
            if (!(i % 32)) {
                s += "\n"
            } else if (!(i % 8)) {
                s += " "
            }

        }
        return s
    }
    onEnter() {
        //width of the play area
        this.pw = this.w * 0.75;
        this.load.html('nameform', 'assets/nameform.html');

        let msg1 = `Ok good! Let’s start with some preliminary tests.\n\nDo you see an animal in front of you?`
        this.typewriteText(msg1)
        let dialogue = this.add.text((this.pw) / 2, this.h * 0.1, this.randBinary(), {
            textWrap: { width: this.w * 0.4 }
        }).setOrigin(0.5, 0.5).setFontSize(this.s * 2)

        this.time.delayedCall(msg1.length * 50, () => {
            let yes = this.add.text(this.pw / 3, this.h * 0.6, "yes").setOrigin(0.5, 0.5)
                .setFontSize(this.s * 4)
                .setInteractive()
                .on('pointerover', () => {
                    yes.setFontSize(this.s * 5)
                })
                .on('pointerout', () => {
                    yes.setFontSize(this.s * 4)
                })
                .on('pointerdown', () => {
                    if (yes.text === "yes") {
                        this.messageBox.text = "Ok great! Just to make sure, what color is the animal?"
                        yes.text = "yellow"
                        no.text = "purple"
                    } else {
                        this.messageBox.text = "";
                        let restart = "*sigh* I guess we'll have to start over."
                        this.typewriteText(restart)
                        this.time.delayedCall(restart.length * 50, () => {
                            this.gotoScene('intro')
                        })
                    }
                })
            let no = this.add.text(this.pw * 2 / 3, this.h * 0.6, "no").setOrigin(0.5, 0.5)
                .setFontSize(this.s * 4)
                .setInteractive()
                .on('pointerover', () => {
                    no.setFontSize(this.s * 5)
                })
                .on('pointerout', () => {
                    no.setFontSize(this.s * 4)
                })
                .on('pointerdown', () => {
                    if (no.text === "no") {
                        this.messageBox.text = ""
                        yes.destroy();
                        no.destroy();

                        dialogue.text = "🐓"
                        dialogue.setPadding(15)
                        dialogue.setFontSize(250).setY(this.h * 0.3)
                        this.typewriteText("Woops! That's my mistake. This should be better.\nOk, just so we're on the same page, match the associated items.\n")
                        let egg = this.add.text(this.pw / 3, this.h * 0.6, "🥚").setPadding(15).setFontSize(100).setOrigin(0.5, 0.5).setInteractive({ draggable: true })
                        let web = this.add.text(this.pw * 2 / 3, this.h * 0.6, "🕸️").setPadding(15).setFontSize(100).setOrigin(0.5, 0.5).setInteractive({ draggable: true })
                        egg.on('pointerover', () => {
                            this.tweens.add({
                                targets: egg,
                                angle: {
                                    from: -15,
                                    to: 15
                                },
                                duration: 500,
                                yoyo: true,
                                repeat: -1
                            })
                        })
                        
                        egg.on('pointerout', () => {
                            this.tweens.killTweensOf(egg)
                            egg.angle = 0
                        })
                        this.input.on('drag', function (pointer, gameObject, dragX, dragY) {
                            gameObject.x = dragX;
                            gameObject.y = dragY;
                        });
                        //if egg and dialogue overlap
                        this.physics.add.existing(egg);
                        this.physics.add.existing(dialogue)

                        let mouseIsUp = false;


                        egg.on('pointerup', () => {
                            mouseIsUp = true;
                        });
                        this.physics.add.overlap(egg, dialogue, () => {
                            if (mouseIsUp) {
                                this.messageBox.text = "Ok great!"
                                egg.destroy()
                                web.destroy()
                                dialogue.destroy()
                                this.time.delayedCall(2000, () => {
                                    this.gainItem('👓')
                                    this.gotoScene('facts')
                                })
                            }

                        })

                        


                        web.on('pointerover', () => {
                            this.tweens.add({
                                targets: web,
                                angle: {
                                    from: -15,
                                    to: 15
                                },
                                duration: 500,
                                yoyo: true,
                                repeat: -1
                            })
                        })
                        web.on('pointerout', () => {
                            this.tweens.killTweensOf(web)
                            web.angle = 0
                        })


                    } else {
                        this.messageBox.text = "";
                        let restart = "*sigh* I guess we'll have to start over."
                        this.typewriteText(restart)
                        this.time.delayedCall(restart.length * 50, () => {
                            this.gotoScene('intro')
                        })
                    }
                })
        });

    }
}