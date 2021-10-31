// Solution for: https://leetcode.com/problems/number-of-equivalent-domino-pairs/
function numEquivDominoPairs(dominoes) {
    var dominoMap = new Map();
    var pairCount = 0;
    for (var _i = 0, dominoes_1 = dominoes; _i < dominoes_1.length; _i++) {
        var _a = dominoes_1[_i], a = _a[0], b = _a[1];
        var key = a < b ? "" + a + b : "" + b + a;
        if (dominoMap.has(key)) {
            var currentIndex = dominoMap.get(key) + 1;
            dominoMap.set(key, currentIndex);
            pairCount += currentIndex;
        }
        else {
            dominoMap.set(key, 0);
        }
    }
    return pairCount;
}
;
// some test cases
console.log(numEquivDominoPairs([[1, 2], [2, 1], [3, 4], [5, 6]])); // 1
console.log(numEquivDominoPairs([[1, 2], [1, 2], [1, 1], [1, 2], [2, 2]])); // 3
console.log(numEquivDominoPairs([[3, 4], [4, 3], [1, 1], [2, 2], [2, 2]])); // 2
