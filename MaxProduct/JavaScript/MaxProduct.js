// Solution for: https://leetcode.com/problems/maximum-product-of-two-elements-in-an-array/
const maxProduct = (nums) => {
    if (nums.length === 2) {
        return (nums[0] - 1) * (nums[1] - 1);
    }
    let firstLargest = 0;
    let secondLargest = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > firstLargest) {
            secondLargest = firstLargest;
            firstLargest = nums[i];
        }
        else if (nums[i] > secondLargest) {
            secondLargest = nums[i];
        }
    }
    return (firstLargest - 1) * (secondLargest - 1);
};
// some test cases
console.log(maxProduct([3, 4, 5, 2])); // 12
console.log(maxProduct([1, 5, 4, 5])); // 16
console.log(maxProduct([3, 7])); // 12
