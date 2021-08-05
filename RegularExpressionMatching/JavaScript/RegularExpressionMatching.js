// Solution for: https://leetcode.com/problems/regular-expression-matching/
function isMatch(s, p) {
    var match = s.match(p);
    return (match) ? (match && s === match[0]) : false;
}
;
// some test cases
console.log(isMatch('aa', 'a')); // false
console.log(isMatch('aa', 'a*')); // true
console.log(isMatch('ab', '.*')); // true
console.log(isMatch('aab', 'c*a*b')); // true
console.log(isMatch('mississippi', 'mis*is*p*.')); // false
