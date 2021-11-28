// Solution for: https://leetcode.com/problems/assign-cookies/
var findContentChildren = function (g, s) {
    g.sort(function (a, b) { return a - b; });
    s.sort(function (a, b) { return a - b; });
    var i = 0;
    s.forEach(function (element) {
        if (element >= g[i]) {
            i++;
        }
    });
    return i;
};
// some test cases
console.log(findContentChildren([1, 2, 3], [1, 1])); // 1
console.log(findContentChildren([1, 2], [1, 2, 3])); // 2
