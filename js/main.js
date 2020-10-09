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


//  2D array representing game board, but not actually used for the code: 
let gridArr2 = [[0, 1, 2], [3, 4, 5], [6, 7, 8]];

// array representing the game board locations:
let gridArr = [];
// total number of cells in grid array
let gridArrLen = 0;
// length of one side of the grid
let gridSide = Math.sqrt(gridArrLen);
// array of inices along left column:
let leftCol = [0, 3, 6];
// array of inices along right column:
let rightCol = [2, 5, 8];

// array used to store image objects with source, value, and id keys:
let cellArr = [];
// grid index of empty cell:
let emptyLoc = 0;

// number of player moves:
let moves = 0;

// populate the grid array with indices:
// Sets the overall size of game
function fillGridArr() {
    for (let i = 0; i < 9; i++) {
        gridArr.push(i)
        gridArrLen++
    }
};

// creates divs containers for images:
function createCellDivs() {
    // create cells
    for (let i = 0; i < 9; i++) {
        let cell = document.createElement('div');
        cell.setAttribute('class', 'cell');
        cell.setAttribute('id', `cellDiv${i}`)
        let cellImg = document.createElement('img')
        cellImg.setAttribute('src', `./images/image0.png`);
        cellImg.setAttribute('class', 'cell-Img');
        // cellImg.setAttribute('classList', 'cell-Empty');
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
    cellArr.push({ src: `./images/image0.png`, value: 0, id: `img0` })
    // console.log(cellArr)
};

// shuffles cells array so they are in random order, done at the start of the game:
function shuffleCells() {
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
        let tempCell = document.getElementById(`cell${i}`)
        tempCell.setAttribute('src', newCell.src)
        tempCell.setAttribute('value', newCell.value)
        tempCell.setAttribute('id', newCell.id)
        tempCell.addEventListener('click', isMovable)

    }
};

// find the empty cell:
function findEmpty() {
    for (let i = 0; i < gridArrLen; i++) {
        let tempCell = cellArr[i]
        if (tempCell.value === 0) {
            emptyLoc = i
        }
    }
};

// conditional that determines which cells are movable:
function isMovable(e) {
    // value of clicked cell div:
    let clickedCellVal = (parseInt(e.target.parentElement.id.charAt(7)))
    // console.log(`clicked cell index: ${clickedCellVal}`)
    // image element:
    let clickedImgCell = (e.target)
    // value of image element
    // let clickedImgCellVal =(e.target.id.charAt(3))
    let clickedImgCellVal = (parseInt(e.target.id.charAt(3)))
    // image element source:
    let clickedImgSrc = (`./images/image${clickedImgCellVal}.png`)
    // console.log(clickedImgSrc)

    // swaps image, value, and id from clicked cell to empty cell:
    function swapImg() {
        clickedImgCell.setAttribute('src', './images/image0.png')
        clickedImgCell.setAttribute('value', 0)
        clickedImgCell.setAttribute('id', 'img0')
        emptyCell.setAttribute('src', clickedImgSrc)
        emptyCell.setAttribute('value', clickedImgCellVal)
        emptyCell.setAttribute('id', `img${clickedImgCellVal}`)
        // not sure how, but these moves need to be reflected in cellArr. otherwise, rerunning findEmpty() isn't going to allow game play to continue
        findEmpty()
    }


    // checks each location of empty cell and allows adjacent cells to swap with empty:
    if (emptyLoc === 0) {
        emptyCell = document.getElementById('cellDiv0').firstChild
        // console.log(emptyCell)
        if (clickedCellVal === 1 || clickedCellVal === 3) {
            // swap cellDiv1 (clicked) with cell 0 (empty):
            swapImg()
        }
    } else if (emptyLoc === 1) {
        emptyCell = document.getElementById('cellDiv1').firstChild
        if (clickedCellVal === 0 || clickedCellVal === 2 || clickedCellVal === 4) {
            swapImg()
        }
    } else if (emptyLoc === 2) {
        emptyCell = document.getElementById('cellDiv2').firstChild
        if (clickedCellVal === 1 || clickedCellVal === 5) {
            swapImg()
        }
    } else if (emptyLoc === 3) {
        emptyCell = document.getElementById('cellDiv3').firstChild
        if (clickedCellVal === 0 || clickedCellVal === 4 || clickedCellVal === 6) {
            swapImg()
        }
    } else if (emptyLoc === 4) {
        emptyCell = document.getElementById('cellDiv4').firstChild
        if (clickedCellVal === 1 || clickedCellVal === 3 || clickedCellVal === 5 || clickedCellVal === 7) {
            swapImg()
        }
    } else if (emptyLoc === 5) {
        emptyCell = document.getElementById('cellDiv5').firstChild
        if (clickedCellVal === 2 || clickedCellVal === 4 || clickedCellVal === 8) {
            swapImg()
        }
    } else if (emptyLoc === 6) {
        emptyCell = document.getElementById('cellDiv6').firstChild
        if (clickedCellVal === 7 || clickedCellVal === 3) {
            swapImg()
        }
    } else if (emptyLoc === 7) {
        emptyCell = document.getElementById('cellDiv7').firstChild
        if (clickedCellVal === 4 || clickedCellVal === 6 || clickedCellVal === 8) {
            swapImg()
        }
    } else (emptyLoc === 8)
    emptyCell = document.getElementById('cellDiv8').firstChild
    if (clickedCellVal === 5 || clickedCellVal === 7) {
        swapImg()
    }
};




// document.querySelectorAll('.cell-Img').forEach(e => {
//     e.addEventListener('click', isMovable)
// })

// function swapImg(e) {
// function swapImg(e) {
//     // console.log(e.target)
//     console.log(parseInt(e.target.id.charAt(3)))
//     console.log(e.target.id)
//     // console.log(e.target.value)
//     // add empty image to clicked cell
//     // isMovable(e.target.id)
//     // and add image from clicked cell to empty cell
//     // remove event listener from all cells
// }







// switch statements:
// console.log(parseInt(value.charAt(3)))
// switch (value) {
// case 0:
//     console.log('top left')
//     break;
// case 1:
//     console.log('center top')
//     break;
// default:
//     console.log('we should not get here')





fillGridArr();
createCellDivs()
getCells()
shuffleCells()
dealCells()
findEmpty()


console.log(`Empty location: ${emptyLoc}`)
// console.table(gridArr2)




// document.getElementById("img4").classList.toggle("cell-Empty");











// ------------------------------------------------

// steps left to code:
// apply 'click' listener event to adjacent cells to allow them to be clicked
// click on div class, access child (img w values) using 'firstElementChild'
// use set attribute to swap images:
// clicked square to empty, empty square to image from clicked cell

// for each move, increase the total number of moves made on the 'moves' tracker
// once a clickable cell is clicked, swap images, value, and class with empty cell
// once all cell's values are in order through the grid, the puzzle is solved
// ------------------------------------------------



// using emptyLoc, find adjacent (and clickable) cells:
// function findAdj(){

// // top row, don't include above location:
// if (emptyLoc <=gridSide)

// // bottom row, don't include below location:
// if (emptyLoc>=gridArrLen-gridSide)

// // left column, don't include left location
// if (leftCol.includes(emptyLoc)===0)

// // right column, don't include left location
// if (rightCol.includes(emptyLoc)===0)



// from high card:

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

