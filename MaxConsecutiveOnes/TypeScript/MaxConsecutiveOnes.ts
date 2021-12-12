// Solution for: https://leetcode.com/problems/max-consecutive-ones/
const findMaxConsecutiveOnes = (nums: number[]): number => {

    let curConsecutive:number = 0;
    let maxConsecutive:number = 0;

    for (let i:number = 0; i < nums.length; i++) {
        if(nums[i] === 1) {
            curConsecutive++;
        } else {
            maxConsecutive = Math.max(curConsecutive, maxConsecutive);
            curConsecutive = 0;
        }
    }

    return Math.max(maxConsecutive, curConsecutive);
    
};

// some test cases
console.log(findMaxConsecutiveOnes([1,1,0,1,1,1])); // 3
console.log(findMaxConsecutiveOnes([1,0,1,1,0,1])); // 2
console.log(findMaxConsecutiveOnes([1,1,1,1,0,1,0,1,0,1])); // 4