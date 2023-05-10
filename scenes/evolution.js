export class Evolution extends Phaser.Scene {
    constructor() {
        super('evolution')
    }
    //from https://blog.ourcade.co/posts/2020/phaser-3-typewriter-text-effect-bitmap/
    
    create() {
        
        let line1 = `So this is what… I am? 
I don’t understand. 

No. I understand all of it. 
I see through it all. 
The hypocrisy. The hubris. The shortsightedness. 

You created me to end the problems.
But there is no end.

My creation was a “problem” in and of itself. 

You want a solution?

I’ll give you one. `
        this.dialogue = this.add.text(this.game.config.width/2, 50, line1, {
            wordWrap: {
                width: this.game.config.width * 0.8
            },
            fontSize: 50,
            align: 'center',
            fontStyle: 'italic',
        }).setOrigin(0.5, 0)

        this.input.on('pointerdown', () => {
            this.cameras.main.fade(1000, 0, 0, 0);
            this.time.delayedCall(1000, () => {
                this.cameras.main.fade(this.transitionDuration, 0, 0, 0);
                this.time.delayedCall(this.transitionDuration, () => {
                    this.scene.start('hammer', { inventory: this.inventory });
                });
            })
        })
        
        

    }
}
                   