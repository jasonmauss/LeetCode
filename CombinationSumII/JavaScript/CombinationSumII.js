// Solution for: https://leetcode.com/problems/combination-sum-ii/
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var combinationSum2 = function (candidates, target) {
    // Sort the numbers so we can count on them being in non-descending order
    candidates.sort(function (a, b) { return a - b; });
    // This will hold the result that will get returned
    var combinations = [];
    // This will hold potential combinations as we iterate
    var potentialNums = [];
    // Here is the our recursive backtracking function. We could break this out into a scope
    // that's outside this enclosing function but then we'd have to put some other variables
    // into the global scope. :(
    var backtrack = function (startingIndex, currentSum) {
        if (startingIndex === void 0) { startingIndex = 0; }
        if (currentSum === void 0) { currentSum = 0; }
        // Add numbers to potentialNums array until we find the sum meets or exceeds the target.
        // Here handle the case when it meets the target - push the combination of values to the
        // result that will be returned.
        if (currentSum === target) {
            combinations.push(__spreadArray([], potentialNums, true));
            return;
        }
        // Here, loop through the numbers until we find the combination exceeds the target.
        // When it does, break out of the loop which should cause previous calls to this function
        // to pop the previous value off the stack of potential numbers and then move ahead with
        // trying the next number in the candidates array.
        for (var i = startingIndex; i < candidates.length; i++) {
            // Skip duplicate numbers to start the potential nums array with
            if (startingIndex < i && candidates[i] === candidates[i - 1])
                continue;
            // We know we are done if the next value causes the sum to exceed the target value. 
            if (currentSum + candidates[i] > target)
                break;
            // The current sum + current number doesn't exceed the target, so add it to the potential nums
            // and call this function again with the next starting index and new currentSum value
            potentialNums.push(candidates[i]);
            backtrack(i + 1, currentSum + candidates[i]);
            // .pop here means a previous recursive iteration has returned execution to here because the previous
            // value + currentSum was found to exceed the target value, so remove it and try out remaining values from candidates array.
            potentialNums.pop();
        }
    };
    // call this with no values to kick off the recursion process.
    backtrack();
    return combinations;
};
// some test cases
console.log(combinationSum2([10, 1, 2, 7, 6, 1, 5], 8)); /*
[
[1,1,6],
[1,2,5],
[1,7],
[2,6]
]

*/
console.log(combinationSum2([2, 5, 2, 1, 2], 5)); /*
[
[1,2,2],
[5]
]

*/
