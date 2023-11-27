// Solution for: https://leetcode.com/problems/sort-an-array/
var sortArray = function (nums) {
    var temp = new Array(nums.length);
    mergeSort(nums, temp, 0, nums.length - 1);
    return nums;
};
var mergeSort = function (nums, temp, left, right) {
    if (left < right) {
        var mid = Math.floor((left + right) / 2);
        mergeSort(nums, temp, left, mid);
        mergeSort(nums, temp, mid + 1, right);
        merge(nums, temp, left, mid, right);
    }
};
var merge = function (nums, temp, left, mid, right) {
    var i = left;
    var j = mid + 1;
    var k = left;
    while (i <= mid && j <= right) {
        if (nums[i] <= nums[j]) {
            temp[k++] = nums[i++];
        }
        else {
            temp[k++] = nums[j++];
        }
    }
    while (i <= mid) {
        temp[k++] = nums[i++];
    }
    while (j <= right) {
        temp[k++] = nums[j++];
    }
    for (var m = left; m <= right; m++) {
        nums[m] = temp[m];
    }
};
// some tests
console.log(sortArray([5, 2, 3, 1])); // [1, 2, 3, 5]
console.log(sortArray([5, 1, 1, 2, 0, 0])); // [0, 0, 1, 1, 2, 5]
