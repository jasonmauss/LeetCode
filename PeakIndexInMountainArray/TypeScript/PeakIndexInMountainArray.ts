// Solution for: https://leetcode.com/problems/peak-index-in-a-mountain-array/
const peakIndexInMountainArray = (arr: number[]): number => {
    
    let left = 0;
    let right = arr.length - 1;
    
    while (left < right) {
      const mid = Math.floor((left + right) / 2);
      if (arr[mid] < arr[mid + 1]) {
        left = mid + 1;
      } else {
        right = mid;
      }
    }
  
    return left;

};


// some test cases
console.log(peakIndexInMountainArray([0,1,0])); // 1
console.log(peakIndexInMountainArray([0,2,1,0])); // 1
console.log(peakIndexInMountainArray([0,10,5,2])); // 1
console.log(peakIndexInMountainArray([3,4,5,1])); // 2
console.log(peakIndexInMountainArray([24,69,100,99,79,78,67,36,26,19])); // 2