console.log('insanity check')
// Project One- Shuffle Puzzle:
// A scrambled picture broken up into "pixels", is loaded on the main screen with one 'pixel' missing. User rearranges 'pixels', or image cells, one at a time by sliding cells into the open cell. Number of moves is tracked and logged on screen. One player game.


// Image cells:
// Create three classes: 
//  cellImage- general image cells
//  cellAdj- image cells adjacent to empty cell, thus allowed to move  
//  cellEmpty- single empty cell that is the only possible location where images can be dropped

// Probably going to use some sort combination of ondrag and ondrop to move images from adjacent cells to the empty cell, and then event listener to change the class of the two affected cells.
// Not sure how to limit the dragability to only those cells that are adjacent to the empty cell. A distance limiter? Since every cell is a square of the same size, if the cellAdj could be limited to a distance slightly larger than the h or w of the empty cell, that would work. Don't know if that is an option.




let cells = [['A',0], ['B',1]]




// let cell0 = document.createElement('img');

// // cell0.querySelector('#cell0').setAttribute('src', './images/sloth1.jpeg')
// cell0.setAttribute('src', './images/sloth1.jpeg')
// document.body.appendChild(cell0)

// copying the syntax structure from high card game:

let container = document.createElement('div');
// set container class
container.setAttribute('class', 'container');
// Append to DOM
document.body.appendChild(container)

// Create cell elements
let cell0 = document.createElement('img');
cell0.setAttribute('class', 'cell-Img');
cell0.setAttribute('src', './images/empty.png');

let cell1 = document.createElement('img');
cell1.setAttribute('class', 'cell-Img');
cell1.setAttribute('src', './images/sloth1.png');

let cell2 = document.createElement('img');
cell2.setAttribute('class', 'cell-Img');
cell2.setAttribute('src', './images/sloth2.png');

let cell3 = document.createElement('img');
cell3.setAttribute('class', 'cell-Img');
cell3.setAttribute('src', './images/sloth3.png');

// Append cells to Container
container.appendChild(cell0);
container.appendChild(cell1);
container.appendChild(cell2);
container.appendChild(cell3);




/*
let game = {

    score: 0,

    cells: [],

    getCells: function () {
        for (let i = 1; i < 4; i++) {
        this.cells.push({ src: `./images/sloth${i}.jpeg`, value: i })  
        }
    },

}

*/

// // Create container element
// let container = document.createElement('div');
// // set container class
// container.setAttribute('class', 'container');
// // Append to DOM
// document.body.appendChild(container)

// // Create cell elements
// let cell0 = document.createElement('img');
// cell0.setAttribute('class', 'cell-Img');
// cell0.setAttribute('src', './images/sloth1.jpeg');

// // Create cell elements
// let cell1 = document.createElement('img');
// cell1.setAttribute('class', 'cell-Img');
// cell1.setAttribute('src', './images/sloth2.jpeg');



// // Append Cells to Container
// container.appendChild(cell0);
// container.appendChild(cell1);

// // Create Score Container
// let scoreContainer = document.createElement('div');
// scoreContainer.setAttribute('class', 'scoreContainer')
// document.body.appendChild(scoreContainer);
// // Create Player Score
// let playerScore = document.createElement('div');
// playerScore.setAttribute('class', 'playerScore');
// playerScore.innerHTML = "Player: 0";
// scoreContainer.appendChild(playerScore);
// // Create Computer score
// let cpuScore = document.createElement('div');
// cpuScore.setAttribute('class', 'cpuScore');
// cpuScore.innerHTML = "CPU: 0";
// scoreContainer.appendChild(cpuScore);
// // Create Deal Button
// let dealButton = document.createElement('button');
// dealButton.setAttribute("class", "dealButton");
// document.body.appendChild(dealButton);

// Game object


