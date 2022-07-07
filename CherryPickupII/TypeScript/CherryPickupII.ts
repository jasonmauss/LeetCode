// Solution for: https://leetcode.com/problems/cherry-pickup-ii/
const cherryPickup = (grid: number[][]): number => {

    const [m, n] = [grid.length, grid[0].length];
    // memo object for storing max cherries
    const memo: { [key: string]: number } = {};
    // helper dfs method that takes row, and col positions of both robots
    const dfs = (row: number, col1: number, col2: number): number => {

        // bounds check (no cherries to be picked up)
        if (row === m || col1 < 0 || col1 === n || col2 < 0 || col2 === n) return 0;
        // check memo
        if (`${row},${col1},${col2}` in memo) return memo[`${row},${col1},${col2}`];

        // get current cherries to be picked up (only add them if both not on same cell)
        const cherries = grid[row][col1] + (col1 !== col2 ? grid[row][col2] : 0);

        // max cherries that can be picked in next row
        let max = 0;

        // get all possible configurations (left, stay put, right for both robots)
        for (let i = -1; i < 2; i++) {
            for (let j = -1; j < 2; j++) {
                // set new max
                max = Math.max(max, dfs(row + 1, col1 + i, col2 + j));
            }
        }

        // cherries picked, plus the max of the next row
        const ans = cherries + max;
        // store in memo and return
        memo[`${row},${col1},${col2}`] = ans;
        
        return ans;
    }

    // start dfs, and this will have max cherries
    // start at row 0, robot1 in [0,0] and robot 2 in [0,n-1]
    return dfs(0, 0, n - 1);

};


// some test cases
console.log(cherryPickup([[3,1,1],[2,5,1],[1,5,5],[2,1,1]])); // 24
console.log(cherryPickup([[1,0,0,0,0,0,1],[2,0,0,0,0,3,0],[2,0,9,0,0,0,0],[0,3,0,5,4,0,0],[1,0,2,3,0,0,6]])); // 28