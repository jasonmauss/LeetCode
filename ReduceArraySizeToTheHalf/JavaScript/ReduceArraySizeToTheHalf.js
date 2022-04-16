// Solution for: https://leetcode.com/problems/reduce-array-size-to-the-half/
const minSetSize = (arr) => {
    const map = new Map();
    for (const num of arr) {
        map.set(num, (map.get(num) || 0) + 1);
    }
    const countPairs = [...map].sort((a, b) => b[1] - a[1]);
    const target = arr.length / 2;
    let index = 0;
    let counts = 0;
    let sum = 0;
    while (sum < target) {
        sum += countPairs[index++][1];
        counts++;
    }
    return counts;
};
// some test cases
console.log(minSetSize([3, 3, 3, 3, 5, 5, 5, 2, 2, 7])); // 2
console.log(minSetSize([7, 7, 7, 7, 7, 7])); // 1
