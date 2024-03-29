const story001 = "There is a red door and a green door. Choose one to open."
const story001_1 = "Red door."
const story001_2 = "Green door."
const story001_3 = "Neither."

class GameStage {
    constructor(storyCell, option1, option2, option3) {
        this.text = storyCell;

        this.option1 = option1;
        this.option2 = option2;
        this.option3 = option3;
    }
}

// event listener on every option box for select() function


// ========================================================

// load HTML elements

const screenBox = document.querySelector(".screen-box");
const optionBoxes = Array.prototype.slice.call(document.querySelectorAll(".option-box"));
console.log(typeof optionBoxes)

function updateGameDisplay(gameStage, screenBox, optionBoxes) {
    screenBox.innerText = gameStage.text;

    optionBoxes[0].innerText = gameStage.option1;
    optionBoxes[1].innerText = gameStage.option2;
    optionBoxes[2].innerText = gameStage.option3;

}

const firstGameStage = new GameStage(story001, story001_1, story001_2, story001_3);

updateGameDisplay(firstGameStage, screenBox, optionBoxes);

// ========================================================

// fetch("https://localhost:8080/story/001.txt")
//   .then((res) => res.text())
//   .then((text) => {
//     console.log(text);
//    })
//   .catch((e) => console.error(e));

// class MainControl {
//     constructor() {
//         console.log("constructing...")
//     }

//     waitForChoice() {

//     }

//     updateScreenBox() {

//     }

//     nextGameStage() {

//     }

// }

// let mc = new MainControl()