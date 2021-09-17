// Solution for: https://leetcode.com/problems/maximum-product-of-three-numbers/
var maximumProduct = function (nums) {
    if (nums.length === 3)
        return nums[0] * nums[1] * nums[2];
    var min1 = Number.MAX_SAFE_INTEGER, min2 = Number.MAX_SAFE_INTEGER;
    var max1 = Number.MIN_SAFE_INTEGER, max2 = Number.MIN_SAFE_INTEGER, max3 = Number.MIN_SAFE_INTEGER;
    for (var i = 0; i < nums.length; i++) {
        var val = nums[i];
        if (val <= min1) {
            min2 = min1;
            min1 = val;
        }
        else if (val <= min2) {
            min2 = val;
        }
        if (val >= max1) {
            max3 = max2;
            max2 = max1;
            max1 = val;
        }
        else if (val >= max2) {
            max3 = max2;
            max2 = val;
        }
        else if (val >= max3) {
            max3 = val;
        }
    }
    return Math.max(min1 * min2 * max1, max1 * max2 * max3);
};
// Some test cases
console.log(maximumProduct([1, 2, 3])); // 6
console.log(maximumProduct([1, 2, 3, 4])); // 24
console.log(maximumProduct([-1, -2, -3])); // -6
console.log(maximumProduct([1, 2, 5, 7, 3])); // 105
console.log(maximumProduct([-1, -2, -3, -4])); // -6
