// Solution for: https://leetcode.com/problems/add-digits/
var addDigits = function (num) {
    var digitString = num.toString();
    while (digitString.length > 1) {
        var sum = 0;
        for (var i = 0; i < digitString.length; i++) {
            sum += Number(digitString[i]);
        }
        digitString = sum.toString();
    }
    return Number(digitString);
};
// some test cases
console.log(addDigits(38)); // 2
console.log(addDigits(0)); // 0
