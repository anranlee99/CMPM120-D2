export class Facts extends AdventureScene {
    constructor() {
        super("facts", "Walk before you run.");
    }
    preload() {

        this.load.image('file', 'assets/file.png');
    }
    playAnimation() {
        const knowledge = [
            "Earth is a sphere",
            "The Great Pyramid of Giza is the oldest of the Seven Wonders of the Ancient World",
            "The distance from the Earth to the Sun is about 93 million miles",
            "The speed of light is approximately 299,792,458 meters per second",
            "The human body has 206 bones",
            "The tallest mountain in the solar system is Olympus Mons on Mars",
            "The first successful cloning of a mammal was Dolly the sheep in 1996",
            "The Caspian Sea is the largest enclosed inland body of water on Earth",
            "The first man to walk on the Moon was Neil Armstrong",
            "The human body contains about 60% water",
            "The longest river in Africa is the Nile",
            "The first element on the periodic table is hydrogen",
            "The largest ocean on Earth is the Pacific Ocean",
            "The speed of sound is approximately 343 meters per second",
            "The human eye can distinguish about 10 million different colors",
            "The largest living organism on Earth is a fungus",
            "The first successful heart transplant was performed in 1967",
            "The Sun is a star",
            "The largest country in the world by land area is Russia",
            "The human body has 32 teeth",
            "The first successful artificial satellite was launched by the Soviet Union in 1957",
            "The Great Wall of China is the longest wall in the world",
            "The heaviest naturally occurring element is uranium",
            "The smallest country in the world is Vatican City",
            "The human body has 12 cranial nerves",
            "The largest continent on Earth is Asia",
            "The human nose can detect about 1 trillion different scents",
            "The first antibiotic was penicillin",
            "The coldest temperature ever recorded on Earth was -128.6°F in Antarctica",
            "The first successful organ transplant was a kidney in 1954",
            "The human body has more than 600 muscles",
            "The Great Barrier Reef is the largest coral reef system in the world",
            "The tallest building in the world is the Burj Khalifa in Dubai",
            "The human body has 10 pints of blood - false (it has about 5.5 liters or 11 pints)",
            "The largest waterfall in the world is Victoria Falls on the border of Zambia and Zimbabwe",
            "The human body has about 100,000 hairs on the scalp",
            "The longest bone in the human body is the femur",
            "The deepest point in the ocean is the Challenger Deep in the Mariana Trench",
            "The human body has 206 bones at birth, but some fuse together over time, resulting in adults having 206 to 208 bones",
            "The first successful in vitro fertilization (IVF) was performed in 1978",
            "The human body has 46 chromosomes (23 pairs)",
            "The largest bird in the world is the ostrich",
            "The human body has about 10,000 taste buds",
            "The fastest animal on Earth is the peregrine falcon",
            "The Earth's atmosphere is composed mostly of nitrogen and oxygen.",
            "The human brain weighs about three pounds.",
            "The Statue of Liberty was a gift from France to the United States.",
            "The Eiffel Tower in Paris, France, is 324 meters tall.",
            "The planet Jupiter is the largest planet in our solar system.",
            "The fastest land animal is the cheetah.",
            "The human heart beats about 100,000 times per day.",
            "The Mona Lisa, painted by Leonardo da Vinci, is one of the most famous paintings in the world.",
            "The Amazon rainforest is the largest rainforest in the world.",
            "The Great Barrier Reef is home to over 1,500 species of fish.",
            "The human body has about 100 trillion cells.",
            "The city of Rome, Italy, is known as the \"Eternal City.\"",
            "The first successful powered flight was made by the Wright brothers in 1903.",
            "The planet Saturn has the largest and most complex ring system of any planet in our solar system.",
            "The human liver is the largest organ in the body.",
            "The Niagara Falls is a group of three waterfalls located on the border of the United States and Canada.",
            "The country of Japan is made up of over 6,800 islands.",
            "The city of Jerusalem is considered a holy city by three major religions: Judaism, Christianity, and Islam.",
            "The African elephant is the largest land animal on Earth.",
            "The first successful artificial heart transplant was performed in 1982.",
            "The human body has about 4-5 liters of blood.",
            "The Leaning Tower of Pisa in Italy leans at an angle of about 4 degrees.",
            "The planet Uranus is the only planet in our solar system that rotates on its side.",
            "The human stomach can hold up to one liter of food and drink.",
            "The Great Wall of China is over 13,000 miles long.",
            "The country of Australia is both a continent and a country.",
            "The Taj Mahal, located in Agra, India, is considered one of the most beautiful buildings in the world.",
            "The first successful human heart-lung transplant was performed in 1981.",
            "The human body has about 2 million sweat glands.",
            "The Louvre Museum in Paris, France, is home to the famous painting, the Mona Lisa.",
            "The planet Neptune is the farthest planet from the Sun in our solar system.",
            "The human body produces about one liter of saliva each day.",
            "The ancient city of Petra in Jordan is famous for its rock-cut architecture.",
            "The first successful bone marrow transplant was performed in 1968.",
            "The human ear can detect sound waves as low as 20 hertz and as high as 20,000 hertz.",
            "The city of Venice, Italy, is known for its canals and gondolas.",
            "The planet Mars has the largest volcano in our solar system, Olympus Mons.",
            "The human body has about 250,000 sweat glands on the feet.",
            "The Great Sphinx of Giza in Egypt has the head of a human and the body of a lion.",
            "The first successful lung transplant was performed in 1963.",
            "The human body has about 640 skeletal muscles.",
            "The city of Florence, Italy, is known as the birthplace of the Renaissance.",
            "The planet Mercury is the closest planet to the Sun in our solar system.",
            "The human body contains about 0.2 milligrams of gold."
        ]
        let facttweens = []
        let delay = 0;
        knowledge.forEach((fact, i) => {
            //create a text object for each fact
            //make the position of t a random point within the center 75% of the play area
            let x = this.pw * 0.25 + Math.random() * this.pw * 0.5;
            let y = this.h * 0.25 + Math.random() * this.h * 0.5;
            let t = this.add.text(x, y, fact, { fontFamily: 'Arial', fontSize: 24, color: '#ffffff', align: 'center', wordWrap: { width: this.pw * 0.8, useAdvancedWrap: true } }).setOrigin(0.5, 0.5).setAlpha(0);

            // add animation to the text object
            let flyX = x + (Math.random() - 0.5) * 200;
            let flyY = y + (Math.random() - 0.5) * 200;
            let flyScale = 1 + Math.random() * 0.5;
            let interval = 100
            if (i > 0) {
                delay += interval;
            }
            facttweens.push({
                at: delay,
                tween: {
                    targets: t,
                    alpha: { from: 0, to: 1 },
                    scale: { from: 0.1, to: 3 },
                    x: flyX,
                    y: flyY,
                    duration: 1000,
                    ease: 'Power2',

                    onComplete: () => {
                        //fade out the text object
                        this.tweens.add({
                            targets: t,
                            alpha: { from: 1, to: 0 },
                            duration: 200,

                            onComplete: () => {
                                t.destroy();
                            }
                        });
                    }

                }


            });
        });

        this.timeline = this.add.timeline(facttweens)
        this.timeline.play();
        return knowledge.length * 100 + 1000;
    }
    onEnter() {
        let file = this.add.image(this.pw / 2, this.h / 4, 'file').setOrigin(0.5, 0.5).setScale(0.5).setAlpha(1).setInteractive();
        this.messageBox.text = "Ok let's get you up to speed with the basics. Get the data from the file."
        file.on('pointerdown', () => {
            let delay = this.playAnimation();
            this.time.delayedCall(delay, () => {
                this.messageBox.text = "Now that you know the basics, let's get to work"
            })
            this.time.delayedCall(delay + 2000, () => {
                this.gainItem('📚');
                this.gotoScene('program');
            })
        })
    }
}