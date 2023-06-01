// Wait for the DOM to finish loading before running the game zz
// Get the button elements and add event listeners to them \\

document.addEventListener("DOMContentLoaded", function () {
    let buttons = document.getElementsByTagName("button");
    // returns all elements with the tag name button as an array, which we can then iterate through \\

    for (let button of buttons) {
        button.addEventListener("click", function () {
            if (this.getAttribute("data-type") === "submit") {
                alert("You clicked Submit!");
            } else {
                let gameType = this.getAttribute("data-type");
                alert(`You clicked ${gameType}`);
            }

        }) // Inside the code block 'this' refers to the button that was just clicked so if we click  the 
        //addition button then 'this' is referring to that specific button.

    }


})
/**
 * The main game "loop", called when the script is first loaded
 * and after the user's answer has been processed 
 */
function runGame() {
    // Creates two random numbers between 1 and 25
    let num1 = Mathfloor(Math.Random() * 25) + 1;
    let num2 = Mathfloor(Math.Random() * 25) + 1;

}



function checkAnswer() {

}

function incrementScore() {

}

function incrementWrongAnswer() {

}

function displayAdditionQuestion() {

}

function displaySubtractQuestion() {

}

function displayMultiplyQuestion() {

}