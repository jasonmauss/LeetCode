// Solution for: https://leetcode.com/problems/multiply-strings/
var multiply = function (num1, num2) {
    var num1Length = num1.length;
    var num2Length = num2.length;
    var returnValue = new Array(num1Length + num2Length).fill(0);
    for (var i = num1Length - 1; i >= 0; i--) {
        for (var j = num2Length - 1; j >= 0; j--) {
            var mul = (num1.charCodeAt(i) - '0'.charCodeAt(0)) * (num2.charCodeAt(j) - '0'.charCodeAt(0));
            var sum = mul + returnValue[i + j + 1];
            returnValue[i + j] += Math.floor(sum / 10);
            returnValue[i + j + 1] = sum % 10;
        }
    }
    var returnString = '';
    for (var _i = 0, returnValue_1 = returnValue; _i < returnValue_1.length; _i++) {
        var digit = returnValue_1[_i];
        if (!(returnString === '' && digit === 0)) {
            returnString += digit;
        }
    }
    return returnString === '' ? '0' : returnString;
};
// some test cases
console.log(multiply('2', '3')); // '6'
console.log(multiply('123', '456')); // '56088'
