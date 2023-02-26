// Solution for: https://leetcode.com/problems/largest-local-values-in-a-matrix/
const largestLocal = (grid) => {
    const size = grid.length;
    const result = [];
    const largestValue = (startRow, startColumn) => {
        let largest = Number.MIN_SAFE_INTEGER;
        for (let i = startRow - 1; i < startRow + 2; i++) {
            for (let j = startColumn - 1; j < startColumn + 2; j++) {
                largest = Math.max(largest, grid[i][j]);
            }
        }
        return largest;
    };
    for (let row = 1; row < size - 1; row++) {
        const localValues = [];
        for (let col = 1; col < size - 1; col++) {
            localValues.push(largestValue(row, col));
        }
        result.push(localValues);
    }
    return result;
};
// some test cases
console.log(largestLocal([[9, 9, 8, 1], [5, 6, 2, 6], [8, 2, 6, 4], [6, 2, 2, 2]])); // [[9,9],[8,6]]
console.log(largestLocal([[1, 1, 1, 1, 1], [1, 1, 1, 1, 1], [1, 1, 2, 1, 1], [1, 1, 1, 1, 1], [1, 1, 1, 1, 1]])); // [[2,2,2],[2,2,2],[2,2,2]]
