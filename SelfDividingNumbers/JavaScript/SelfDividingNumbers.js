// Solution for: https://leetcode.com/problems/self-dividing-numbers/
var selfDividingNumbers = function (left, right) {
    var numberIsSelfDividing = function (value) {
        var num = value;
        while (value > 0) {
            if (num % (value % 10) !== 0)
                return false;
            value = Math.floor(value / 10);
        }
        return true;
    };
    var result = [];
    for (var i = left; i <= right; i++) {
        if (numberIsSelfDividing(i))
            result.push(i);
    }
    return result;
};
// some test cases
console.log(selfDividingNumbers(1, 22)); // [1,2,3,4,5,6,7,8,9,11,12,15,22]
console.log(selfDividingNumbers(47, 85)); // [48,55,66,77]
