// Solution for: https://leetcode.com/problems/reverse-integer/
function reverse(x) {
    var negative = x < 0;
    x = parseInt(String(Math.abs(x)).split("").reverse().join(""));
    return x > 0x7FFFFFFF ? 0 : negative ? -x : x;
}
;
// test cases
console.log(reverse(123)); // 321
console.log(reverse(-123)); // -321
