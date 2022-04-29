'use strict'
/*
Write a program that creates a string that represents an 8 x 8 grid, using
newline characters to separate lines. At each position of the grid there is
either a space or a '#' character. The characters should form a chessboard.
*/

/*
function chessBoard(row = 8, col = 8) {
    let oddRow = ''
        , evenRow = '';
    // create old row and even row
    for (let i = 0; i < col; i++) {
        if (i % 2 !== 0) {
            oddRow += '#';
            evenRow += ' ';
        } else {
            oddRow += ' ';
            evenRow += '#';
        }
    }
    // populate the board
    for (let j = 0; j < row; j++) {
        if (j % 2 === 0) console.log(oddRow);
        else console.log(evenRow);
    }
} */

// utilizing '\n'
const chessBoard = (row = 8, col = 8) => {
    let oddR = '', evenR = '';
    for (let i = 0; i < col; i++) {
        if (i % 2 !== 0) {
            oddR += '#';
            evenR += ' ';
        } else {
            oddR += ' ';
            evenR += '#';
        }
    }
    // populate the board
    let board = '';
    for (let j = 0; j < row; j++) {
        if (j % 2 === 0) {
            board = board + oddR + '\n';
        }
        else board = board + evenR + '\n';
    }
    console.log(board);
}

chessBoard();
