// Solution for: https://leetcode.com/problems/n-queens-ii/
const isQueenPlacementValid = (gameBoard) => {
    const row = gameBoard.length - 1;
    const column = gameBoard[gameBoard.length - 1];
    for (let i = 0; i < gameBoard.length - 1; i++) {
        const curRow = i;
        const curCol = gameBoard[i];
        const leftIndex = curCol - (row - curRow);
        const rightIndex = curCol + (row - curRow);
        if (column === curCol)
            return false;
        if (column === leftIndex || column === rightIndex)
            return false;
    }
    return true;
};
const processQueenChoices = (choices) => {
    const queenChoices = [];
    for (let i = 0; i < choices.length; i++) {
        queenChoices.push('');
    }
    for (let i = 0; i < queenChoices.length; i++) {
        for (let j = 0; j < queenChoices.length; j++) {
            if (choices[i] === j) {
                queenChoices[i] += 'Q';
            }
            else {
                queenChoices[i] += '.';
            }
        }
    }
    return queenChoices;
};
const getNQueens = (n, row, choices, solutions) => {
    if (row === n) {
        const verifiedChoices = processQueenChoices(choices);
        solutions.push(verifiedChoices);
        return solutions;
    }
    else {
        for (let i = 0; i < n; i++) {
            choices.push(i);
            if (isQueenPlacementValid(choices)) {
                solutions = getNQueens(n, row + 1, choices, solutions);
            }
            choices.pop();
        }
    }
    return solutions;
};
const totalNQueens = (n) => {
    if (n === 1)
        return 1;
    if (n === 2)
        return 0;
    const gameBoards = getNQueens(n, 0, [], []);
    return gameBoards.length;
};
// some test cases
console.log(totalNQueens(4)); // 2
console.log(totalNQueens(1)); // 1
