console.log('insanity check')
// Project One- Shuffle Puzzle:
// A scrambled picture broken up into "pixels", is loaded on the main screen with one 'pixel' missing. User rearranges 'pixels', or image cells, one at a time by sliding cells into the open cell. Number of moves is tracked and logged on screen. One player game.

let gameFrame = document.createElement('main');
gameFrame.setAttribute('class', 'game-frame');
document.querySelector('body').appendChild(gameFrame)

let header = document.createElement('div')
header.setAttribute('class', 'header');
document.querySelector('.game-frame').appendChild(header)

let title = document.createElement('h1');
title.setAttribute('class', 'title');
title.innerHTML = 'SHUFFLER';
document.querySelector('.header').appendChild(title)

let reset = document.createElement('h2');
reset.setAttribute('class', 'button');
reset.innerHTML='RESET';
document.querySelector('.header').appendChild(reset)

let movesTracker = document.createElement('h2');
movesTracker.setAttribute('class', 'moves');
movesTracker.innerHTML = 'MOVES: 0';
document.querySelector('.header').appendChild(movesTracker)

let container = document.createElement('div');
container.setAttribute('class', 'container');
document.querySelector('.header').appendChild(container)

//  2D array representing game board, but not actually used for the code: 
let gridArr2 = [[0, 1, 2], [3, 4, 5], [6, 7, 8]];

// array representing the game board locations:
let gridArr = [];
// total number of cells in grid array
let gridArrLen = 0;
// length of one side of the grid; this will be used for the non-hard-coded adjacent checker function
let gridSide = Math.sqrt(gridArrLen);
// array of inices along left column; this will be used for the non-hard-coded adjacent checker function:
let leftCol = [0, 3, 6];
// array of inices along right column; this will be used for the non-hard-coded adjacent checker function:
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

// distributes shuffled image objects to grid of cell div containers at the start of the game and adds click event listener:
function dealCells() {
    for (let i = 0; i < cellArr.length; i++) {
        let newCell = cellArr[i];
        let tempCell = document.getElementById(`cell${i}`)
        tempCell.setAttribute('src', newCell.src)
        tempCell.setAttribute('value', newCell.value)
        tempCell.setAttribute('id', newCell.id)
    }
};

// find the empty cell:
function findEmpty() {
    for (let i = 0; i < gridArrLen; i++) {
        let tempCell = cellArr[i]
        // if (tempCell.value === 0) {
        if (tempCell.id == 'img0') {
            emptyLoc = i
            // console.log(tempCell)
        }
    }
};

