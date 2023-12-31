// Solution for: https://leetcode.com/problems/find-missing-and-repeated-values/
const findMissingAndRepeatedValues = (grid) => {
    let missing = 0;
    let repeated = 0;
    let numberTracking = new Array(Math.pow(grid.length, 2)).fill(0);
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            let temp = grid[i][j] - 1;
            numberTracking[temp]++;
            if (numberTracking[temp] === 2)
                repeated = temp + 1;
        }
    }
    missing = numberTracking.findIndex((x) => x === 0) + 1;
    return [repeated, missing];
};
// some tests
console.log(findMissingAndRepeatedValues([[1, 3], [2, 2]])); // [2,4]
console.log(findMissingAndRepeatedValues([[9, 1, 7], [8, 9, 2], [3, 4, 6]])); // [9,5]
