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
// empty cell is identified by class applied upon creation, but not sure how to figure that out when images are randomly arranged

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

    cellGrid: [[0,1,2], [3,4,5], [6,7,8]],

    cells: [],

    createCells: function () {
        // create cells
        for (let i=0; i<9;i++){
            let cell = document.createElement('img');
            cell.setAttribute('class', 'cell-Empty');
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
        for (let i = (this.cells.length-1); i > 0; i--) {
            x = (Math.floor(Math.random() * (i )))
            temp=this.cells[i]
            this.cells[i]=this.cells[x]
            this.cells[x]=temp
        }

    },

    dealCells: function() {
        // this.shuffleCells()

        for (let i=this.cells.length; i> 0;i--){
            // check to avoid changing the class of the empty cell
            // if (this.cells[i].value)>0{
            // sets img src for card images and returns last element in array
                let newCell = this.cells.pop();
                document.querySelector('.cell-Empty').setAttribute('src', newCell.src);
                document.querySelector('.cell-Empty').setAttribute('value', newCell.value);
                    if (newCell.value>0){
                document.querySelector('.cell-Empty').setAttribute('class', 'cell-Img');
            }
        }
        document.querySelector('.cell-Empty').setAttribute('value', 0)
    },


    // how to loop through cellGrid to look for 
    findEmpty: function(cellGrid){

        for (let i =0; i<this.cellGrid.length;i++){
            let innerArrLen = this.cellGrid[i].length;
            for (let j=0; j<innerArrLen; j++){
                // console.log(`${i} , ${j}`)
                if (document.querySelector('.cell-Empty')){
                    console.log(`${i}, ${j}`)
                    let emptyRow=i
                    let emptyCol=j
                    // return cellGrid [i][j]
                }
            }
        }
    }

    labelAdjacent: function(emptyRow,emptyCol){
        
        this.cellGrid[emptyRow+1][emptyCol+1] 
        this.cellGrid[emptyRow-1][emptyCol+1] 
        this.cellGrid[emptyRow+1][emptyCol-1] 
        this.cellGrid[emptyRow-1][emptyCol-1] 
        
    }

    
// // add event listeners to determine if cells are movable
// document.querySelectorAll('.cell-Img').forEach(e =>{
//     e.addEventListener('click', isNotMovable)
//     function isNotMovable(f){
//         console.log('this cell is not movable')
//     }
// }),

// document.querySelectorAll('.cell-Adj').forEach(e =>{
//     e.addEventListener('click', isMovable)
//     function isMovable(j){
//         console.log('this cell is movable')
//     }
// }),

// document.querySelector('.cell-Empty').addEventListener('click', isEmpty)
// function isEmpty(e){
//     console.log('this cell is empty')
//     }
}
// let cellGrid = [[0,1,2], [3,4,5], [6,7,8]]

game.createCells()
game.getCells()
console.table(game.cellGrid)
game.shuffleCells()
game.dealCells()
game.findEmpty()
// console.log(game.cells)
// */

// add event listeners to determine if cells are movable
document.querySelectorAll('.cell-Img').forEach(e =>{
    e.addEventListener('click', isNotMovable)
    function isNotMovable(e){
        console.log('this cell is not movable')
    }
})

// console.log(document.querySelector('.cell-Img').getAttribute('value'))

// document.querySelectorAll('.cell-Adj').forEach(e =>{
//     e.addEventListener('click', isMovable)
//     function isMovable(j){
//         console.log('this cell is movable')
//     }
// }),

document.querySelector('.cell-Empty').addEventListener('click', isEmpty)
    function isEmpty(e){
    console.log('this cell is empty')
}






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

// Game object


