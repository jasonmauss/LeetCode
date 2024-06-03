// Solution for: https://leetcode.com/problems/island-perimeter/

const islandPerimeter = (grid: number[][]): number => {
    
    let perimeter = 0;
    const rows = grid.length;
    const cols = grid[0].length;

    for(let i = 0; i < rows; i++){
        for(let j = 0; j < cols; j++){
            if(grid[i][j] === 1) {

                if (grid[i]?.[j-1] !==1 ) perimeter++;
                if (grid[i]?.[j+1] !==1 ) perimeter++;
                if (grid[i-1]?.[j] !==1 ) perimeter++;
                if (grid[i+1]?.[j] !==1 ) perimeter++;

            }
        }
    }
    
    return perimeter;

};


// some test cases
console.log(islandPerimeter([[0,1,0,0],[1,1,1,0],[0,1,0,0],[1,1,0,0]])); // 16
console.log(islandPerimeter([[1]])); // 4
console.log(islandPerimeter([[1,0]])); // 4