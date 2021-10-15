// Solution for: https://leetcode.com/problems/kth-missing-positive-number/
var findKthPositive = function (arr, k) {
    var index = 0;
    var last = 0;
    var i = 0;
    var map = new Map();
    arr.forEach(function (d) {
        map.set(d, true);
    });
    while (index !== k) {
        var next = i + 1;
        if (!map.has(next)) {
            index++;
            last = next;
        }
        i++;
    }
    return last;
};
// some test cases
console.log(findKthPositive([2, 3, 4, 7, 11], 5)); // 9
console.log(findKthPositive([1, 2, 3, 4], 2)); // 6
