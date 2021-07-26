// Solution for https://leetcode.com/problems/two-sum/

function twoSum(nums: number[], target: number): number[] {
    let outputNums: number[] = [];
    for(let firstNum = 0; firstNum < nums.length; firstNum++) {
        if(outputNums.length) break;
        let currentNum = nums[firstNum];
        for(let secondNum = firstNum + 1; secondNum < nums.length; secondNum++) {
            if(currentNum + nums[secondNum] === target) {
                outputNums.push(firstNum, secondNum);
                break;
            }
        }
    }
    return outputNums;
}