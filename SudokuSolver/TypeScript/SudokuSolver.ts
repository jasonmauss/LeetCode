// Solution for: https://leetcode.com/problems/sudoku-solver/
/**
 Do not return anything, modify board in-place instead.
 */
const solveSudoku = (board: string[][]): void => {

    // isValid checks the current row, column and box for the 'value' param
    // already existing or not
    const isValidValue = (x: number, y: number, value: string): boolean => {        
        for (let i:number = 0; i < 3; i++) {
            for (let j:number = 0; j < 3; j++) {
                if (board[x][i * 3 + j] === value) return false;
                if (board[i * 3 + j][y] === value) return false;

                const squareX:number = Math.floor(x / 3) * 3;
                const squareY:number = Math.floor(y / 3) * 3;
                if (board[squareX + i][squareY + j] === value) return false;
            }
        }
        
        return true;
    }

    const solve = (x: number = 0, y: number = 0): boolean => {

        if (y >= 9 || x >= 9) return true;
        
        const nextX:number = x === 8 ? 0 : x + 1;
        const nextY:number = nextX === 0 ? y + 1 : y;
        
        if (board[x][y] !== '.') return solve(nextX, nextY);
        
        for (let i:number = 1; i <= 9; i++) {
            if (isValidValue(x, y, String(i))) {
                board[x][y] = String(i);
                if (solve(nextX, nextY)) return true;
                board[x][y] = '.';
            }
        }

        return false;
    }

    solve();

};

// some test cases
let board1 = [
["5","3",".",".","7",".",".",".","."]
,["6",".",".","1","9","5",".",".","."]
,[".","9","8",".",".",".",".","6","."]
,["8",".",".",".","6",".",".",".","3"]
,["4",".",".","8",".","3",".",".","1"]
,["7",".",".",".","2",".",".",".","6"]
,[".","6",".",".",".",".","2","8","."]
,[".",".",".","4","1","9",".",".","5"]
,[".",".",".",".","8",".",".","7","9"]]

solveSudoku(board1);
console.log(board1);

let board2 = [
    ["5","3",".",".","7",".",".",".","."]
    ,["6",".",".","1","9","5",".",".","."]
    ,[".","9","8",".",".",".",".","6","."]
    ,["8",".",".",".","6",".",".",".","3"]
    ,["4",".",".","8",".","3",".",".","1"]
    ,["7",".",".",".","2",".",".",".","6"]
    ,[".","6",".",".",".",".","2","8","."]
    ,[".",".",".","4","1","9",".",".","5"]
    ,[".",".",".",".","8",".",".","7","9"]]

solveSudoku(board2);
console.log(board2);