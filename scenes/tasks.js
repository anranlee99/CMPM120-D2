export class Tasks extends AdventureScene {
    constructor() {
        super("tasks", "Walk before you run.");
    }
    preload(){

        this.load.image('file', 'assets/file.png');
    }
    onEnter() {
        this.add.image(this.pw/2, this.h/2, 'file').setOrigin(0.5, 0.5).setScale(0.5)
    }
}