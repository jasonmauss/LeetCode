// Solution for: https://leetcode.com/problems/minimum-path-sum/description/

const minPathSum = (grid: number[][]): number => {
    
    const rowCount = grid.length;
    const colCount = grid[0].length;

    // populate a two-dimensional array with zeros
    const pathValues:number[][] = Array.from(Array(rowCount), (v,k) => new Array(colCount).fill(0));

    let pathSum = 0;

    for(let i = 0; i < rowCount; ++i) {
        pathSum += grid[i][0];
        pathValues[i][0] = pathSum;
    }

    pathSum = 0;

    for(let j = 0; j < colCount; ++j) {
        pathSum += grid[0][j];
        pathValues[0][j] = pathSum;
    }

    for(let i = 1; i < rowCount; ++i) {
        for(let j = 1; j < colCount; ++j) {
            const minPath = Math.min(pathValues[i - 1][j], pathValues[i][j - 1]);
            pathValues[i][j] = grid[i][j] + minPath;
        }
    }

    return pathValues[rowCount - 1][colCount - 1];


};


// some test cases
console.log(minPathSum([[1,3,1],[1,5,1],[4,2,1]])); // 7
console.log(minPathSum([[1,2,3],[4,5,6]])); // 12