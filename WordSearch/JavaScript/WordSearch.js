// Solution for: https://leetcode.com/problems/word-search/
const exist = (board, word) => {
    let result = false;
    const rows = board.length;
    const cols = board[0].length;
    const charLength = word.length;
    const track = (row, col, lengthAccumulated) => {
        if (lengthAccumulated === charLength) {
            result = true;
            return;
        }
        if (row >= rows || col >= cols || row < 0 || col < 0)
            return;
        if (board[row][col] !== word[lengthAccumulated])
            return;
        const pre = board[row][col];
        board[row][col] = '*';
        track(row + 1, col, lengthAccumulated + 1);
        track(row - 1, col, lengthAccumulated + 1);
        track(row, col + 1, lengthAccumulated + 1);
        track(row, col - 1, lengthAccumulated + 1);
        board[row][col] = pre;
    };
    for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
            track(row, col, 0);
        }
    }
    return result;
};
// some test cases
console.log(exist([["A", "B", "C", "E"], ["S", "F", "C", "S"], ["A", "D", "E", "E"]], 'ABCCED')); // true
console.log(exist([["A", "B", "C", "E"], ["S", "F", "C", "S"], ["A", "D", "E", "E"]], 'SEE')); // true
console.log(exist([["A", "B", "C", "E"], ["S", "F", "C", "S"], ["A", "D", "E", "E"]], 'ABCB')); // false
