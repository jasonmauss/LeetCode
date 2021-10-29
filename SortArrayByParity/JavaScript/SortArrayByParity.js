// Solution for: https://leetcode.com/problems/sort-array-by-parity/
function sortArrayByParity(nums) {
    var returnValues = nums.filter(function (number) { return number % 2 === 0; });
    returnValues.push.apply(returnValues, nums.filter(function (number) { return number % 2 !== 0; }));
    return returnValues;
}
;
// some test cases
console.log(sortArrayByParity([3, 1, 2, 4])); // [2,4,3,1]
console.log(sortArrayByParity([0])); // [0]
