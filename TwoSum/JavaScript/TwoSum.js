// Solution for https://leetcode.com/problems/two-sum/
function twoSum(nums, target) {
    var outputNums = [];
    for (var firstNum = 0; firstNum < nums.length; firstNum++) {
        if (outputNums.length)
            break;
        var currentNum = nums[firstNum];
        for (var secondNum = firstNum + 1; secondNum < nums.length; secondNum++) {
            if (currentNum + nums[secondNum] === target) {
                outputNums.push(firstNum, secondNum);
                break;
            }
        }
    }
    return outputNums;
}