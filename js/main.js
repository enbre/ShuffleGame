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

// /*
let game = {
    // number of player moves:
    moves: 0,
    // array representing the game board locations:
    gridArr: [],
    // total number of cells in grid array
    gridArrLen: 0,
    // length of one side of the grid
    // array used to store image objects with source, value, and id keys:
    cellArr: [],

    emptyLoc: 0,
    
    // populate the grid array with indices:
    fillGridArr: function(){
        for (let i =0; i<9;i++){
            this.gridArr.push(i)
            this.gridArrLen++
        }
    },

    // creates divs containers for images:
    //apply images with innerHTML- though this doesn't seem to be working
    createCellDivs: function () {
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
    },

    // populates cells array with object with image source, value, and id (is ID useful for the image?):
    getCells: function () {
        // this.createCells()
        for (let i = 1; i < 9; i++) {
            this.cellArr.push({ src: `./images/image${i}.png`, value: i, id: `img${i}` })
        }
        this.cellArr.push({ src: `./images/empty.png`, value: 0, id: `img0` })
        // console.log(this.cells)
    },

    // shuffles cells array so they are in random order, done at the start of the game:
    shuffleCells: function () {
        // this.getCells()
        for (let i = (this.cellArr.length - 1); i > 0; i--) {
            x = (Math.floor(Math.random() * (i)))
            temp = this.cellArr[i]
            this.cellArr[i] = this.cellArr[x]
            this.cellArr[x] = temp
        }
        // console.log(this.cells)
        // console.log('--------------------------------------------------------------------------------------------------'),
    },

    // distributes shuffled cells to grid of cell containers at the start of the game:
    dealCells: function () {
        // this.shuffleCells()
        // linear array to apply image objects to div cell containers:
        for (let k = 0; k < this.cellArr.length; k++) {
            let newCell = this.cellArr[k];
            // console.log(newCell)
            // console.log(newCell.src)
            document.getElementById(`cell${k}`).setAttribute('src', newCell.src)
            document.getElementById(`cell${k}`).setAttribute('value', newCell.value)
            document.getElementById(`cell${k}`).setAttribute('id', newCell.id)
        }
    },
    // find the empty cell:
    findEmpty: function(){
        for(let i=0;i<this.gridArrLen;i++){
            let tempCell = this.cellArr[i]
            // console.log(tempCell.value)
            if (tempCell.value == 0) {
               this.emptyLoc=i
            }
        }
    },

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
    findAdj: function(){
        // figure out length of one side of grid:
        let gridSide=Math.sqrt(this.gridArrLen)

        // for (let i=0;i<this.gridArrLen;i++){
            this.adjAbove=this.emptyLoc-gridSide
            this.adjBelow=this.emptyLoc+gridSide
            this.adjRight=this.emptyLoc+1
            this.adjleft=this.emptyLoc-1





        // }
        
        
        // console.log(gridSide)
        // if (this.emptyLoc)
        // this.gridArrLen
        // this.emptyLoc
    }



}
//  ^^^^^^^ END OF GAME OBJECT- should be yellow


game.fillGridArr()
// console.log(game.gridArr)

game.createCellDivs()
game.getCells()
game.shuffleCells()
game.dealCells()
game.findEmpty()
// game.findAdj()
console.log(`Empty location: ${game.emptyLoc}`)
console.log(`Type of Empty location: ${typeof(game.emptyLoc)}`)

// console.log(`Adjacent above cell: ${game.adjAbove}`)
// console.log(`Adjacent below cell: ${game.adjBelow}`)
// console.log(`Adjacent left cell: ${game.adjLeft}`)
// console.log(`Adjacent right cell: ${game.adjRight}`)




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



















    // James Sinkler  1:39 PM
    // Coding Challenge: FizzBuzz
    // 1-100, inclusive
    // ===============================
    // Find a javascript file, and try and write some code to do the following.
    // If the number is divisible by 3, write “Fizz”
    // If the number is divisible by 5, write “Buzz”
    // If the number is divisible by both 3 and 5, write “FizzBuzz”
    // Otherwise, write the number



// const fizzBuzz=()=>{
//     for (let i=1;i<101;i++){
//         if (i%3===0 && i%5===0){
//             console.log(`${i}, FizzBuzz`)            
//         }else if (i%3==0){
//             console.log(`${i}, Fizz`)
//         }else if (i%5===0){
//             console.log(`${i}, Buzz`)        
//         } console.log(i)
//     }    

// }    

// fizzBuzz()

