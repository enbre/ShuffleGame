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

// copying the syntax structure from high card game & poke-a-square:


// const createCells =(numberOfSquares) => {
//     // create cells container
//     const cellContainer = document.createElement('div');
//     container.setAttribute('class', 'container');
//     document.body.appendChild(container)
//     // create cells
//     for (let i=0; i<9;i++){
//         let cell = document.createElement('img');
//         cell.setAttribute('class', 'cell-Empty');
//         cell.setAttribute('src', `./images/empty.png`);
//         container.appendChild(cell);
//     }
// }

// grid positions of the cells 

// let cellGrid = [[0,1,2], [3,4,5], [6,7,8]];
// // how to loop through cellGrid to look for 
// for (let i =0; i<cellGrid.length;i++){
//     let innerArrLen = cellGrid[i].length;
//     for (let j=0; j<innerArrLen; j++){
//         // console.log(`${i} , ${j}`)
//         if (document.querySelector('.cell-Empty')){
//             console.log(`i, j`)
//             // return cellGrid [i][j]
//         }
//     }
// }


let container = document.createElement('div');
container.setAttribute('class', 'container');
document.body.appendChild(container)

// /*
let game = {

    score: 0,

    // cellGrid: [[0,1,2], [3,4,5], [6,7,8]],

    cells: [],
// create divs - apply images with innerHTML
// look into classList - allows multiple classes to element, can add, remove and toggle on/off classes
    createCells: function () {
        // create cells
        for (let i = 0; i < 9; i++) {
            let cell = document.createElement('img');
            cell.setAttribute('class', 'cell-Start');
            cell.setAttribute('src', `./images/empty.png`);
            container.appendChild(cell);
        }
    },

    getCells: function () {
        // this.createCells()
        for (let i = 1; i < 9; i++) {
            this.cells.push({ src: `./images/image${i}.png`, value: i })
        }
        this.cells.push({ src: `./images/empty.png`, value: 0 })
        // console.log(this.cells)

    },


    shuffleCells: function () {
        // this.getCells()
        for (let i = (this.cells.length - 1); i > 0; i--) {
            x = (Math.floor(Math.random() * (i)))
            temp = this.cells[i]
            this.cells[i] = this.cells[x]
            this.cells[x] = temp
        }

    },

    cellGrid: [[0, 1, 2], [3, 4, 5], [6, 7, 8]],

    dealCells: function (cellGrid) {
        // this.shuffleCells()
        // linear loop:
        // for (let i=this.cells.length; i> 0;i--){
        // 2D loop, getting grid locations: 
        for (let i = 0; i < this.cellGrid.length; i++) {
            // let innerArrLen = this.cellGrid.length;
            let innerArrLen = this.cellGrid[i].length;
            // for (let j=0; j<this.cellGrid.length; j++){
            for (let j = 0; j < innerArrLen; j++) {
                // check to avoid changing the class of the empty cell
                // if (this.cells[i].value)>0{
                // sets img src for card images and returns last element in array
                let newCell = this.cells.pop();
                let element= document.querySelector('.cell-Start')
                element.setAttribute('src', newCell.src);
                element.setAttribute('value', newCell.value);
                element.setAttribute('xposition', i);
                element.setAttribute('yposition', j);
                // console.log(`image value: ${newCell.value}`)
                // document.querySelector('.cell-Start').setAttribute('class', 'cell-Img');
                // document.querySelector('.cell-Start').setAttribute('value', newCell.value);
                // document.querySelector('.cell-Start').setAttribute('xposition', i);
                // document.querySelector('.cell-Start').setAttribute('yposition', j);
                // console.log(`image value: ${newCell.value}`)
                document.querySelector('.cell-Start').setAttribute('class', 'cell-Img');

                // console.log(typeof(newCell.xposition))
                // console.log(`x position: ${newCell.xposition}`)
                // console.log(`y position: ${newCell.yposition}`)
                // apply "empty" id to select it and then change class

                if (newCell.value==0){
                if (newCell.src == './images/empty.png') {
                    document.querySelector('.cell-Img').setAttribute('class', 'cell-Empty');
                }
                // document.querySelector('.cell-Start').setAttribute('class', 'cell-Empty')
                // document.querySelector('.cell-Empty').setAttribute('value', 0)

            }
            // document.querySelector('value', 0)).setAttribute('class', 'cell-Empty');
        }
    }
},
      // // how to loop through cellGrid to look for 
//     findEmpty: function (cellGrid) {
//         for (let i = 0; i < this.cellGrid.length; i++) {
//             let innerArrLen = this.cellGrid[i].length;
//             for (let j = 0; j < innerArrLen; j++) {
//                 console.log(`${i} , ${j}`)
//                 if (document.querySelector('.cell-Empty')) {
//                     console.log(`${i}, ${j}`)
//                     let emptyRow = i
//                     let emptyCol = j
//                     // return cellGrid [i][j]
//                 })
//             }
//         }
//     }
// }

    // labelAdjacent: function(emptyRow,emptyCol){

    //     this.cellGrid[emptyRow+1][emptyCol+1] 
    //     this.cellGrid[emptyRow-1][emptyCol+1] 
    //     this.cellGrid[emptyRow+1][emptyCol-1] 
    //     this.cellGrid[emptyRow-1][emptyCol-1] 

    // }


    // document.querySelector('.cell-Empty').addEventListener('click', isEmpty)
    // function isEmpty(e) {
    //     console.log('this cell is empty')
    // }
    
} 
//  ^^^^^^^ END OF GAME OBJECT- should be yellow

// let cellGrid = [[0,1,2], [3,4,5], [6,7,8]]

game.createCells()
game.getCells()
console.table(game.cellGrid)
game.shuffleCells()
game.dealCells(game.cellGrid)
// game.findEmpty()
// console.log(game.cells)


// add event listeners to determine if cells are movable
document.querySelectorAll('.cell-Img').forEach(e => {
    e.addEventListener('click', isNotMovable)
    function isNotMovable(e) {
        console.log('this cell is not movable')
    }
})


// document.querySelectorAll('.cell-Adj').forEach(e =>{
//     e.addEventListener('click', isMovable)
//     function isMovable(j){
//         console.log('this cell is movable')
//     }
// }),

document.querySelector('.cell-Empty').addEventListener('click', isEmpty)
function isEmpty(e) {
    console.log('this cell is empty')
}


// findEmpty: function(cellGrid) {
//             for (let i = 0; i < this.cellGrid.length; i++) {
//                 let innerArrLen = this.cellGrid[i].length
//                 for (let j = 0; j < innerArrLen; j++) {
//                     console.log(`${i} , ${j}`)
//                     if (document.querySelector('.cell-Empty')) {
//                         // console.log(`${i}, ${j}`)
//                         let emptyRow = i
//                         let emptyCol = j
//                         // return cellGrid [i][j]
//                     }
                    
                    
//             }
//         }
// }
    



// Yesterday I got the initial game set up with 3x3 grid, labeled with their values, and have them distributing randomly (mostly). Built a 2D array that replicates game board. 

// Things that are blocking me: locating the grid coordinates for empty cell, saving them as variables, and then locating the grid coordinates of adjacent cells.





// locate where the empty cell is on the grid
    // by looping through a 2D array looking for the 'cell-Empty' class
// locate which cells are adjacent to empty cell (above, right, left, bottom)
    // based on 2D array empty cell location, each cell +/- 1 in X and Y axis
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

