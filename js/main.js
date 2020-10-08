console.log('insanity check')
// Project One- Shuffle Puzzle:
// A scrambled picture broken up into "pixels", is loaded on the main screen with one 'pixel' missing. User rearranges 'pixels', or image cells, one at a time by sliding cells into the open cell. Number of moves is tracked and logged on screen. One player game.


// Image cells:
// Create three classes: 
//  cellImage- general image cells
//  cellAdj- image cells adjacent to empty cell, thus allowed to move  
//  cellEmpty- single empty cell that is the only possible location where images can be dropped

// after meeting w/ Michael:
// click on image, rather than drag. use a 2d array (essentially an array of ) 

// initial thoughts:
// Probably going to use some sort combination of ondrag and ondrop to move images from adjacent cells to the empty cell, and then event listener to change the class of the two affected cells.
// Not sure how to limit the dragability to only those cells that are adjacent to the empty cell. A distance limiter? Since every cell is a square of the same size, if the cellAdj could be limited to a distance slightly larger than the h or w of the empty cell, that would work. Don't know if that is an option.


// how to identify which cells are adjacent to empty cell?
// empty cell is identified by class & id applied upon creation, but not sure how to figure that out when images are randomly arranged
// ^^querySelector to find ID

let gameFrame = document.createElement('main');
gameFrame.setAttribute('class', 'game-frame');
document.querySelector('body').appendChild(gameFrame)

let container = document.createElement('div');
container.setAttribute('class', 'container');
document.querySelector('.game-frame').appendChild(container)



// number of player moves:
let moves= 0;
// array representing the game board locations:
let gridArr= [];
// total number of cells in grid array
let gridArrLen= 0;
// length of one side of the grid
let gridSide = Math.sqrt(gridArrLen)
// array used to store image objects with source, value, and id keys:
let cellArr= [];
    
let emptyLoc= 0;

// populate the grid array with indices:
function fillGridArr() {
    for (let i = 0; i < 9; i++) {
        gridArr.push(i)
        gridArrLen++
    }
};

// creates divs containers for images:
function createCellDivs () {
// create cells
    for (let i = 0; i < 9; i++) {
        let cell = document.createElement('div');
            cell.setAttribute('class', 'cell');
            cell.setAttribute('id', `cellDiv${i}`)
        let cellImg = document.createElement('img')
            cellImg.setAttribute('src', `./images/empty.png`);
            cellImg.setAttribute('class', 'cell-Img');
            cellImg.setAttribute('classList', 'cell-Empty');
            cellImg.setAttribute('id', `cell${i}`)
            container.appendChild(cell);
            cell.appendChild(cellImg);

    }
};

// populates cells array with object with image source, value, and id (is ID useful for the image?):
function getCells() {
// this.createCells()
    for (let i = 1; i < 9; i++) {
        cellArr.push({ src: `./images/image${i}.png`, value: i, id: `img${i}` })
    }
        cellArr.push({ src: `./images/empty.png`, value: 0, id: `img0` })
        // console.log(cellArr)
};

// shuffles cells array so they are in random order, done at the start of the game:
function shuffleCells () {
    for (let i = (cellArr.length - 1); i > 0; i--) {
        x = (Math.floor(Math.random() * (i)))
        temp = cellArr[i]
        cellArr[i] = cellArr[x]
        cellArr[x] = temp
    }
};

// distributes shuffled cells to grid of cell containers at the start of the game:
function dealCells() {
// linear array to apply image objects to div cell containers:
    for (let i = 0; i < cellArr.length; i++) {
        let newCell = cellArr[i];
        document.getElementById(`cell${i}`).setAttribute('src', newCell.src)
        document.getElementById(`cell${i}`).setAttribute('value', newCell.value)
        document.getElementById(`cell${i}`).setAttribute('id', newCell.id)
    }
};

// find the empty cell:
function findEmpty() {
    for (let i = 0; i < gridArrLen; i++) {
        let tempCell = cellArr[i]
        if (tempCell.value == 0) {
            emptyLoc = i
        }
    }
}

// adjacent cell variables:
// adjAbove: 0,
// adjBelow: 0,
// adjRight: 0,
// adjLeft: 0,

// adjAbove: this.emptyLoc-(Math.sqrt(this.gridArrLen)),
// adjBelow: this.emptyLoc+(Math.sqrt(this.gridArrLen)),
// adjRight: this.emptyLoc+1,
// adjLeft: this.emptyLoc-1,




// using emptyLoc, find adjacent (and clickable) cells:
// function findAdj(){

//     // for (let i=0;i<this.gridArrLen;i++){
//     adjAbove = emptyLoc - gridSide
//     adjBelow = emptyLoc + gridSide
//     adjRight = emptyLoc + 1
//     adjleft = emptyLoc - 1





//     // }


//     // console.log(gridSide)
//     // if (emptyLoc)
//     // gridArrLen
//     // emptyLoc
// }





fillGridArr()
createCellDivs()
getCells()
shuffleCells()
dealCells()
findEmpty()
// findAdj()
console.log(`Empty location: ${emptyLoc}`)
console.log(`Type of Empty location: ${typeof (emptyLoc)}`)

// console.log(`Adjacent above cell: ${adjAbove}`)
// console.log(`Adjacent below cell: ${adjBelow}`)
// console.log(`Adjacent left cell: ${adjLeft}`)
// console.log(`Adjacent right cell: ${adjRight}`)




document.getElementById("img4").classList.toggle("cell-Empty");



// add event listeners to determine if cells are movable
// document.querySelectorAll('.cell-Img').forEach(e => {
//     e.addEventListener('click', isNotMovable)
//     function isNotMovable(e) {
//         console.log('this cell is not movable')
//     }
// })


// document.querySelectorAll('.cell-Adj').forEach(e =>{
//     e.addEventListener('click', isMovable)
//     function isMovable(j){
//         console.log('this cell is movable')
//     }
// }),

// document.querySelector('.cell-Empty').addEventListener('click', isEmpty)
// function isEmpty(e) {
//     console.log('this cell is empty')
// }




    // locate where the empty cell is on the grid
// done
    // by looping through a 2D array looking for the 'cell-Empty' class
// done, via value of 0, not class
    // locate which cells are adjacent to empty cell (above, right, left, bottom)
    // based on 2D array empty cell location, each cell +/- 1 in X and Y axis
    // done
// change the class of those adjacent cells to '.cell-Adj' 
// apply 'click' listener event to adjacent cells to allow them to be clicked
// for each move, increase the total number of moves made on the 'moves' tracker
// once a clickable cell is clicked, swap images, value, and class with empty cell
// once all cell's values are in order through the grid, the puzzle is solved



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
