// Solution for: https://leetcode.com/problems/how-many-numbers-are-smaller-than-the-current-number/
const smallerNumbersThanCurrent = (nums: number[]): number[] => {

    let sorted = nums.slice().sort((a,b) => a - b);
    let result = [];

    for(let i = 0; i < nums.length; i++) {
        result.push(sorted.indexOf(nums[i]));
    }

    return result;

};




// some test cases
console.log(smallerNumbersThanCurrent([8,1,2,2,3])); // [4,0,1,1,3]
console.log(smallerNumbersThanCurrent([6,5,4,8])); // [2,1,0,3]
console.log(smallerNumbersThanCurrent([7,7,7,7])); // [0,0,0,0]