// Solution for: https://leetcode.com/problems/sort-even-and-odd-indices-independently/
var sortEvenOdd = function (nums) {
    var evenNums = [];
    var oddNums = [];
    for (var i = 0; i < nums.length; i++) {
        if (i % 2 === 0) {
            evenNums.push(nums[i]);
        }
        else {
            oddNums.push(nums[i]);
        }
    }
    // sort even index nums in ascending order
    if (evenNums.length > 0)
        evenNums.sort(function (a, b) { return a - b; });
    // sort odd index nums in descending order
    if (oddNums.length > 0)
        oddNums.sort(function (a, b) { return b - a; });
    var returnArray = [];
    while (evenNums.length > 0 || oddNums.length > 0) {
        if (evenNums.length > 0)
            returnArray.push(evenNums.shift());
        if (oddNums.length > 0)
            returnArray.push(oddNums.shift());
    }
    return returnArray;
};
// some tests
console.log(sortEvenOdd([4, 1, 2, 3])); // [2,3,4,1]
console.log(sortEvenOdd([2, 1])); // [2,1]
