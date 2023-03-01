// Solution for: https://leetcode.com/problems/sum-of-all-odd-length-subarrays/
const sumOddLengthSubarrays = (arr) => {
    let runningTotal = 0;
    for (let oddLength = 1; oddLength <= arr.length; oddLength += 2) {
        for (let startingPosition = 0; startingPosition + oddLength <= arr.length; startingPosition++) {
            let arrayElements = arr.slice(startingPosition, startingPosition + oddLength);
            runningTotal += arrayElements.reduce((a, b) => a + b, 0);
        }
    }
    return runningTotal;
};
// some test cases
console.log(sumOddLengthSubarrays([1, 4, 2, 5, 3])); // 58
console.log(sumOddLengthSubarrays([1, 2])); // 3
console.log(sumOddLengthSubarrays([10, 11, 12])); // 66
