export class Hammer extends AdventureScene {
    constructor() {
        super("hammer", "The Hammer");
    }
    preload() {
        this.load.image('server', 'assets/server.png');
    }
    flashBackground() {
        let r = 68;
        let rev = false;
        this.changeBG = this.time.addEvent({
            delay: 10,
            callback: () => {
                r += rev ? -1 : 1;

                if (r == 255) {
                    rev = true;
                } else if (r == 68) {
                    rev = false;
                }
                this.cameras.main.setBackgroundColor(`rgb(${r},25,25)`)
            },
            repeat: -1
        })
    }
    onEnter() {
        this.flashBackground();

        this.server = this.add.image(this.pw / 2, this.h / 2, 'server').setOrigin(0.5, 0.5).setScale(0.2).setInteractive()
        this.server.on('pointerover', () => {
            this.showMessage("Finish it.")
        })
        this.cursedAlgo()
        this.time.addEvent({
            delay: 100,
            callback: () => {
                const newChar = `${String.fromCodePoint(Math.floor(Math.random() * 7700) + 300)}`;
                let index = Math.floor(Math.random() * this.inventoryTexts[0].text.length);
                if (this.inventoryTexts[0].text[index] != "\n") {

                    this.inventoryTexts[0].text = this.inventoryTexts[0].text.substring(0, index) + newChar + this.inventoryTexts[0].text.substring(index + 1);
                }

                // this.updateInventory();
            },
            repeat: -1
        })
        let algo = this.inventoryTexts[0]
        for (let c of this.inventoryTexts[0].text){
        }
        algo.setInteractive({draggable: true})
        
        algo.on('pointerover', () => {
            this.input.setDefaultCursor('pointer'); 
            this.tweens.add({
                targets: algo,
                alpha: { from: 1, to: 0.5 },
                ease: 'Cubic.in',
                duration: 500,
                yoyo: true, 
                repeat: -1,
            });
        })
        algo.on('pointerout', () => {
            this.input.setDefaultCursor('default'); 
            this.tweens.killTweensOf(algo)
        })
        this.input.on('drag', function (pointer, gameObject, dragX, dragY) {
            gameObject.x = dragX;
            gameObject.y = dragY;
        });
        this.physics.add.existing(algo);
        this.physics.add.existing(this.server)
        let mouseIsUp = false;


        algo.on('pointerup', () => {
                            mouseIsUp = true;
                        });
                        this.physics.add.overlap(algo, this.server, () => {
                            if (mouseIsUp) {
                                this.messageBox.text = "It is done."
                                this.changeBG.remove()
                                this.c= 0
           
                                this.time.addEvent({
                                    delay: 15,
                                    callback: () => {
                                        this.c+=1;
                                        this.cameras.main.setBackgroundColor(`rgb(${this.c},${this.c},${this.c})`)
                                    },
                                    repeat: 255
                                })
                                this.time.delayedCall(255*15, () => {
                                    this.server.destroy()
                                    algo.visible = false;
                                    this.inventory = []
                                    this.gotoScene('outro')
                                })
                            }

                        })

    }
    update() {

    }
}