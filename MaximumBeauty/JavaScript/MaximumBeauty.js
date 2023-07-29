// Solution for: https://leetcode.com/problems/maximum-beauty-of-an-array-after-applying-operation
function maximumBeauty(nums, k) {
    nums.sort((a, b) => a - b);
    let begin = 0;
    let result = 0;
    for (let i = 0; i < nums.length; i++) {
        while (nums[i] - nums[begin] > 2 * k) {
            begin++;
        }
        result = Math.max(result, i - begin + 1);
    }
    return result;
}
;
// some test cases
console.log(maximumBeauty([4, 6, 1, 2], 2)); // 3
console.log(maximumBeauty([1, 1, 1, 1], 10)); // 4
