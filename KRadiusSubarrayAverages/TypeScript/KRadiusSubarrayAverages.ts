// Solution for: https://leetcode.com/problems/k-radius-subarray-averages/
const getAverages = (nums: number[], k: number): number[] => {

    return [0];

};


// some test cases
console.log(getAverages([7,4,3,9,1,8,5,2,6], 3)); // [-1,-1,-1,5,4,4,-1,-1,-1]
console.log(getAverages([100000], 0)); // [100000]
console.log(getAverages([8], 100000)); // [-1]