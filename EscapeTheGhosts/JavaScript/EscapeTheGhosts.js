// Solution for: https://leetcode.com/problems/escape-the-ghosts/
var escapeGhosts = function (ghosts, target) {
    var movesToEscape = function (arr) {
        return Math.abs(target[0] - arr[0]) + Math.abs(target[1] - arr[1]);
    };
    for (var i = 0; i < ghosts.length; i++) {
        if (movesToEscape(ghosts[i]) <= movesToEscape([0, 0])) {
            return false;
        }
    }
    return true;
};
// some test cases
console.log(escapeGhosts([[1, 0], [0, 3]], [0, 1])); // true
console.log(escapeGhosts([[1, 0]], [2, 0])); // false
console.log(escapeGhosts([[2, 0]], [1, 0])); // false
