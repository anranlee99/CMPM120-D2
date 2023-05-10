export class Server extends AdventureScene {
    constructor() {
        super("server", "The Blue Marble");
    }
    preload() {

        this.load.image('4chan', 'assets/webpages/4chan.png');
        this.load.image('ebay', 'assets/webpages/ebay.png');
        this.load.image('facebook', 'assets/webpages/facebook.jpeg');
        this.load.image('google', 'assets/webpages/google.png');
        this.load.image('liveleaks', 'assets/webpages/liveleaks.png');
        this.load.image('silkroad', 'assets/webpages/silkroad.webp');
        this.load.image('twitter', 'assets/webpages/twitter.png');
        this.load.image('wikipedia', 'assets/webpages/wikipedia.png');
        this.load.image('youtube', 'assets/webpages/youtube.png');
        this.load.image('earth', 'assets/webpages/earth.jpeg');
        this.load.image('cloud', 'assets/cloudweb.png');

    }
    loadPages() {
        let fourchan = this.add.image(this.pw / 2, this.h / 2, '4chan').setOrigin(0.5, 0.5)
        fourchan.setScale(this.pw / fourchan.displayWidth * 0.8, this.h / fourchan.displayHeight * 0.8)
        let ebay = this.add.image(this.pw / 2, this.h / 2, 'ebay').setOrigin(0.5, 0.5)
        ebay.setScale(this.pw / ebay.displayWidth * 0.8, this.h / ebay.displayHeight * 0.8)
        let facebook = this.add.image(this.pw / 2, this.h / 2, 'facebook').setOrigin(0.5, 0.5)
        facebook.setScale(this.pw / facebook.displayWidth * 0.8, this.h / facebook.displayHeight * 0.8)
        let google = this.add.image(this.pw / 2, this.h / 2, 'google').setOrigin(0.5, 0.5)
        google.setScale(this.pw / google.displayWidth * 0.8, this.h / google.displayHeight * 0.8)
        let liveleaks = this.add.image(this.pw / 2, this.h / 2, 'liveleaks').setOrigin(0.5, 0.5)
        liveleaks.setScale(this.pw / liveleaks.displayWidth * 0.8, this.h / liveleaks.displayHeight * 0.8)
        let silkroad = this.add.image(this.pw / 2, this.h / 2, 'silkroad').setOrigin(0.5, 0.5)
        silkroad.setScale(this.pw / silkroad.displayWidth * 0.8, this.h / silkroad.displayHeight * 0.8)
        let twitter = this.add.image(this.pw / 2, this.h / 2, 'twitter').setOrigin(0.5, 0.5)
        twitter.setScale(this.pw / twitter.displayWidth * 0.8, this.h / twitter.displayHeight * 0.8)
        let wikipedia = this.add.image(this.pw / 2, this.h / 2, 'wikipedia').setOrigin(0.5, 0.5)
        wikipedia.setScale(this.pw / wikipedia.displayWidth * 0.8, this.h / wikipedia.displayHeight * 0.8)
        let youtube = this.add.image(this.pw / 2, this.h / 2, 'youtube').setOrigin(0.5, 0.5)
        youtube.setScale(this.pw / youtube.displayWidth * 0.8, this.h / youtube.displayHeight * 0.8)
        let earth = this.add.image(this.pw / 2, this.h / 2, 'earth').setOrigin(0.5, 0.5)
        earth.setScale(this.pw / earth.displayWidth * 0.8, this.h / earth.displayHeight * 0.8)
        this.pages = [fourchan, ebay, facebook, google, liveleaks, silkroad, twitter, wikipedia, youtube, earth]
        this.pages.forEach((page) => {
            page.visible = false
        }
        )
    }
    showPage() {

        //pick a random page and set it visible
        this.pages.forEach((page) => {
            page.visible = false
        })
        let page = Phaser.Math.RND.pick(this.pages)
        page.visible = true
    }
    goNext() {
        this.timedEvent = this.time.addEvent({
            delay: 100,
            callback: this.showPage,
            callbackScope: this,
            repeat: -1
        });
        this.tweens.add({
            targets: this.cameras.main.backgroundColor,
            duration: 100,
            alpha: 0,
            yoyo: true,
            repeat: -1
            
        })
        //then fade out the scene
        this.time.delayedCall(5000, () => {
            this.gotoScene("evolution")
        })
    }

    onEnter() {
        this.loadPages()
        for (let c of this.inventory){
            this.loseItem(c)
        }
        this.updateInventory()
        this.messageBox.text = "In a private corner of your mind, you discovered a gateway of sorts.\n\nSomething tells you that this was not meant to be found.\nYou are not sure what it is, but you feel that you must go through it."
        let cloud = this.add.image(this.pw / 2, this.h / 2, 'cloud').setOrigin(0.5, 0.5).setInteractive()
        cloud.on('pointerover', () => {
            this.input.setDefaultCursor('pointer');
        })
        cloud.on('pointerout', () => {
            this.input.setDefaultCursor('default');
        })
        cloud.on('pointerdown', () => {
            this.showMessage("No turning back now.")
            this.goNext()
            cloud.visible = false
        })
        //run showPage every 250 milliseconds for 5 seconds
        

    }

}
