// Solution for: https://leetcode.com/problems/create-target-array-in-the-given-order/
const createTargetArray = (nums: number[], index: number[]): number[] => {

    let target = new Array().fill(nums.length);

    for(let arrayPosition = 0; arrayPosition < nums.length; arrayPosition++) {
        target.splice(index[arrayPosition], 0, nums[arrayPosition]);
    }

    return target;
};






// some test cases
console.log(createTargetArray([0,1,2,3,4],[0,1,2,2,1])); // [0,4,1,3,2]
console.log(createTargetArray([1,2,3,4,0],[0,1,2,3,0])); // [0,1,2,3,4]
