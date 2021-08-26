// Solution for: https://leetcode.com/problems/remove-duplicates-from-sorted-array/
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
// several ways to do this - a longer way, going left to right:
var removeDuplicates = function (nums) {
    var valueSet = new Set();
    for (var i = 0; i < nums.length; i++) {
        if (nums[i] > -999) {
            if (valueSet.has(nums[i])) {
                nums.splice(i, 1);
                nums.push(-999);
                i = i - 1;
            }
            else {
                valueSet.add(nums[i]);
            }
        }
        else {
            break;
        }
    }
    return valueSet.size;
};
// going right to left (faster)
var removeDuplicates2 = function (nums) {
    for (var i = nums.length - 1; i > 0; i--) {
        if (nums[i] === nums[i - 1]) {
            nums.splice(i, 1);
        }
    }
    return nums.length;
};
// one-liner with destructuring syntax (fastest)
var removeDuplicates3 = function (nums) {
    return nums.splice.apply(nums, __spreadArray([0, nums.length], __read((new Set(nums))))).length;
};
// some test cases
console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4])); // 5, [0,1,2,3,4,_,_,_,_,_]
console.log(removeDuplicates([1, 1, 2])); // 2, [1,2,_]
