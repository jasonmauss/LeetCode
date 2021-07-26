// Solution to https://leetcode.com/problems/median-of-two-sorted-arrays/

function findMedianSortedArrays(nums1: number[], nums2: number[]): number {

  // combine the two arrays with destructuring syntax
  let combinedNums: number[] = [...nums1, ...nums2];

  // arrow function to get the median value
  const median = (numsArray) => {
    const mid = Math.floor(numsArray.length / 2)
    const sortedNums = [...numsArray].sort((a, b) => a - b);
    return numsArray.length % 2 !== 0 ? sortedNums[mid] : (sortedNums[mid - 1] + sortedNums[mid]) / 2;
  };

  return median(combinedNums);

}

// A couple of tests to check the logic
console.log(findMedianSortedArrays([1,2],[3,4])); // 2.5
console.log(findMedianSortedArrays([1,2,3],[3,4,5])); // 3