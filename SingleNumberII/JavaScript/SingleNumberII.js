// Solution for: https://leetcode.com/problems/single-number-ii/
var singleNumber = function (nums) {
    var countsArray = [];
    var _loop_1 = function (num) {
        var potentiallyExistingObject = countsArray.find(function (obj) { return obj.id === num; });
        if (potentiallyExistingObject) {
            potentiallyExistingObject.value += 1;
        }
        else {
            countsArray.push({ id: num, value: 1 });
        }
    };
    for (var _i = 0, nums_1 = nums; _i < nums_1.length; _i++) {
        var num = nums_1[_i];
        _loop_1(num);
    }
    return countsArray.find(function (obj) { return obj.value === 1; }).id;
};
// some test cases
console.log(singleNumber([2, 2, 3, 2])); // 3
console.log(singleNumber([0, 1, 0, 1, 0, 1, 99])); // 99