// conditional function that determines which cells are movable and adds click event listeners to them. Also defines the array of indices of movable (adjacent) cells:
function isMovable() {
    if (emptyLoc === 0) {
        // defines image element of cells adjacent to empty cell:
        adjRight = document.getElementById('cellDiv1').firstChild
        adjDown = document.getElementById('cellDiv3').firstChild
        // console.log('adj right:',adjRight)
        // console.log('adj down:',adjDown)
        // adds listeners to adjacent cells
        adjRight.addEventListener('click', swapImg)
        adjDown.addEventListener('click', swapImg)
        // index of clickable cells to remove event listener
        clickableIndex = [1, 3]

    } else if (emptyLoc === 1) {
        // defines image element of cells adjacent to empty cell:
        adjLeft = document.getElementById('cellDiv0').firstChild
        adjRight = document.getElementById('cellDiv2').firstChild
        adjDown = document.getElementById('cellDiv4').firstChild
        //    console.log('adj right:',adjRight)
        //    console.log('adj down:',adjDown)
        // adds listeners to adjacent cells
        adjLeft.addEventListener('click', swapImg)
        adjRight.addEventListener('click', swapImg)
        adjDown.addEventListener('click', swapImg)
        // index of clickable cells to remove event listener
        clickableIndex = [0, 2, 4]

    } else if (emptyLoc === 2) {
        // defines image element of cells adjacent to empty cell:
        adjLeft = document.getElementById('cellDiv1').firstChild
        adjDown = document.getElementById('cellDiv5').firstChild
        // console.log('adj right:',adjRight)
        // console.log('adj down:',adjDown)
        // adds listeners to adjacent cells
        adjLeft.addEventListener('click', swapImg)
        adjDown.addEventListener('click', swapImg)
        // index of clickable cells to remove event listener
        clickableIndex = [1, 5]
    } else if (emptyLoc === 3) {
        // defines image element of cells adjacent to empty cell:
        adjUp = document.getElementById('cellDiv0').firstChild
        adjRight = document.getElementById('cellDiv4').firstChild
        adjDown = document.getElementById('cellDiv6').firstChild
        // console.log('adj right:',adjRight)
        // console.log('adj down:',adjDown)
        // adds listeners to adjacent cells
        adjUp.addEventListener('click', swapImg)
        adjRight.addEventListener('click', swapImg)
        adjDown.addEventListener('click', swapImg)
        // index of clickable cells to remove event listener
        clickableIndex = [0, 4, 6]
    } else if (emptyLoc === 4) {
        // defines image element of cells adjacent to empty cell:
        adjUp = document.getElementById('cellDiv1').firstChild
        adjLeft = document.getElementById('cellDiv3').firstChild
        adjRight = document.getElementById('cellDiv5').firstChild
        adjDown = document.getElementById('cellDiv7').firstChild
        // console.log('adj right:',adjRight)
        // console.log('adj down:',adjDown)
        // adds listeners to adjacent cells
        adjUp.addEventListener('click', swapImg)
        adjLeft.addEventListener('click', swapImg)
        adjRight.addEventListener('click', swapImg)
        adjDown.addEventListener('click', swapImg)
        // index of clickable cells to remove event listener
        clickableIndex = [1, 3, 5, 7]
    } else if (emptyLoc === 5) {
        // defines image element of cells adjacent to empty cell:
        adjUp = document.getElementById('cellDiv2').firstChild
        adjLeft = document.getElementById('cellDiv4').firstChild
        adjDown = document.getElementById('cellDiv8').firstChild
        // console.log('adj right:',adjRight)
        // console.log('adj down:',adjDown)
        // adds listeners to adjacent cells
        adjUp.addEventListener('click', swapImg)
        adjLeft.addEventListener('click', swapImg)
        adjDown.addEventListener('click', swapImg)
        // index of clickable cells to remove event listener
        clickableIndex = [2, 4, 8]
    } else if (emptyLoc === 6) {
        // defines image element of cells adjacent to empty cell:
        adjUp = document.getElementById('cellDiv3').firstChild
        adjRight = document.getElementById('cellDiv7').firstChild
        // console.log('adj right:',adjRight)
        // console.log('adj down:',adjDown)
        // adds listeners to adjacent cells
        adjUp.addEventListener('click', swapImg)
        adjRight.addEventListener('click', swapImg)
        // index of clickable cells to remove event listener
        clickableIndex = [3, 7]
    } else if (emptyLoc === 7) {
        // defines image element of cells adjacent to empty cell:
        adjLeft = document.getElementById('cellDiv6').firstChild
        adjUp = document.getElementById('cellDiv4').firstChild
        adjRight = document.getElementById('cellDiv8').firstChild
        // console.log('adj right:',adjRight)
        // console.log('adj down:',adjDown)
        // adds listeners to adjacent cells
        adjLeft.addEventListener('click', swapImg)
        adjUp.addEventListener('click', swapImg)
        adjRight.addEventListener('click', swapImg)
        // index of clickable cells to remove event listener
        clickableIndex = [4, 6, 8]
    } else {
        // (emptyLoc === 8) 
        // defines image element of cells adjacent to empty cell:
        adjUp = document.getElementById('cellDiv5').firstChild
        adjLeft = document.getElementById('cellDiv7').firstChild
        // console.log('adj right:',adjRight)
        // console.log('adj down:',adjDown)
        // adds listeners to adjacent cells
        adjUp.addEventListener('click', swapImg)
        adjLeft.addEventListener('click', swapImg)
        // index of clickable cells to remove event listener
        clickableIndex = [5, 7]
    }
};

// array of indices of cells adjacent to empty, defined in isMovable()
let clickableIndex
// empty image element; defined in swapImg()
let emptyCell
// index of clicked cell div, defined in swapImg()
let clickedCellLoc
// image element of clicked cell, defined in swapImg()
let clickedImgCell
// value of image of clicked cell, defined in swapImg()
let clickedImgCellVal
// image source of clicked cell, defined in swapImg()
let clickedImgSrc
// console.log(clickedImgSrc)

