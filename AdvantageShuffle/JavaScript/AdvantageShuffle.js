// Solution for: https://leetcode.com/problems/advantage-shuffle/
const advantageCount = (nums1, nums2) => {
    nums1.sort((a, b) => a - b);
    const sortedNums2 = [...nums2].sort((a, b) => b - a);
    const wins = new Map();
    for (const n of sortedNums2) {
        if (n < nums1[nums1.length - 1]) {
            if (!wins.has(n)) {
                wins.set(n, [nums1.pop()]);
            }
            else {
                wins.get(n).push(nums1.pop());
            }
        }
    }
    const result = [];
    for (const b of nums2) {
        result.push(wins.has(b) && wins.get(b).length > 0 ? wins.get(b).pop() : nums1.pop());
    }
    return result;
};
// some test cases
console.log(advantageCount([2, 7, 11, 15], [1, 10, 4, 11])); // [2,11,7,15]
console.log(advantageCount([12, 24, 8, 32], [13, 25, 32, 11])); // [24,32,8,12]
