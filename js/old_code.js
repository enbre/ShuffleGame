


    // apply X and Y grid coordinates to image object: 
    // This needs to be rerun after every move
    gridLocations: function () {
        // make a duplicate of the shuffled card images array to leave the original intact
        let dupCellArr = this.cellArr.slice()
        // console.log(dupCellArr)
        for (let i = 0; i < this.cellGrid.length; i++) {
            let innerArrLen = this.cellGrid[i].length;
            for (let j = 0; j < innerArrLen; j++) {
                let newCell = dupCellArr.shift();
                newCell.xposition = j;
                newCell.yposition = i;
            }
        }
    },

    // adjustable variables for X and Y coordinates of empty cell:
    emptyX: "",
    emptyY: "",

    // loop through cellArr to find and return X and Y coordinates:
    findEmpty: function () {
        // console.log(this.cellArr)
        for (let i = 0; i < this.cellArr.length; i++) {
            let tempCell = this.cellArr[i]
            // console.log(tempCell.value)
            if (tempCell.value == 0) {
                // console.log(tempCell.xposition)
                this.emptyX = tempCell.xposition
                this.emptyY = tempCell.yposition
            }
        }
    },

    // Larger 2D array for reference:
    // cellGrid2: [[0, 1, 2, 3], [4, 5, 6, 7,], [8, 9, 10, 11,], [12, 13, 14, 15,]],

    // variables for first adjacent coords:
    adjX_1: "",
    adjY_1: "",

    // variables for second adjacent coords:
    adjX_2: "",
    adjY_2: "",

    // variable for third adjacent coords:
    adjX_3: "",
    adjY_3: "",

    // variable for fourth adjacent coords:
    adjX_4: "",
    adjY_4: "",
    // use empty X and Y coordinates to identify which cells are adjacent to empty:
    labelAdjacentCoord: function () {
        for (let i = 0; i < this.cellArr.length; i++) {
            // need nine conditionals to deal with all possible locations(X max, X min, Y max, Y min, and in the field)
            // upper left corner:
            if (this.emptyX === 0 && this.emptyY === 0) {
                // console.log('upper left')
                // first adjacent coords:
                this.adjX_1 = this.emptyX + 1
                this.adjY_1 = this.emptyY
                // second adjacent coords:
                this.adjX_2 = this.emptyX
                this.adjY_2 = this.emptyY + 1
                // third adjacent coords:
                this.adjX_3 = null
                this.adjY_3 = null
                // fourth adjacent coords:
                this.adjX_4 = null
                this.adjY_4 = null
            }
            // lower left corner:
            else if (this.emptyX === 0 && this.emptyY === this.cellGrid.length - 1) {
                // console.log('lower left')
                // first adjacent coords:
                this.adjX_1 = this.emptyX + 1
                this.adjY_1 = this.emptyY
                // second adjacent coords:
                this.adjX_2 = this.emptyX
                this.adjY_2 = this.emptyY - 1
                // third adjacent coords:
                this.adjX_3 = null
                this.adjY_3 = null
                // fourth adjacent coords:
                this.adjX_4 = null
                this.adjY_4 = null
            }
            // upper right corner:
            else if (this.emptyX === this.cellGrid.length - 1 && this.emptyY === 0) {
                // console.log('upper right')
                // first adjacent coords:
                this.adjX_1 = this.emptyX - 1
                this.adjY_1 = this.emptyY
                // second adjacent coords:
                this.adjX_2 = this.emptyX
                this.adjY_2 = this.emptyY + 1
                // third adjacent coords:
                this.adjX_3 = null
                this.adjY_3 = null
                // fourth adjacent coords:
                this.adjX_4 = null
                this.adjY_4 = null
            }
            // lower right corner:
            else if (this.emptyX === this.cellGrid.length - 1 && this.emptyY === this.cellGrid.length - 1) {
                // console.log('lower right')
                // first adjacent coords:
                this.adjX_1 = this.emptyX - 1
                this.adjY_1 = this.emptyY
                // second adjacent coords:
                this.adjX_2 = this.emptyX
                this.adjY_2 = this.emptyY - 1
                // third adjacent coords:
                this.adjX_3 = null
                this.adjY_3 = null
                // fourth adjacent coords:
                this.adjX_4 = null
                this.adjY_4 = null
            }
            // left edge:
            else if (this.emptyX === 0) {
                // console.log('left edge')
                // first adjacent coords:
                this.adjX_1 = this.emptyX
                this.adjY_1 = this.emptyY - 1
                // second adjacent coords:
                this.adjX_2 = this.emptyX + 1
                this.adjY_2 = this.emptyY
                // third adjacent coords:
                this.adjX_3 = this.emptyX
                this.adjY_3 = this.emptyY + 1
                // fourth adjacent coords:
                this.adjX_4 = null
                this.adjY_4 = null
            }
            // right edge:
            else if (this.emptyX === this.cellGrid.length - 1) {
                // console.log('right edge')
                // first adjacent coords:
                this.adjX_1 = this.emptyX
                this.adjY_1 = this.emptyY - 1
                // second adjacent coords:
                this.adjX_2 = this.emptyX - 1
                this.adjY_2 = this.emptyY
                // third adjacent coords:
                this.adjX_3 = this.emptyX
                this.adjY_3 = this.emptyY + 1
                // fourth adjacent coords:
                this.adjX_4 = null
                this.adjY_4 = null
            }
            // top edge:
            else if (this.emptyY === 0) {
                // console.log('top edge')
                // first adjacent coords:
                this.adjX_1 = this.emptyX - 1
                this.adjY_1 = this.emptyY
                // second adjacent coords:
                this.adjX_2 = this.emptyX
                this.adjY_2 = this.emptyY + 1
                // third adjacent coords:
                this.adjX_3 = this.emptyX + 1
                this.adjY_3 = this.emptyY
                // fourth adjacent coords:
                this.adjX_4 = null
                this.adjY_4 = null
            }
            // bottom edge:
            else if (this.emptyY === this.cellGrid.length - 1) {
                // console.log('bottom edge')
                // first adjacent coords:
                this.adjX_1 = this.emptyX - 1
                this.adjY_1 = this.emptyY
                // second adjacent coords:
                this.adjX_2 = this.emptyX
                this.adjY_2 = this.emptyY - 1
                // third adjacent coords:
                this.adjX_3 = this.emptyX + 1
                this.adjY_3 = this.emptyY
                // fourth adjacent coords:
                this.adjX_4 = null
                this.adjY_4 = null
            }
            // in the field:
            else {
                // first adjacent coords:
                // console.log('in the field')
                this.adjX_1 = this.emptyX + 1
                this.adjY_1 = this.emptyY
                // second adjacent coords:
                this.adjX_2 = this.emptyX
                this.adjY_2 = this.emptyY + 1
                // third adjacent coords:
                this.adjX_3 = this.emptyX - 1
                this.adjY_3 = this.emptyY
                // fourth adjacent coords:
                this.adjX_4 = this.emptyX
                this.adjY_4 = this.emptyY - 1
            }
        }
        console.log(`Adjacent cell 1: ${this.cellGrid[this.adjX_1][this.adjY_1]}`)
        // console.log(`Adjacent cell 2: ${this.cellGrid[this.adjX_2][this.adjY_2]}`)
        // console.log(`Adjacent cell 3: ${this.cellGrid[this.adjX_3][this.adjY_3]}`)
        // console.log(`Adjacent cell 4: ${this.cellGrid[this.adjX_4][this.adjY_4]}`)
    },
    // repeated for reference:
    // cellGrid: [[0, 1, 2], [3, 4, 5], [6, 7, 8]],

    // use adj X and Y coords as to locate which cells should be allowed to be clickable when selecting from cellGrid:

    // adjacentCell_1: this.cellGrid[adjX_1][adjY_1],
    // adjacentCell_1: this.cellGrid[0]
    // adjacentCell_1: this.cellGrid[this.adjX_1][this.adjY_1],
    // adjacentCell_2: this.cellGrid[this.adjX_2][this.adjY_2],
    // adjacentCell_3: this.cellGrid[this.adjX_3][this.adjY_3],
    // adjacentCell_4: this.cellGrid[this.adjX_4][this.adjY_4],


    

    // use adjacentCell #s to match to cell div #s, toggle classList of those cells to .cell-Adj, and use querySelectorAll to 






