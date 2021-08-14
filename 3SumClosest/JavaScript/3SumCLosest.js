// Solution for:  https://leetcode.com/problems/3sum-closest/
var threeSumClosest = function (nums, target) {
    var output = nums[0] + nums[1] + nums[2];
    var difference = getDifference(output, target);
    var triplets = [nums[0], nums[1], nums[2]];
    if (nums.length > 3) {
        for (var i = 0; i < nums.length - 2; i++) {
            for (var j = i + 1; j < nums.length - 1; j++) {
                triplets.splice(0, 1, nums[i]);
                triplets.splice(1, 1, nums[j]);
                for (var k = j + 1; k < nums.length; k++) {
                    triplets.splice(2, 1, nums[k]);
                    if (difference > getDifference(triplets[0] + triplets[1] + triplets[2], target)) {
                        output = triplets[0] + triplets[1] + triplets[2];
                        difference = getDifference(output, target);
                        if (difference === 0)
                            return output;
                    }
                }
            }
        }
    }
    return output;
};
var getDifference = function (number1, number2) {
    return Math.abs(number1 - number2);
};
// another way to do it (slightly faster)
function threeSumClosest2(nums, target) {
    nums.sort(function (a, b) { return a - b; });
    var res = nums.slice(0, 3).reduce(function (a, b) { return a + b; }, 0);
    for (var i = 0; i < nums.length; i++) {
        var l = i + 1;
        var r = nums.length - 1;
        while (l < r) {
            if (Math.abs(nums[i] + nums[l] + nums[r] - target) < Math.abs(res - target)) {
                res = nums[i] + nums[l] + nums[r];
            }
            if (nums[i] + nums[l] + nums[r] < target) {
                l++;
            }
            else if (nums[i] + nums[l] + nums[r] > target) {
                r--;
            }
            else {
                return res;
            }
        }
        console.log(res);
    }
    return res;
}
;
// a third (and probably best) way to do it using TwoSum to supplement
function twoSumClosest(nums, left, target) {
    var ans = null;
    var right = nums.length - 1;
    while (left < right) {
        var sum = nums[left] + nums[right];
        if (ans === null || Math.abs(target - sum) < Math.abs(target - ans)) {
            ans = sum;
        }
        if (sum < target) {
            left++;
        }
        else {
            right--;
        }
    }
    return ans;
}
function threeSumClosest3(nums, target) {
    nums.sort(function (a, b) { return a - b; });
    var ans = null;
    for (var i = 0; i < nums.length - 2; i++) {
        var sum = nums[i] + twoSumClosest(nums, i + 1, target - nums[i]);
        if (ans === null || Math.abs(target - sum) < Math.abs(target - ans)) {
            ans = sum;
        }
    }
    return ans;
}
;
// some tests cases
console.log(threeSumClosest([1, 2, 4, 8, 16, 32, 64, 128], 82)); // 82
console.log(threeSumClosest([-1, 2, 1, -4], 1)); // 2 (-1, 2, 1)
console.log(threeSumClosest([0, 0, 0], 1)); // 0 (0,0,0)
console.log(threeSumClosest([7, 1, 3, 1, 2, 4], 5)); // 5 (1,3,1)
console.log(threeSumClosest([7, 1, 3, 1, 2, 4], 10)); // 10 (7,1,2)
