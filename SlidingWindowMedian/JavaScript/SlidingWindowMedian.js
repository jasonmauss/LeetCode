// Solution for: https://leetcode.com/problems/sliding-window-median/
const findMedian = (arr) => {
    // get copy of the original array
    const a = arr.slice();
    // sort it
    a.sort((a, b) => a - b);
    const n = a.length;
    const middle = a[Math.floor(n / 2)];
    // find the mean based on length of the array of numbers
    if ((n & 1) !== 0) {
        return middle;
    }
    else {
        return (Math.floor(a[Math.floor((n - 1) / 2)] + middle) / 2);
    }
};
const medianSlidingWindow = (nums, k) => {
    if (!nums.length) {
        return [];
    }
    // find the median of the first window
    const firstSlided = nums.slice(0, k);
    let medians = [findMedian(firstSlided)];
    for (let i = k; i < nums.length; i++) {
        const slidingWindowArray = nums.slice(i - k + 1, i + 1);
        medians.push(findMedian(slidingWindowArray));
    }
    return medians;
};
// some test cases
console.log(medianSlidingWindow([1, 3, -1, -3, 5, 3, 6, 7], 3)); // [1.00000,-1.00000,-1.00000,3.00000,5.00000,6.00000]
console.log(medianSlidingWindow([1, 2, 3, 4, 2, 3, 1, 4, 2], 3)); // [2.00000,3.00000,3.00000,3.00000,2.00000,3.00000,2.00000]
