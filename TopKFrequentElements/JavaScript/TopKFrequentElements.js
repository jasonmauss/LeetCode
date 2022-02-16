// Solution for: https://leetcode.com/problems/top-k-frequent-elements/
var topKFrequent = function (nums, k) {
    var numsToFrequencyMap = {};
    for (var i = 0; i < nums.length; i++) {
        var elem = nums[i];
        if (numsToFrequencyMap[elem] !== undefined) {
            numsToFrequencyMap[elem] += 1;
        }
        else {
            numsToFrequencyMap[elem] = 1;
        }
    }
    var order = [];
    for (var key in numsToFrequencyMap) {
        var frequency = numsToFrequencyMap[key];
        order.push([Number(key), Number(frequency)]);
    }
    order.sort(function (a, b) { return b[1] - a[1]; });
    var res = [];
    for (var i = 0; i < k; i++) {
        var elem = order[i];
        var num = elem[0];
        res.push(num);
    }
    return res;
};
// some test cases
console.log(topKFrequent([1, 1, 1, 2, 2, 3], 2)); // [1,2]
console.log(topKFrequent([1], 1)); // [1]
