// Solution for: https://leetcode.com/problems/minimum-operations-to-make-the-array-increasing/
const minOperations = (nums) => {
    let totalOperations = 0;
    let previousNumber = nums[0];
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] <= previousNumber) {
            let operationsRequired = (previousNumber - nums[i]) + 1;
            nums[i] = previousNumber + 1;
            totalOperations += operationsRequired;
        }
        previousNumber = nums[i];
    }
    return totalOperations;
};
// some test cases
console.log(minOperations([1, 1, 1])); // 3
console.log(minOperations([1, 5, 2, 4, 1])); // 14
console.log(minOperations([8])); // 0