// endia's code:
/*
const rightCol = [
    15, 31, 47, 63, 79, 95, 111, 127, 
    143, 159, 175, 191, 207, 223, 239, 255
]
const leftCol = [
    0, 16, 32, 48, 64, 80, 96, 112, 
    128, 144, 160, 176, 192, 208, 224, 240
]

function generateNums () {
    for (let i = 0; i < 40; i++) {
        let bombCell = allCells[i]
        let cellAbove = bombCell - 16
        let cellBelow = bombCell + 16
        let cellRight = bombCell + 1
        let cellLeft = bombCell - 1
        let cellTopRight = bombCell - 15
        let cellTopLeft = bombCell - 17
        let cellBottomRight = bombCell + 17
        let cellBottomLeft = bombCell + 15
        // If the index of the cell is less than or equal to 15, it's in the
        // top row, so we don't want to check the cell above it.
        if (bombCell <= 15 === false) {
            // If there is no bomb and no number in the cell, add 'n' for number
            if (allCells.includes(cellAbove) === false && numCells.includes(cellAbove) === false) {
                numCells.push(cellAbove)
                // document.getElementById(`cell${cellAbove}`).innerHTML = 'n'
            }
        }
        // If the index of the cell is greater than or equal to 240, it's in the
        // bottom row, so we don't want to check the cell below it.
        if (bombCell >= 240 === false) {
            if (allCells.includes(cellBelow) === false && numCells.includes(cellBelow) === false) {
                numCells.push(cellBelow)
                // document.getElementById(`cell${cellBelow}`).innerHTML = 'n'
            }
        }
        // If the index of the cell is in the right column, don't check the
        // cell to the right.
        if (rightCol.includes(bombCell) === false) {
            if (allCells.includes(cellRight) === false && numCells.includes(cellRight) === false) {
                numCells.push(cellRight)
                // document.getElementById(`cell${cellRight}`).innerHTML = 'n'
            }
        }
        // If the index of the cell is in the left column, don't check the
        // cell to the left. 
        if (leftCol.includes(bombCell) === false) {
            if (allCells.includes(cellLeft) === false && numCells.includes(cellLeft) === false) {
                numCells.push(cellLeft)
                // document.getElementById(`cell${cellLeft}`).innerHTML = 'n'
            }
        }
        // If the index of the cell is NOT in the right column and NOT
        // in the top row, then we want to check the cell above and to the right.
        if (rightCol.includes(bombCell) === false && bombCell <= 15 === false) {
            if (allCells.includes(cellTopRight) === false && numCells.includes(cellTopRight) === false) {
                numCells.push(cellTopRight)
                // document.getElementById(`cell${cellTopRight}`).innerHTML = 'n'
            }
        }
        // If the index of the cell is NOT in the left column and NOT
        // in the top row, then we want to check the cell above and to the left.
        if (leftCol.includes(bombCell) === false && bombCell <= 15 === false) {
            if (allCells.includes(cellTopLeft) === false && numCells.includes(cellTopLeft) === false) {
                numCells.push(cellTopLeft)
                // document.getElementById(`cell${cellTopLeft}`).innerHTML = 'n'
            }
        }
        // If the index of the cell is NOT in the right column and NOT
        // in the bottom row, then we want to check the cell below and to the right.
        if (rightCol.includes(bombCell) === false && bombCell >= 240 === false) {
            if (allCells.includes(cellBottomRight) === false && numCells.includes(cellBottomRight) === false) {
                numCells.push(cellBottomRight)
                // document.getElementById(`cell${cellBottomRight}`).innerHTML = 'n'
            }
        }
        // If the index of the cell is NOT in the left column and NOT
        // in the bottom row, then we want to check the cell below and to the left.
        if (leftCol.includes(bombCell) === false && bombCell >= 240 === false) {
            if (allCells.includes(cellBottomLeft) === false && numCells.includes(cellBottomLeft) === false) {
                numCells.push(cellBottomLeft)
                // document.getElementById(`cell${cellBottomLeft}`).innerHTML = 'n'
            }
        }
    }
};
*/




