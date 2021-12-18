// Solution for: https://leetcode.com/problems/count-number-of-pairs-with-absolute-difference-k/
var countKDifference = function (nums, k) {
    var pairs = 0;
    for (var i = 0; i < nums.length; i++) {
        var curNumber1 = nums[i];
        for (var j = i + 1; j < nums.length; j++) {
            var curNumber2 = nums[j];
            if (Math.abs(Math.abs(curNumber1) - Math.abs(curNumber2)) === k)
                pairs++;
        }
    }
    return pairs;
};
// some test cases
console.log(countKDifference([1, 2, 2, 1], 1)); // 4
console.log(countKDifference([1, 3], 3)); // 0
console.log(countKDifference([3, 2, 1, 5, 4], 2)); // 3
