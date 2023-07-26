// Solution for: https://leetcode.com/problems/longest-non-decreasing-subarray-from-two-arrays/
const maxNonDecreasingLength = (nums1: number[], nums2: number[]): number => {

    let longestNums1 = 0;
    let longestNums2 = 0;
    let result = 1;

    for(let i = 0; i < nums1.length; i++) {
        const option1 = nums1[i] >= nums1[i - 1] ? longestNums1 + 1 : 1;
        const option2 = nums2[i] >= nums1[i - 1] ? longestNums1 + 1 : 1;
        const option3 = nums1[i] >= nums2[i - 1] ? longestNums2 + 1 : 1;
        const option4 = nums2[i] >= nums2[i - 1] ? longestNums2 + 1 : 1;

        longestNums1 = Math.max(option1, option3);
        longestNums2 = Math.max(option2, option4);

        result = Math.max(result, longestNums1, longestNums2);
    }

    return result;

};




// some test cases
console.log(maxNonDecreasingLength([2,3,1], [1,2,1])); // 2
console.log(maxNonDecreasingLength([1,3,2,1], [2,2,3,4])); // 4
console.log(maxNonDecreasingLength([1,1], [2,2])); // 2