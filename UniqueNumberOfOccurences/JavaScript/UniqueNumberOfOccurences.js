// Solution for: https://leetcode.com/problems/unique-number-of-occurrences/
var uniqueOccurrences = function (arr) {
    var occurrenceMap = new Map();
    for (var i = 0; i < arr.length; i++) {
        if (occurrenceMap.has(arr[i])) {
            occurrenceMap.set(arr[i], occurrenceMap.get(arr[i]) + 1);
        }
        else {
            occurrenceMap.set(arr[i], 1);
        }
    }
    return occurrenceMap.size === new Set(occurrenceMap.values()).size;
};
// some test cases
console.log(uniqueOccurrences([1, 2, 2, 1, 1, 3])); // true
console.log(uniqueOccurrences([1, 2])); // false
console.log(uniqueOccurrences([-3, 0, 1, -3, 1, 1, 1, -3, 10, 0])); // true
