// Solution for: https://leetcode.com/problems/the-k-weakest-rows-in-a-matrix/
var kWeakestRows = function (mat, k) {
    var weaknessMap = new Map();
    mat.forEach(function (row, index) {
        weaknessMap.set(index.toString(), 0);
        var sum = row.reduce(function (prev, next) { return prev + next; });
        weaknessMap[index] = sum;
    });
    return Object.entries(weaknessMap)
        .sort(function (_a, _b) {
        var a = _a[1];
        var b = _b[1];
        return a - b;
    })
        .map(function (_a) {
        var key = _a[0];
        return Number(key);
    })
        .slice(0, k);
};
// some test cases
console.log(kWeakestRows([[1, 1, 0, 0, 0],
    [1, 1, 1, 1, 0],
    [1, 0, 0, 0, 0],
    [1, 1, 0, 0, 0],
    [1, 1, 1, 1, 1]], 3)); // [2,0,3]
console.log(kWeakestRows([[1, 0, 0, 0],
    [1, 1, 1, 1],
    [1, 0, 0, 0],
    [1, 0, 0, 0]], 2)); // [0,2]
