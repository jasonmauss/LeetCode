// Solution for: https://leetcode.com/problems/array-of-doubled-pairs/
var canReorderDoubled = function (arr) {
    // sort the array to make our lives easier
    arr.sort(function (a, b) { return a - b; });
    // keep track of which numbers occur (key) and how many times (value)
    var numOccurenceMap = new Map();
    // go through the array and populate the map based on the values
    for (var _i = 0, arr_1 = arr; _i < arr_1.length; _i++) {
        var num = arr_1[_i];
        numOccurenceMap.set(num, (numOccurenceMap.get(num) || 0) + 1);
    }
    for (var _a = 0, arr_2 = arr; _a < arr_2.length; _a++) {
        var num = arr_2[_a];
        if (numOccurenceMap.has(num)) {
            // find the match, divide by 2 for negatives, multiply by 2 for positives
            var matchingPairNum = num >= 0 ? num * 2 : num / 2;
            // if it wasn't in the array, return false
            if (!numOccurenceMap.has(matchingPairNum)) {
                return false;
            }
            // decrement the map value by 1 for both the number and it's matching pair
            // if that made the value zero, remove it from the map
            for (var _b = 0, _c = [num, matchingPairNum]; _b < _c.length; _b++) {
                var key = _c[_b];
                numOccurenceMap.set(key, numOccurenceMap.get(key) - 1);
                if (numOccurenceMap.get(key) === 0) {
                    numOccurenceMap["delete"](key);
                }
            }
        }
    }
    return true;
};
// some test cases
console.log(canReorderDoubled([3, 1, 3, 6])); // false
console.log(canReorderDoubled([2, 1, 2, 6])); // false
console.log(canReorderDoubled([4, -2, 2, -4])); // true
