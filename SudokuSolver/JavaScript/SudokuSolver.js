// Solution for: https://leetcode.com/problems/sudoku-solver/
/**
 Do not return anything, modify board in-place instead.
 */
var solveSudoku = function (board) {
    // isValid checks the current row, column and box for the 'value' param
    // already existing or not
    var isValidValue = function (x, y, value) {
        for (var i = 0; i < 3; i++) {
            for (var j = 0; j < 3; j++) {
                if (board[x][i * 3 + j] === value)
                    return false;
                if (board[i * 3 + j][y] === value)
                    return false;
                var squareX = Math.floor(x / 3) * 3;
                var squareY = Math.floor(y / 3) * 3;
                if (board[squareX + i][squareY + j] === value)
                    return false;
            }
        }
        return true;
    };
    var solve = function (x, y) {
        if (x === void 0) { x = 0; }
        if (y === void 0) { y = 0; }
        if (y >= 9 || x >= 9)
            return true;
        var nextX = x === 8 ? 0 : x + 1;
        var nextY = nextX === 0 ? y + 1 : y;
        if (board[x][y] !== '.')
            return solve(nextX, nextY);
        for (var i = 1; i <= 9; i++) {
            if (isValidValue(x, y, String(i))) {
                board[x][y] = String(i);
                if (solve(nextX, nextY))
                    return true;
                board[x][y] = '.';
            }
        }
        return false;
    };
    solve();
};
// some test cases
var board1 = [
    ["5", "3", ".", ".", "7", ".", ".", ".", "."],
    ["6", ".", ".", "1", "9", "5", ".", ".", "."],
    [".", "9", "8", ".", ".", ".", ".", "6", "."],
    ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
    ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
    ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
    [".", "6", ".", ".", ".", ".", "2", "8", "."],
    [".", ".", ".", "4", "1", "9", ".", ".", "5"],
    [".", ".", ".", ".", "8", ".", ".", "7", "9"]
];
solveSudoku(board1); //
console.log(board1);
var board2 = [
    ["5", "3", ".", ".", "7", ".", ".", ".", "."],
    ["6", ".", ".", "1", "9", "5", ".", ".", "."],
    [".", "9", "8", ".", ".", ".", ".", "6", "."],
    ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
    ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
    ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
    [".", "6", ".", ".", ".", ".", "2", "8", "."],
    [".", ".", ".", "4", "1", "9", ".", ".", "5"],
    [".", ".", ".", ".", "8", ".", ".", "7", "9"]
];
console.log(solveSudoku(board2)); //
