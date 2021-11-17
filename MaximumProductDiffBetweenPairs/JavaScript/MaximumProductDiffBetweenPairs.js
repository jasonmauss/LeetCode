// Solution for: https://leetcode.com/problems/maximum-product-difference-between-two-pairs/
var maxProductDifference = function (nums) {
    var largest = Math.max.apply(Math, nums);
    nums.splice(nums.indexOf(largest), 1);
    var secondLargest = Math.max.apply(Math, nums);
    var smallest = Math.min.apply(Math, nums);
    nums.splice(nums.indexOf(smallest), 1);
    var secondSmallest = Math.min.apply(Math, nums);
    return (largest * secondLargest) - (smallest * secondSmallest);
};
// some test cases
console.log(maxProductDifference([5, 6, 2, 7, 4])); // 34
console.log(maxProductDifference([4, 2, 5, 9, 7, 4, 8])); // 64
