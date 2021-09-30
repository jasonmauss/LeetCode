// Solution for: https://leetcode.com/problems/maximum-69-number/
var maximum69Number = function (num) {
    return Number(num.toString().replace('6', '9'));
};
// some test cases
console.log(maximum69Number(9669)); //  9969
console.log(maximum69Number(9996)); //  9999
console.log(maximum69Number(9999)); //  9999
console.log(maximum69Number(99996969)); //  99999969
