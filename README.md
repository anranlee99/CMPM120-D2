A simple adventure game by Aaron Lee based on a simple adventure game engine by [Adam Smith](https://github.com/rndmcnlly).

Code requirements:
- **4+ scenes based on `AdventureScene`**: Incubator, Facts, Program, Server, Hammer 
- **2+ scenes *not* based on `AdventureScene`**: Intro, Evolution, Outro
- **2+ methods or other enhancement added to the adventure game engine to simplify my scenes**:
    - Enhancement 1: typewriteText - prints out messages as if it was being typed out. 
    - Enhancement 2: cursedAlgo - creates a specific inventory item that has a special effect

Experience requirements:
- **4+ locations in the game world**: Incubator, Facts, Program, Server, Hammer 
- **2+ interactive objects in most scenes**: Almost every scene has something interactive. The egg, arrow buttons for the color values, clicking the file shows you lots of text, etc. 
- **Many objects have `pointerover` messages**: 
    - in the first scene, the numbers change color
    - in the second scene, the options have a tween
    - in the server scene, it uses the showMessage function from adventure.js to add flavor text
- **Many objects have `pointerdown` effects**: 
    - there is a drag and drop physics functionality in the second scene
    - in order to progress, you need to click on something at least every scene
    - in program, you need to click the arrows to change the color values
- **Some objects are themselves animated**: 
    - the egg and web have this wiggle animation
    - the algorithm has a glowing and fading effect 

Asset sources:
- I used a lot of emojis that are just built in
- The arrow buttons are literally just a partial screenshot from VSCode that I cut out and reversed
- The cursed text is just escaped unicode characters
- There are royalty free line drawings for certain logos that I remade and removed the background using Adobe Express
- The screenshots of all the websites I took from Wikipedia, screenshotted myself, or Archive.org

Code sources:
- `adventure.js` and `index.html` were created for this project [Adam Smith](https://github.com/rndmcnlly) and edited by me.
- `game.js` was sketched by [Adam Smith](https://github.com/rndmcnlly) and rewritten by me.

## [Demo](https://anranlee99.github.io/CMPM120-D2/)
