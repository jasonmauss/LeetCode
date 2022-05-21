// Solution for: https://leetcode.com/problems/n-queens/
const isQueenPlacementValid = (gameBoard:string[], ): boolean => {

    return false;
    
}

const solveNQueens = (n: number): string[][] => {

    if(n === 1) return [['Q']];
    if(n === 2) return [['Q...'],['.Q..'],['..Q.'],['...Q']];

    const gameBoard = [];

    for(let i:number = 0; i < n; i++) {
        
    }

    return [''][''];

};




// some test cases
console.log(solveNQueens(4)); // [[".Q..","...Q","Q...","..Q."],["..Q.","Q...","...Q",".Q.."]]
console.log(solveNQueens(1)); // [["Q"]]