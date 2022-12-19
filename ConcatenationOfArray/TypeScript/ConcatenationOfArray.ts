// Solution for: https://leetcode.com/problems/concatenation-of-array/
const getConcatenation = (nums: number[]): number[] => {

    return nums.concat(nums);

};



// some test cases
console.log(getConcatenation([1,2,1])); // [1,2,1,1,2,1]
console.log(getConcatenation([1,3,2,1])); // [1,3,2,1,1,3,2,1]