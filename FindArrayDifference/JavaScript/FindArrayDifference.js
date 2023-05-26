// Solution for: https://leetcode.com/problems/find-the-difference-of-two-arrays/
const findDifference = (nums1, nums2) => {
    const differences = [];
    const answer0 = [];
    const answer1 = [];
    for (let num of nums1) {
        if (!nums2.includes(num) && !answer0.includes(num)) {
            answer0.push(num);
        }
    }
    for (let num of nums2) {
        if (!nums1.includes(num) && !answer1.includes(num)) {
            answer1.push(num);
        }
    }
    differences.push(answer0);
    differences.push(answer1);
    return differences;
};
// some test cases
console.log(findDifference([1, 2, 3], [2, 4, 6])); // [[1,3],[4,6]]
console.log(findDifference([1, 2, 3, 3], [1, 1, 2, 2])); // [[3],[]]
