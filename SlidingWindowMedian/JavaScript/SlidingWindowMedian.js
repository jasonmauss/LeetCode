// Solution for: https://leetcode.com/problems/sliding-window-median/
const binaryInsertion = (arr, target) => {
    let left = 0;
    let right = arr.length;
    while (left < right) {
        const mid = (left + right) >> 1;
        if (target > arr[mid]) {
            left = mid + 1;
        }
        else {
            right = mid;
        }
    }
    arr.splice(left, 0, target);
};
const binaryDeletion = (arr, target) => {
    let left = 0;
    let right = arr.length;
    while (left < right) {
        const mid = (left + right) >> 1;
        if (target === arr[mid]) {
            arr.splice(mid, 1);
            break;
        }
        else if (target > arr[mid]) {
            left = mid + 1;
        }
        else {
            right = mid;
        }
    }
};
const medianSlidingWindow = (nums, k) => {
    const arr = [];
    const output = [];
    const isEven = k % 2 === 0;
    const m = k >> 1;
    for (let i = 0; i < nums.length; i++) {
        binaryInsertion(arr, nums[i]);
        if (arr.length > k) {
            binaryDeletion(arr, nums[i - k]);
        }
        if (arr.length === k) {
            output.push(isEven ? (arr[m - 1] + arr[m]) / 2 : arr[m]);
        }
    }
    return output;
};
// some test cases
console.log(medianSlidingWindow([1, 3, -1, -3, 5, 3, 6, 7], 3)); // [1.00000,-1.00000,-1.00000,3.00000,5.00000,6.00000]
console.log(medianSlidingWindow([1, 2, 3, 4, 2, 3, 1, 4, 2], 3)); // [2.00000,3.00000,3.00000,3.00000,2.00000,3.00000,2.00000]
