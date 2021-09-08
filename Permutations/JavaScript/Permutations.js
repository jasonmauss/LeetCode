var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
// Solution for: https://leetcode.com/problems/permutations/
function permute(nums) {
    var results = [];
    var assemble = function (numbers) {
        if (numbers.length === nums.length) {
            results.push(numbers);
            return;
        }
        for (var i = 0; i < nums.length; i++) {
            if (!numbers.includes(nums[i])) {
                assemble(__spreadArray(__spreadArray([], numbers), [nums[i]]));
            }
        }
    };
    assemble([]);
    return results;
}
;
// some test cases
console.log(permute([1, 2, 3])); // [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]
console.log(permute([1, 2, 3, 4])); // [[1,2,3,4],[1,2,4,3],[1,3,2,4],[1,3,4,2],[1,4,3,2],[1,4,2,3]
// ,[2,3,4,1],[2,3,1,4],[2,1,3,4],[2,1,4,3],[2,4,3,1],[2,4,1,3]
// ,[3,4,1,2],[3,4,2,1],[3,1,2,4],[3,1,4,2],[3,2,1,4],[3,2,4,1]
// ,[4,1,2,3],[4,1,3,2],[4,2,1,3],[4,2,3,1],[4,3,1,2],[4,3,2,1]
//]
console.log(permute([0, 1])); // [[0,1],[1,0]]
console.log(permute([1])); // [[1]]
