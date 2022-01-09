// Solution for: https://leetcode.com/problems/cyclically-rotating-a-grid/
function rotateArray(arr, k) {
    k = k % arr.length;
    var rotatedArr = new Array(arr.length);
    for (var i = 0; i < arr.length; i += 1) {
        var index = (i - k + arr.length) % arr.length;
        rotatedArr[index] = arr[i];
    }
    return rotatedArr;
}
var rotateGrid = function (grid, k) {
    var dyx = [[0, 1], [1, 0], [0, -1], [-1, 0]];
    var range = [grid[0].length, grid.length];
    var _a = [0, 0, -1], d = _a[0], y = _a[1], x = _a[2];
    var edges = [];
    var _loop_1 = function () {
        var _b;
        for (var i = 0; i < range[d % 2]; i += 1) {
            _b = [y + dyx[d % 4][0], x + dyx[d % 4][1]], y = _b[0], x = _b[1];
            edges.push([y, x]);
        }
        range[(d + 1) % 2] -= 1;
        d = (d + 1) % 4;
        // we get to end of edges
        if (y === x + 1) {
            var values = edges.map(function (_a) {
                var y = _a[0], x = _a[1];
                return grid[y][x];
            });
            var rotatedValues_1 = rotateArray(values, k);
            edges.map(function (_a, i) {
                var y = _a[0], x = _a[1];
                grid[y][x] = rotatedValues_1[i];
            });
            edges = [];
        }
    };
    while (range[0] > 0 && range[1] > 0) {
        _loop_1();
    }
    return grid;
};
// some test cases
console.log(rotateGrid([[40, 10], [30, 20]], 1)); //  [[10,20],[40,30]]
console.log(rotateGrid([[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12], [13, 14, 15, 16]], 2)); //  [[3,4,8,12],[2,11,10,16],[1,7,6,15],[5,9,13,14]]
