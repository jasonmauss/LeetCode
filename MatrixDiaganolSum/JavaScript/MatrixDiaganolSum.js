// Solution for: https://leetcode.com/problems/matrix-diagonal-sum/
const diagonalSum = (mat) => {
    let matrixSum = 0;
    let currentPosition = -1;
    for (let [index, row] of mat.entries()) {
        if (index < (Math.round(mat.length / 2))) {
            currentPosition++;
        }
        else if (index > (Math.round(mat.length / 2))) {
            currentPosition--;
        }
        if ((row.length - 1 - currentPosition) === (0 + currentPosition)) {
            matrixSum += row[0 + currentPosition];
            currentPosition--;
        }
        else {
            matrixSum += (row[row.length - 1 - currentPosition] + row[0 + currentPosition]);
        }
    }
    return matrixSum;
};
// some test cases
console.log(diagonalSum([[1, 2, 3], [4, 5, 6], [7, 8, 9]])); // 25
console.log(diagonalSum([[1, 1, 1, 1], [1, 1, 1, 1], [1, 1, 1, 1], [1, 1, 1, 1]])); // 8
console.log(diagonalSum([[5]])); // 5
