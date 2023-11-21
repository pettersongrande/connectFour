// SELECTORS


const WIDTH = 7;
const HEIGHT = 6;

let currPlayer = 1;

let board = [];


//  FUNCTIONALITIES




function makeBoard() {
    board = [];
    for (let y=0; y < HEIGHT; y++) {
        board[y] = new Array(WIDTH).fill(null);
        // board[y] = [];
        // for(let x=0; x < WIDTH; x++) {
        //     `board[y][x]` = null
        // }
    }
    console.log('board', board);
};

function makeHtmlBoard(){
    const htmlBoard = document.getElementById("board");
    htmlBoard.innerHTML = '';
    htmlBoard.addEventListener("click", handleClick);

    // // Creates the top row in the game board.
    // let top = document.createElement("tr");
    // // Add id to row
    // top.setAttribute("id", "column-top");
    // // Add click event handler to row
    // top.addEventListener("click", handleClick);
    
    // for (let x = 0; x < WIDTH; x++) {
    //     let headCell = document.createElement("td");
    //     headCell.setAttribute("id", x);
    //     top.append(headCell);
    // }
    // htmlBoard.append(top);

    
    // loops through the height variable
    for (let y = 0; y < HEIGHT; y++) {
        // creates new row 
        const row = document.createElement("tr");
        // loops through the width
        for (var x = 0; x < WIDTH; x++) {
            // creates a new cell for each column
          const cell = document.createElement("td");
        //   setting id for each cell as the row and column
          cell.setAttribute("id", `${y}-${x}`);
        //   appends td to tr || column to row...
          row.append(cell);
        }
        htmlBoard.append(row);
      }

};

// For column x, return empty row y which addresses an empty spot in the table
function findSpotForCol(x){

    for (let y = HEIGHT-1; y >= 0; y--) {
        if (board[y][x] === null) return y;
    }
    return null;

};


function placeInTable(y , x){

    const newDiv = document.createElement("div");
    newDiv.classList.add('piece');
    newDiv.classList.add(`${currPlayer === 1 ? 'red' : 'blue'}`);
    const emptyCell = document.getElementById(`${y}-${x}`);
    emptyCell.append(newDiv);

};

function endGame(msg){
    alert(msg);
    makeBoard();
    makeHtmlBoard();
};

function handleClick(evt){
    // console.log('evt.target.id', evt.target.id);
    // console.log('(evt.target.id).split('-')', (evt.target.id).split('-'));
    const x = +((evt.target.id).split('-')[1]);
    // console.log('x', x);
    // console.log('isNaN()', isNaN(x));

    const y = findSpotForCol(x);
    if (y === null) {
        return;
    }

    placeInTable(y, x);
    board[y][x] = currPlayer;

    if (checkForWin()) {
        return endGame(`Player ${currPlayer} won!`);
      }

    // check for tie
    // TODO: check if all cells in board are filled; if so call, call endGame
      if (checkforTie()) {
        return endGame("It's a tie!");
      }

    // switch players
    if (currPlayer === 1) {
        currPlayer = 2;
    } else {
        currPlayer = 1;
    }
};

function checkforTie() {
    for (let y = 0; y < board.length; y++) {
        if (board[y].indexOf(null) > -1) return false;
    }
    return true;
}

/** checkForWin: check board cell-by-cell for "does a win start here?" */
function checkForWin() {
    function _win(cells) {
      // Check four cells to see if they're all color of current player
      //  - cells: list of four (y, x) cells
      //  - returns true if all are legal coordinates & all match currPlayer
  
      return cells.every(
        ([y, x]) =>
          y >= 0 &&
          y < HEIGHT &&
          x >= 0 &&
          x < WIDTH &&
          board[y][x] === currPlayer
      );
    }
  
    // TODO: read and understand this code. Add comments to help you.
  
    for (let y = 0; y < HEIGHT; y++) {
      for (let x = 0; x < WIDTH; x++) {
        const horiz = [[y, x], [y, x + 1], [y, x + 2], [y, x + 3]];
        const vert = [[y, x], [y + 1, x], [y + 2, x], [y + 3, x]];
        const diagDR = [[y, x], [y + 1, x + 1], [y + 2, x + 2], [y + 3, x + 3]];
        const diagDL = [[y, x], [y + 1, x - 1], [y + 2, x - 2], [y + 3, x - 3]];
  
        if (_win(horiz) || _win(vert) || _win(diagDR) || _win(diagDL)) {
          return true;
        }
      }
    };
}
 
makeBoard();
makeHtmlBoard();
