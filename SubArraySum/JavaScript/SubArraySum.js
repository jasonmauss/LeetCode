// Solution for: https://leetcode.com/problems/subarray-sum-equals-k/
const subarraySum = (nums, k) => {
    let count = 0;
    let hashMap = new Map();
    let currSum = 0;
    for (let i = 0; i < nums.length; i++) {
        currSum += nums[i];
        if (currSum === k) {
            count += 1;
        }
        count += hashMap.get(currSum - k) || 0;
        hashMap.set(currSum, (hashMap.get(currSum) || 0) + 1);
    }
    return count;
};
// some test cases
console.log(subarraySum([1, 1, 1], 2)); // 2
console.log(subarraySum([1, 2, 3], 3)); // 2
console.log(subarraySum([1, 2, 3, 6, 6], 12)); // 2
console.log(subarraySum([1, 2, 2, 3, 3], 6)); // 1
