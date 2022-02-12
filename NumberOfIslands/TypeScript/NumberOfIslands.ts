// Solution for: https://leetcode.com/problems/number-of-islands/
const numIslands = (grid: string[][]): number => {
    
  let islandCount:number = 0;

  for(let i:number = 0; i < grid.length; i++) {
    for(let j:number = 0; j < grid[i].length; j++) {
      if(grid[i][j] === '1') {
        islandCount++;
        helper(i, j, grid);
      }
    }
  }

  return islandCount;

};

const helper = (i: number, j: number, grid: string[][]): void => {
  
  grid[i][j] = '0';

  if(i > 0 && grid[i-1][j] === '1') {
      helper(i - 1, j, grid);
  }

  if(i < grid.length-1 && grid[i+1][j] === '1') {
      helper(i + 1, j, grid);
  }

  if(j > 0 && grid[i][j-1] === '1') {
      helper(i, j - 1, grid);
  }

  if(j < grid[i].length-1 && grid[i][j+1] === '1') {
      helper(i, j + 1, grid);
  }

}

// some test cases
console.log(numIslands([
    ["1","1","1","1","0"],
    ["1","1","0","1","0"],
    ["1","1","0","0","0"],
    ["0","0","0","0","0"]
  ])); // 1

  console.log(numIslands([
    ["1","1","0","0","0"],
    ["1","1","0","0","0"],
    ["0","0","1","0","0"],
    ["0","0","0","1","1"]
  ])); // 3