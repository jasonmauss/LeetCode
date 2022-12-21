// Solution for: https://leetcode.com/problems/build-array-from-permutation/
const buildArray = (nums) => {
    let returnArray = [];
    for (let i = 0; i < nums.length; i++) {
        returnArray[i] = nums[nums[i]];
    }
    return returnArray;
};
// some test cases
console.log(buildArray([0, 2, 1, 5, 3, 4])); // [0,1,2,4,5,3]
console.log(buildArray([5, 0, 1, 2, 3, 4])); // [4,5,0,1,2,3]
