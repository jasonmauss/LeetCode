// Solution for: https://leetcode.com/problems/left-and-right-sum-differences/
const leftRigthDifference = (nums) => {
    if (nums.length === 1)
        return [0];
    let sumRight = nums.reduce((a, b) => a + b);
    let sumLeft = 0;
    const num = nums.slice(0, nums.length - 1);
    num.unshift(0);
    for (let i = 0; i < nums.length; i++) {
        sumRight -= nums[i];
        sumLeft += num[i];
        num[i] = Math.abs(sumLeft - sumRight);
    }
    return num;
};
// some test cases
console.log(leftRigthDifference([10, 4, 8, 3])); // [15,1,11,22]
console.log(leftRigthDifference([1])); // [0]
