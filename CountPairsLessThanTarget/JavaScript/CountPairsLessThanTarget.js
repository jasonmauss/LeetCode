// Solution for: https://leetcode.com/problems/count-pairs-whose-sum-is-less-than-target/
const countPairs = (nums, target) => {
    let pairCount = 0;
    for (let i = 0; i < nums.length; i++) {
        let firstNum = nums[i];
        for (let j = i + 1; j < nums.length; j++) {
            if (firstNum + nums[j] < target)
                pairCount++;
        }
    }
    return pairCount;
};
// some test cases
console.log(countPairs([-1, 1, 2, 3, 1], 2)); // 3
console.log(countPairs([-6, 2, 5, -2, -7, -1, 3], -2)); // 10
