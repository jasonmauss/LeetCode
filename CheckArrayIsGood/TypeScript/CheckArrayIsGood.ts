// Solution for: https://leetcode.com/problems/check-if-array-is-good/
const isGood = (nums: number[]): boolean => {

    nums.sort((a, b) => a - b);
    const length = nums.length;
    for(let i = 0; i < length - 1; i++) {
        if(nums[i] !== i + 1) return false;
    }
    if(nums[length - 1] !== nums[length - 2]) return false;

    return true;

};



// some test cases
console.log(isGood([2, 1, 3])); // false
console.log(isGood([1, 3, 3, 2])); // true
console.log(isGood([1, 1])); // true
console.log(isGood([3, 4, 4, 1, 2, 1])); // false