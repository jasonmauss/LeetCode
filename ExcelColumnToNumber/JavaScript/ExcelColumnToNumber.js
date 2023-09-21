// Solution for: https://leetcode.com/problems/excel-sheet-column-number/
const titleToNumber = (columnTitle) => {
    let runningTotal = 0;
    for (let i = 0; i < columnTitle.length; i++) {
        let exponent = columnTitle.length - i - 1;
        runningTotal += Math.pow(26, exponent) * (columnTitle.charCodeAt(i) - 64);
    }
    return runningTotal;
};
// some test cases
console.log(titleToNumber("A")); // 1
console.log(titleToNumber("AB")); // 28
console.log(titleToNumber("ZY")); // 701
console.log(titleToNumber("FXSHRXW")); // 2147483647
