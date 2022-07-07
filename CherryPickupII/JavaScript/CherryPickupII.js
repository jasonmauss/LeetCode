// Solution for: https://leetcode.com/problems/cherry-pickup-ii/
var cherryPickup = function (grid) {
    var _a = [grid.length, grid[0].length], m = _a[0], n = _a[1];
    // memo object for storing max cherries
    var memo = {};
    // helper dfs method that takes row, and col positions of both robots
    var dfs = function (row, col1, col2) {
        // bounds check (no cherries to be picked up)
        if (row === m || col1 < 0 || col1 === n || col2 < 0 || col2 === n)
            return 0;
        // check memo
        if ("".concat(row, ",").concat(col1, ",").concat(col2) in memo)
            return memo["".concat(row, ",").concat(col1, ",").concat(col2)];
        // get current cherries to be picked up (only add them if both not on same cell)
        var cherries = grid[row][col1] + (col1 !== col2 ? grid[row][col2] : 0);
        // max cherries that can be picked in next row
        var max = 0;
        // get all possible configurations (left, stay put, right for both robots)
        for (var i = -1; i < 2; i++) {
            for (var j = -1; j < 2; j++) {
                // set new max
                max = Math.max(max, dfs(row + 1, col1 + i, col2 + j));
            }
        }
        // cherries picked, plus the max of the next row
        var ans = cherries + max;
        // store in memo and return
        memo["".concat(row, ",").concat(col1, ",").concat(col2)] = ans;
        return ans;
    };
    // start dfs, and this will have max cherries
    // start at row 0, robot1 in [0,0] and robot 2 in [0,n-1]
    return dfs(0, 0, n - 1);
};
// some test cases
console.log(cherryPickup([[3, 1, 1], [2, 5, 1], [1, 5, 5], [2, 1, 1]])); // 24
console.log(cherryPickup([[1, 0, 0, 0, 0, 0, 1], [2, 0, 0, 0, 0, 3, 0], [2, 0, 9, 0, 0, 0, 0], [0, 3, 0, 5, 4, 0, 0], [1, 0, 2, 3, 0, 0, 6]])); // 28
