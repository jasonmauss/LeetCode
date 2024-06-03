// Solution for: https://leetcode.com/problems/island-perimeter/
var islandPerimeter = function (grid) {
    var _a, _b, _c, _d;
    var perimeter = 0;
    var rows = grid.length;
    var cols = grid[0].length;
    for (var i = 0; i < rows; i++) {
        for (var j = 0; j < cols; j++) {
            if (grid[i][j] === 1) {
                if (((_a = grid[i]) === null || _a === void 0 ? void 0 : _a[j - 1]) !== 1)
                    perimeter++;
                if (((_b = grid[i]) === null || _b === void 0 ? void 0 : _b[j + 1]) !== 1)
                    perimeter++;
                if (((_c = grid[i - 1]) === null || _c === void 0 ? void 0 : _c[j]) !== 1)
                    perimeter++;
                if (((_d = grid[i + 1]) === null || _d === void 0 ? void 0 : _d[j]) !== 1)
                    perimeter++;
            }
        }
    }
    return perimeter;
};
// some test cases
console.log(islandPerimeter([[0, 1, 0, 0], [1, 1, 1, 0], [0, 1, 0, 0], [1, 1, 0, 0]])); // 16
console.log(islandPerimeter([[1]])); // 4
console.log(islandPerimeter([[1, 0]])); // 4
