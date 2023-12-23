// Solution for: https://leetcode.com/problems/sort-array-by-increasing-frequency/
const frequencySort = (nums) => {
    const frequencyMap = new Map();
    const frequencySortedArray = [];
    for (let num of nums) {
        frequencyMap.set(num, (frequencyMap.get(num) || 0) + 1);
    }
    const sortedFrequency = [...frequencyMap.entries()].sort((a, b) => {
        if (a[1] != b[1]) {
            return a[1] - b[1];
        }
        return b[0] - a[0];
    });
    for (let item of sortedFrequency) {
        for (let i = 0; i < item[1]; ++i) {
            frequencySortedArray.push(item[0]);
        }
    }
    return frequencySortedArray;
};
// some tests
console.log(frequencySort([1, 1, 2, 2, 2, 3])); // [3,1,1,2,2,2]
console.log(frequencySort([2, 3, 1, 3, 2])); // [1,3,3,2,2]
console.log(frequencySort([-1, 1, -6, 4, 5, -6, 1, 4, 1])); // [5,-1,4,4,-6,-6,1,1,1]
