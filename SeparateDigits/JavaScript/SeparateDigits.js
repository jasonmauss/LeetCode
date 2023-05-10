// Solution for: https://leetcode.com/problems/separate-the-digits-in-an-array/
const separateDigits = (nums) => {
    const outputNums = [];
    for (let num of nums) {
        let tempStringArray = num.toString().split('');
        for (let chars of tempStringArray) {
            outputNums.push(parseInt(chars));
        }
    }
    return outputNums;
};
// some test cases
console.log(separateDigits([13, 25, 83, 77])); // [1,3,2,5,8,3,7,7]
console.log(separateDigits([7, 1, 3, 9])); // [7,1,3,9]
