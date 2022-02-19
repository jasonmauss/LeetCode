// Solution for: https://leetcode.com/problems/equal-sum-arrays-with-minimum-number-of-operations/
const minOperations = (nums1: number[], nums2: number[]): number => {

    if(nums1.length * 6 < nums2.length || nums2.length * 6 < nums1.length) return -1;

    let one = nums1.reduce((a, b) => a + b);
    let two = nums2.reduce((a, b) => a + b);

    if(two > one) {
        [one, two] = [two, one];
        [nums1, nums2] = [nums2, nums1];
    }

    nums1.sort((a, b) => b - a);
    nums2.sort((a, b) => a - b);

    let i = 0, j = 0;

    while(one > two) {
        if(nums1[i] - 1 > 6 - nums2[j] || j === nums2.length) {
            one -= nums1[i] -1;
            i++;
        } else {
            two += 6 - nums2[j];
            j++;
        }
    }

    return i + j;

};


// some test cases
console.log(minOperations([1,2,3,4,5,6], [1,1,2,2,2,2])); // 3
console.log(minOperations([1,1,1,1,1,1,1], [6])); // -1
console.log(minOperations([6,6], [1])); // 3
