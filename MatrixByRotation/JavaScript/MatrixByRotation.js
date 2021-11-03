// Solution for: https://leetcode.com/problems/determine-whether-matrix-can-be-obtained-by-rotation/
var findRotation = function (mat, target) {
    for (var i = 0; i < 4; i++)
        if (JSON.stringify(mat = rotate(mat)) === JSON.stringify(target))
            return true;
    return false;
};
var rotate = function (mat) { return mat.map(function (row, i) { return row.map(function (_, j) { return mat[mat.length - 1 - j][i]; }); }); };
// some test cases
console.log(findRotation([[0, 1], [1, 0]], [[1, 0], [0, 1]])); // true
console.log(findRotation([[0, 1], [1, 1]], [[1, 0], [0, 1]])); // false
console.log(findRotation([[0, 0, 0], [0, 1, 0], [1, 1, 1]], [[1, 1, 1], [0, 1, 0], [0, 0, 0]])); // true
