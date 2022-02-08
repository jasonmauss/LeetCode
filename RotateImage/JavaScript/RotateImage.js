// Solution for: https://leetcode.com/problems/rotate-image/
/**
 Do not return anything, modify matrix in-place instead.
 */
var swapValues = function (matrix, p1, p2) {
    var orig = matrix[p1[0]][p1[1]];
    matrix[p1[0]][p1[1]] = matrix[p2[0]][p2[1]];
    matrix[p2[0]][p2[1]] = orig;
};
var reverse = function (array) {
    var i = 0;
    var j = array.length - 1;
    while (i < j) {
        var orig = array[i];
        array[i] = array[j];
        array[j] = orig;
        i++;
        j--;
    }
};
var rotate = function (matrix) {
    for (var i = 0; i < matrix.length; i++) {
        for (var j = i + 1; j < matrix.length; j++) {
            if (i === j) {
                continue;
            }
            swapValues(matrix, [i, j], [j, i]);
        }
        reverse(matrix[i]);
    }
};
// some test cases
console.log(rotate([[1, 2, 3], [4, 5, 6], [7, 8, 9]])); // [[7,4,1],[8,5,2],[9,6,3]]
console.log(rotate([[5, 1, 9, 11], [2, 4, 8, 10], [13, 3, 6, 7], [15, 14, 12, 16]])); // [[15,13,2,5],[14,3,4,1],[12,6,8,9],[16,7,10,11]]
