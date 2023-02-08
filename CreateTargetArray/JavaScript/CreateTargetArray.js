// Solution for: https://leetcode.com/problems/create-target-array-in-the-given-order/
const createTargetArray = (nums, index) => {
    return [0];
};
// some test cases
console.log(createTargetArray([0, 1, 2, 3, 4], [0, 1, 2, 2, 1])); // [0,4,1,3,2]
console.log(createTargetArray([1, 2, 3, 4, 0], [0, 1, 2, 3, 0])); // [0,1,2,3,4]
