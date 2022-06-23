// Solution for: https://leetcode.com/problems/count-fertile-pyramids-in-a-land/
const countPyramid = (grid:number[][]): number => {

    let rows:number = grid.length;
    let cols:number = grid[0].length;
    let result:number = 0;

    for (let i:number = 1; i < rows; ++i) {
        for (let j:number = 1; j < cols - 1; ++j) {
            if(grid[i][j] != 0 && grid[i - 1][j] != 0) {
                grid[i][j] = Math.min(grid[i - 1][j - 1], grid[i - 1][j + 1]) + 1;
                result += grid[i][j] - 1;
            }
        }
    }

    return result;

};

const countPyramids = (grid: number[][]): number => {

    let result:number = 0;

    result += countPyramid(grid);

    for(let i:number = 0; i < grid.length; ++i) {
        for(let j:number = 0; j < grid[0].length; ++j) {
            if(grid[i][j] > 0) grid[i][j] = 1;
        }
    }

    for(let i:number = 0, j:number = grid.length - 1; i <= j; i++, j--) {
        for(let k:number = 0; k < grid[i].length; ++k) {
            let m:number = grid[i][k];
            grid[i][k] = grid[j][k];
            grid[j][k] = m;
        }
    }

    result += countPyramid(grid);

    return result;

};



// some test cases
console.log(countPyramids([[0,1,1,0],[1,1,1,1]])); // 2
console.log(countPyramids([[1,1,1],[1,1,1]])); // 2
console.log(countPyramids([[1,1,1,1,0],[1,1,1,1,1],[1,1,1,1,1],[0,1,0,0,1]])); // 13