// Solution for: https://leetcode.com/problems/ways-to-split-array-into-good-subarrays/
const numberOfGoodSubarraySplits = (nums: number[]): number => {

    // if only a single instance of the number 1 exists, then we can
    // only have one subarray.
    if(nums.filter((x) => x === 1).length === 1) return 1;

    const mod = Math.pow(10, 9) + 7;
    const numLength = nums.length;
    const oneIndexOffsets = [];

    for(let i = 0; i < numLength; i++) {
        if(nums[i] === 1) oneIndexOffsets.push(i);
    }

    if(!oneIndexOffsets.length) return 0;

    let result = 1;

    for(let i = 1; i < oneIndexOffsets.length; i++) {
        let combinations = oneIndexOffsets[i] - oneIndexOffsets[i - 1];
        result = (result * combinations) % mod;
    }

    return result;

};






// some test cases
console.log(numberOfGoodSubarraySplits([0,1,0,0,1])); // 3
console.log(numberOfGoodSubarraySplits([0,1,0])); // 1
console.log(numberOfGoodSubarraySplits([0,1,0,0,1,0,0,1,0,1])); // 18
// [0,1],     [0,0,1],     [0,0,1],   [0,1]
// [0,1],     [0,0,1],     [0,0,1,0], [1]
// [0,1],     [0,0,1,0],   [0,1],     [0,1]
// [0,1],     [0,0,1,0],   [0,1,0],   [1]
// [0,1],     [0,0,1,0,0], [1,0],     [1]
// [0,1],     [0,0,1,0,0], [1],       [0,1]
// [0,1,0],   [0,1],       [0,0,1],   [0,1]
// [0,1,0],   [0,1],       [0,0,1,0], [1]
// [0,1,0],   [0,1,0],     [0,1],     [0,1]
// [0,1,0],   [0,1,0],     [0,1,0],   [1]
// [0,1,0],   [0,1,0,0],   [1,0],     [1]
// [0,1,0],   [0,1,0,0],   [1],       [0,1]
// [0,1,0,0], [1,0],       [0,1,0],   [1]
// [0,1,0,0], [1,0],       [0,1],     [0,1]
// [0,1,0,0], [1],         [0,0,1,0], [1]
// [0,1,0,0], [1],         [0,0,1],   [0,1]
// [0,1,0,0], [1,0,0],     [1,0],     [1]
// [0,1,0,0], [1,0,0],     [1],       [0,1]

// get the number of zero's between each 1
// and multiply the differences of adjacent
// pairs of 1's