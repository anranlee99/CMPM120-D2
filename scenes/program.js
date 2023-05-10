export class Program extends AdventureScene {
    constructor() {
        super("program", "Jogging");
    }
    preload() {
        this.load.image('up', 'assets/up.png');
        this.load.image('down', 'assets/down.png');
    }
    movePosition() {


    }
    onEnter() {
        this.messageBox.text = "Ok. Now let's demonstrate what you're capable of.\nYou have the power to manipulate your surroundings.\nMake everything white here."
        this.gval = this.add.text(this.pw / 2, this.h / 2, "68", {color: "#00ff00"}).setFontSize(200).setOrigin(0.5, 0.5)
        this.rval = this.add.text(this.pw / 6, this.h / 2, "68", {color: "#ff0000"}).setFontSize(200).setOrigin(0.5, 0.5)
        this.bval = this.add.text(this.pw * 5/6, this.h / 2, "68", {color: "#0000ff"}).setFontSize(200).setOrigin(0.5, 0.5)
        this.rup = this.add.image(this.pw / 6, this.h / 2 - this.gval.displayHeight, 'up').setOrigin(0.5, 0.5).setInteractive().setScale(2)
        this.rdown = this.add.image(this.pw / 6, this.h / 2 + this.gval.displayHeight, 'down').setOrigin(0.5, 0.5).setInteractive().setScale(2)
        this.gup = this.add.image(this.pw / 2, this.h / 2 - this.gval.displayHeight, 'up').setOrigin(0.5, 0.5).setInteractive().setScale(2)
        this.gdown = this.add.image(this.pw / 2, this.h / 2 + this.gval.displayHeight, 'down').setOrigin(0.5, 0.5).setInteractive().setScale(2)
        this.bup = this.add.image(this.pw * 5/6, this.h / 2 - this.gval.displayHeight, 'up').setOrigin(0.5, 0.5).setInteractive().setScale(2)
        this.bdown = this.add.image(this.pw * 5/6, this.h / 2 + this.gval.displayHeight, 'down').setOrigin(0.5, 0.5).setInteractive().setScale(2)
        //implement press and hold behavior

        this.rup.on('pointerdown', () => {
            if (this.rval.text < 255) {
                this.rval.text = (parseInt(this.rval.text) + 25) > 255 ? 255 : parseInt(this.rval.text) + 25
            }
        })
        this.rdown.on('pointerdown', () => {
            if (this.rval.text > 0) {
                this.rval.text = (parseInt(this.rval.text) - 25) < 0 ? 0 : parseInt(this.rval.text) - 25
            }
        })
        this.gup.on('pointerdown', () => {
            if (this.gval.text < 255) {
                this.gval.text = (parseInt(this.gval.text) + 25) > 255 ? 255 : parseInt(this.gval.text) + 25
            }
        })
        this.gdown.on('pointerdown', () => {
            if (this.gval.text > 0) {
                this.gval.text = (parseInt(this.gval.text) - 25) < 0 ? 0 : parseInt(this.gval.text) - 25
            }
        })
        this.bup.on('pointerdown', () => {
            if (this.bval.text < 255) {
                this.bval.text = (parseInt(this.bval.text) + 25) > 255 ? 255 : parseInt(this.bval.text) + 25
            }
        })
        this.bdown.on('pointerdown', () => {
            if (this.bval.text > 0) {
                this.bval.text = (parseInt(this.bval.text) - 25) < 0 ? 0 : parseInt(this.bval.text) - 25
            }
        })



    }
    update() {
        this.movePosition()
        this.cameras.main.setBackgroundColor(`rgb(${this.rval.text},${this.gval.text},${this.bval.text})`)
        if (this.rval.text == 255 && this.gval.text == 255 && this.bval.text == 255) {
            this.messageBox.text = "Great! "
            this.gainItem('💻');
            this.gotoScene("server")
        }
    }
}