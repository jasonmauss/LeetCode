// Solution for: https://leetcode.com/problems/two-out-of-three/
const twoOutOfThree = (nums1, nums2, nums3) => {
    // check if arr2/arr3 contains numbers from arr1
    const arr1 = nums1.filter(num => {
        return nums2.includes(num) || nums3.includes(num) ? true : false;
    });
    // check if arr1/arr3 contains numbers from arr2
    const arr2 = nums2.filter(num => {
        return nums1.includes(num) || nums3.includes(num) ? true : false;
    });
    // concat the array and put it into a set as there will be overlapping values, and then return the set into Array form
    return Array.from(new Set(arr1.concat(arr2)));
};
// some test cases
console.log(twoOutOfThree([1, 1, 3, 2], [2, 3], [3])); // [3,2]
console.log(twoOutOfThree([3, 1], [2, 3], [1, 2])); // [1,2]
console.log(twoOutOfThree([1, 2, 2], [4, 3, 3], [5])); // [5]
