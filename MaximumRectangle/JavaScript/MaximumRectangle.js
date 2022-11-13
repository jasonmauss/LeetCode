// Solution for: https://leetcode.com/problems/maximal-rectangle/
const maximalRectangle = (matrix) => {
    if (matrix.length === 0)
        return 0;
    if (matrix[0].length === 0)
        return 0;
    let ans = 0;
    const matrixLength = matrix.length;
    const matrixItemLength = matrix[0].length;
    const dp = matrix.map(row => row.map(item => Number(item)));
    for (let j = 0; j < matrixItemLength; j++) {
        for (let i = 1; i < matrixLength; i++) {
            if (matrix[i][j] === '0')
                continue;
            if (matrix[i - 1][j] === '0')
                continue;
            dp[i][j] = dp[i - 1][j] + 1;
        }
    }
    const getMaxArea = (row) => {
        let area = 0;
        for (let i = 0; i < row.length; i++) {
            const pivot = row[i];
            for (let j = i; j < row.length; j++) {
                if (row[j] === 0)
                    break;
                const minHeight = Math.min(...row.slice(i, j + 1));
                area = Math.max(area, minHeight * (j - i + 1));
            }
        }
        return area;
    };
    return Math.max(...dp.map(getMaxArea));
};
// some test cases
console.log(maximalRectangle([["1", "0", "1", "0", "0"], ["1", "0", "1", "1", "1"], ["1", "1", "1", "1", "1"], ["1", "0", "0", "1", "0"]])); // 6
console.log(maximalRectangle([["0"]])); // 0
console.log(maximalRectangle([["1"]])); // 1
