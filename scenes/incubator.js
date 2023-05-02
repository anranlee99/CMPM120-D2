export class Incubator extends AdventureScene {
    constructor() {
        super("incubator", "Baby Steps");
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
    onEnter() {
        // this.makeCursor()
        this.showMessage("")
        let clip = this.add.text(this.w * 0.3, this.w * 0.3, "📎 paperclip")
            .setFontSize(this.s * 2)
            .setInteractive()
            .on('pointerover', () => this.showMessage("Metal, bent."))
            .on('pointerdown', () => {
                this.showMessage("No touching!");
                this.tweens.add({
                    targets: clip,
                    x: '+=' + this.s,
                    repeat: 2,
                    yoyo: true,
                    ease: 'Sine.inOut',
                    duration: 100
                });
            });

        let key = this.add.text(this.w * 0.5, this.w * 0.1, "🔑 key")
            .setFontSize(this.s * 2)
            .setInteractive()
            .on('pointerover', () => {
                this.showMessage("It's a nice key.")
            })
            .on('pointerdown', () => {
                this.showMessage("You pick up the key.");
                this.gainItem('key');
                this.tweens.add({
                    targets: key,
                    y: `-=${2 * this.s}`,
                    alpha: { from: 1, to: 0 },
                    duration: 500,
                    onComplete: () => key.destroy()
                });
            })

        let door = this.add.text(this.w * 0.1, this.w * 0.15, "🚪 locked door")
            .setFontSize(this.s * 2)
            .setInteractive()
            .on('pointerover', () => {
                if (this.hasItem("key")) {
                    this.showMessage("You've got the key for this door.");
                } else {
                    this.showMessage("It's locked. Can you find a key?");
                }
            })
            .on('pointerdown', () => {
                if (this.hasItem("key")) {
                    this.loseItem("key");
                    this.showMessage("*squeak*");
                    door.setText("🚪 unlocked door");
                    this.gotoScene('demo2');
                }
            })

    }
}