// Solution for: https://leetcode.com/problems/max-pair-sum-in-an-array/
const maxSum = (nums: number[]): number => {

    let maxPairSumValue = -1;

    for(let i = 0; i < nums.length; i++) {
        const maxDigit = Math.max(...nums[i].toString().split('').map(Number));
        for(let j = i + 1; j < nums.length; j++) {
            const maxOtherDigit = Math.max(...nums[j].toString().split('').map(Number));
            if(maxOtherDigit === maxDigit) {
                maxPairSumValue = Math.max(maxPairSumValue, (nums[i] + nums[j]));
            }
        }
    }


    return maxPairSumValue;

};






// some test cases
console.log(maxSum([51,71,17,24,42])); // 88
console.log(maxSum([1,2,3,4])); // -1