// swaps image, value, and id from clicked cell to empty cell, updates image object array, and updates moves counter:
function swapImg(e) {
    // defineImgVars()
    // defines image element of empty cell:
    emptyCell = document.getElementById(`cellDiv${emptyLoc}`).firstChild
    // console.log('emptyCell:', emptyCell)
    // defines image element of clicked cell:
    clickedImgCell = (e.target)
    // console.log('image element of clicked cell:', clickedImgCell)
    // defines index of clicked cell div
    clickedCellLoc = (parseInt(e.target.parentElement.id.charAt(7)))
    // console.log('index of clicked cell:', clickedCellLoc)
    // defines value of clicked image
    clickedImgCellVal = (parseInt(e.target.id.charAt(3)))
    // console.log('value of clicked image:', clickedImgCellVal)
    // defines image element source:
    clickedImgSrc = (`./images/image${clickedImgCellVal}.png`)
    // removes event listener from everything in cickable index array
    for (let i = 0; i < clickableIndex.length; i++) {
        let cellRem = `cellDiv${clickableIndex[i]}`
        cellRem = document.getElementById(cellRem).firstChild
        // console.log(cellRem)
        cellRem.removeEventListener('click', swapImg)
    }
    // sets attributes to empty cell:
    emptyCell.setAttribute('src', clickedImgSrc)
    emptyCell.setAttribute('value', clickedImgCellVal)
    emptyCell.setAttribute('id', `img${clickedImgCellVal}`)
    // sets attributes to clicked cell:
    clickedImgCell.setAttribute('src', './images/image0.png')
    clickedImgCell.setAttribute('value', 0)
    clickedImgCell.setAttribute('id', 'img0')
    // updates image cell array now that image cells have moved:
    const tmp = cellArr[emptyLoc]
    cellArr[emptyLoc] = cellArr[clickedCellLoc]
    cellArr[clickedCellLoc] = tmp
    // console.log(cellArr)
    // locates the empty cell on the grid again
    findEmpty()
    // increases moves count and updates moves counter
    moves += 1
    document.querySelector('.moves').innerHTML = `MOVES: ${moves}`
    isMovable()
};

document.querySelector('.button').addEventListener('click', ()=>{
    location.reload()
})

// function to check that each image is in the correct location (matching image id to cell id)
// function checkForComplete() {
//     // for (let i =0; i<cellArr.length; i++){
//     for (let i =0; i<2; i++){
//         let cellVal=document.getElementById(`img${i}`).id
//         if (cellArr[i]=i){
//             console.log('game is complete!')
//         }
//     }
// }

// let cellVal=document.getElementById('img5')
// console.log('cellVal:',cellVal)
// let cellIndex=document.getElementById('cellDiv5')
// console.log('cellIndex:', cellIndex)g

let directions = document.createElement('h3');
directions.setAttribute('class', 'directions');
directions.innerHTML = 'MOVE THE NUMBERS INTO THE CORRECT ORDER WITH THE EMPTY IN THE FIRST SQUARE';
document.body.appendChild(directions)

fillGridArr();
createCellDivs()
getCells()
shuffleCells()
dealCells()
findEmpty()
isMovable()
console.table(gridArr2)



// steps left to code:
// create function to compare image value to cell index; run this after every move
    // once all cell and image values match, the puzzle is solved: add DOM to change directions to congradulate user and list number of moves




// starting to flesh out scalable adjacent checking function(not hard-coded with set values):

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


// console.log('_____________________________________________')
// initial thoughts:
// Image cells:
// Create three classes: 
//  cellImage- general image cells
//  cellAdj- image cells adjacent to empty cell, thus allowed to move  
//  cellEmpty- single empty cell that is the only possible location where images can be dropped

// after meeting w/ Michael:
// click on image, rather than drag. use a 2d array (essentially an array of arrays) 

// Probably going to use some sort combination of ondrag and ondrop to move images from adjacent cells to the empty cell, and then event listener to change the class of the two affected cells.
// Not sure how to limit the dragability to only those cells that are adjacent to the empty cell. A distance limiter? Since every cell is a square of the same size, if the cellAdj could be limited to a distance slightly larger than the h or w of the empty cell, that would work. Don't know if that is an option.

// how to identify which cells are adjacent to empty cell?
// empty cell is identified by class & id applied upon creation, but not sure how to figure that out when images are randomly arranged
// ^^querySelector to find ID
// console.log('_____________________________________________')
