// Solution for: https://leetcode.com/problems/special-binary-string/
var makeLargestSpecial = function (s) {
    var recurse = function (s) {
        var i = 0;
        var result = [];
        var bal = 0;
        for (var j = 0; j < s.length; j++) {
            if (s[j] === '1')
                bal++;
            else
                bal--;
            if (bal === 0) {
                result.push('1' + recurse(s.slice(i + 1, j)) + '0');
                i = j + 1;
            }
        }
        result.sort(function (a, b) { return b.localeCompare(a); });
        return result.join('');
    };
    return recurse(s);
};
// some test cases
console.log(makeLargestSpecial("11011000")); // "11100100"
console.log(makeLargestSpecial("10")); // "10"
