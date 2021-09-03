// Solution for: https://leetcode.com/problems/valid-sudoku/
const isValidSudoku2 = (board: string[][]): boolean => {

    // do a check for each row (rowSet) and each column (colSet)
    for(let i: number = 0; i < board.length; i++) {

        let rowSet: Set<string> = new Set<string>();
        let colSet: Set<string> = new Set<string>();

        for(let j: number = 0; j < board.length; j++) {
            
            if(!rowSet.has(board[i][j]) && board[i][j] !== '.') {
                rowSet.add(board[i][j]);
            } else {
                if(board[i][j] !== '.') {
                    return false;
                }
            }

            if(!colSet.has(board[j][i]) && board[j][i] !== '.') {
                colSet.add(board[j][i]);
            } else {
                if(board[j][i] !== '.') {
                    return false;
                }
            }
        }
    }

    // do a check for each 3x3 box
    for(let i: number = 0; i < board.length; i += 3) {
        
        let firstRow: string[] = board[i];
        let secondRow: string[] = board[i + 1];
        let thirdRow: string[] = board[i + 2];

        for(let j: number = 0; j < board.length; j += 3) {
            
            let boxSet: Set<string> = new Set<string>();

            for(let k: number = j; k < j + 3; k++) {

                if(!boxSet.has(firstRow[k]) && firstRow[k] !== '.') {
                    boxSet.add(firstRow[k]);
                } else {
                    if(firstRow[k] !== '.') {
                        return false;
                    }
                }

                if(!boxSet.has(secondRow[k]) && secondRow[k] !== '.') {
                    boxSet.add(secondRow[k]);
                } else {
                    if(secondRow[k] !== '.') {
                        return false;
                    }
                }

                if(!boxSet.has(thirdRow[k]) && thirdRow[k] !== '.') {
                    boxSet.add(thirdRow[k]);
                } else {
                    if(thirdRow[k] !== '.') {
                        return false;
                    }
                }
            }
        }
    }

    return true;
};

// second attempt - doing it all in one pass using coordinate strings
const isValidSudoku = (board: string[][]): boolean => {
    
    let recordSet: Set<string> = new Set<string>();
    
    for(let row = 0; row < board.length; row++) {
        for(let col = 0; col < board.length; col++) {
            let currentValue = board[row][col];
            if(currentValue === '.') continue;
            let rowString = `row ${row} value ${currentValue}`;
            let colString = `col ${col} value ${currentValue}`;
            let boxName = `box ${Math.floor(row / 3)} : ${Math.floor(col / 3)}`; // e.g. box 1:1 or box 0:2
            let boxString = `${boxName} value ${currentValue}`;

            if(recordSet.has(rowString) || recordSet.has(colString) || recordSet.has(boxString)) return false;

            recordSet.add(rowString).add(colString).add(boxString);
        }
    }

    return true;
}

// some test cases
let board = [["5","3",".",".","7",".",".",".","."]
,["6",".",".","1","9","5",".",".","."]
,[".","9","8",".",".",".",".","6","."]
,["8",".",".",".","6",".",".",".","3"]
,["4",".",".","8",".","3",".",".","1"]
,["7",".",".",".","2",".",".",".","6"]
,[".","6",".",".",".",".","2","8","."]
,[".",".",".","4","1","9",".",".","5"]
,[".",".",".",".","8",".",".","7","9"]];
console.log(isValidSudoku(board)); // true

let board2 = [["8","3",".",".","7",".",".",".","."]
,["6",".",".","1","9","5",".",".","."]
,[".","9","8",".",".",".",".","6","."]
,["8",".",".",".","6",".",".",".","3"]
,["4",".",".","8",".","3",".",".","1"]
,["7",".",".",".","2",".",".",".","6"]
,[".","6",".",".",".",".","2","8","."]
,[".",".",".","4","1","9",".",".","5"]
,[".",".",".",".","8",".",".","7","9"]];

console.log(isValidSudoku(board2)); // false;

let board3 = [
[".",".","4",".",".",".","6","3","."]
,[".",".",".",".",".",".",".",".","."]
,["5",".",".",".",".",".",".","9","."]
,[".",".",".","5","6",".",".",".","."]
,["4",".","3",".",".",".",".",".","1"]
,[".",".",".","7",".",".",".",".","."]
,[".",".",".","5",".",".",".",".","."]
,[".",".",".",".",".",".",".",".","."]
,[".",".",".",".",".",".",".",".","."]];

console.log(isValidSudoku(board3)); // false;