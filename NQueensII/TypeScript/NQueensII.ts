// Solution for: https://leetcode.com/problems/n-queens-ii/
const isQueenPlacementValid = (gameBoard:number[]): boolean => {

    const row = gameBoard.length - 1;
    const column = gameBoard[gameBoard.length - 1];

    for(let i:number = 0; i < gameBoard.length - 1; i++) {
        const curRow:number = i;
        const curCol:number = gameBoard[i];
        const leftIndex = curCol - (row - curRow);
        const rightIndex = curCol + (row - curRow);

        if(column === curCol) return false;
        if(column === leftIndex || column === rightIndex) return false;
    }

    return true;

}

const processQueenChoices = (choices:number[]): string[] => {

    const queenChoices = [];

    for(let i:number = 0; i < choices.length; i++) {
        queenChoices.push('');
    }

    for(let i:number = 0; i < queenChoices.length; i++) {
        for(let j:number = 0; j < queenChoices.length; j++) {
            if(choices[i] === j) {
                queenChoices[i] += 'Q';
            } else {
                queenChoices[i] += '.';
            }
        }
    }

    return queenChoices;
}

const getNQueens = (n:number, row:number, choices:number[], solutions:string[][]): string[][] => {

    if(row === n) {
        const verifiedChoices = processQueenChoices(choices);
        solutions.push(verifiedChoices);
        return solutions;
    } else {
        for(let i:number = 0; i < n; i++) {
            choices.push(i);
            if(isQueenPlacementValid(choices)) {
                solutions = getNQueens(n, row + 1, choices, solutions);
            }
            choices.pop();
        }
    }

    return solutions;
}

const totalNQueens = (n: number): number => {

    if(n === 1) return 1;
    if(n === 2) return 0;

    const gameBoards = getNQueens(n, 0, [], []);
    return gameBoards.length;

};



// some test cases
console.log(totalNQueens(4)); // 2
console.log(totalNQueens(1)); // 1