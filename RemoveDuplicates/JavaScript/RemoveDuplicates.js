// Solution for: https://leetcode.com/problems/remove-duplicates-from-sorted-array-ii/
const removeDuplicates = (nums) => {
    if (!nums.length)
        return 0;
    let k = 0;
    for (let i = 0; i < nums.length; i++) {
        if (k < 2 || nums[i] > nums[k - 2]) {
            nums[k] = nums[i];
            k++;
        }
    }
    return k;
};
// some test cases
console.log(removeDuplicates([1, 1, 1, 2, 2, 3])); // 5
console.log(removeDuplicates([0, 0, 1, 1, 1, 1, 2, 3, 3])); // 7
console.log(removeDuplicates([1, 1, 1])); // 2
console.log(removeDuplicates([1, 1, 2])); // 3
console.log(removeDuplicates([1, 2, 2])); // 3
