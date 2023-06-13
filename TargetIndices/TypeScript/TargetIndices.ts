// Solution for: https://leetcode.com/problems/find-target-indices-after-sorting-array/
const targetIndices = (nums: number[], target: number): number[] => {

    const indices = [];

    nums.sort((a,b) => a - b);

    for(let i = 0; i < nums.length; i++) {
        if(nums[i] === target) {
            indices.push(i);
        }
    }

    return indices;

};







// some test cases
console.log(targetIndices([1,2,5,2,3], 2)); // [1,2]
console.log(targetIndices([1,2,5,2,3], 3)); // [3]
console.log(targetIndices([1,2,5,2,3], 5)); // [4]