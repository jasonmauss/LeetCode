// Solution for: https://leetcode.com/problems/flipping-an-image/
function flipAndInvertImage(image) {
    return image.map(function (x) { return x.reverse().map(function (y) { return y === 0 ? 1 : 0; }); });
}
;
// some test cases
console.log(flipAndInvertImage([[1, 1, 0], [1, 0, 1], [0, 0, 0]])); // [[1,0,0],[0,1,0],[1,1,1]]
console.log(flipAndInvertImage([[1, 1, 0, 0], [1, 0, 0, 1], [0, 1, 1, 1], [1, 0, 1, 0]])); // [[1,1,0,0],[0,1,1,0],[0,0,0,1],[1,0,1,0]]
