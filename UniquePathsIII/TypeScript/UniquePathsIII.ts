// Solution for: https://leetcode.com/problems/unique-paths-iii/
const uniquePathsIII = (grid: number[][]): number => {

    if (grid == null || grid.length === 0) return 0;

    const h = grid.length;
    const w = grid[0].length;
    const dirs = [[-1, 0], [0, 1], [1, 0], [0, -1]];
    let start;
    let end;
    let emptyCount = 1;
    let result = 0;

    for (let i = 0; i < h; i++) {
        for (let j = 0; j < w; j++) {
        if (grid[i][j] === 0) emptyCount++;
        else if (grid[i][j] === 1) start = [i, j];
        else if (grid[i][j] === 2) end = [i, j];
        }
    }

    const go = (x:number, y:number, count:number):void => {
            if (grid[x][y] === -1 || grid[x][y] === Infinity) return;

            if (x === end[0] && y === end[1]) {
            if (count === emptyCount) result++;
            return;
        }

        grid[x][y] = Infinity;

        for (const [di, dj] of dirs) {
            const i = x + di;
            const j = y + dj;
            if (i < 0 || i >= h || j < 0 || j >= w) continue;
            go(i, j, count + 1);
        }
        
        grid[x][y] = 0;
    }

    go(start[0], start[1], 0);

    return result;

};




// some test cases
console.log(uniquePathsIII([[1,0,0,0],[0,0,0,0],[0,0,2,-1]])); // 2
console.log(uniquePathsIII([[1,0,0,0],[0,0,0,0],[0,0,0,2]])); // 4
console.log(uniquePathsIII([[0,1],[2,0]])); // 0