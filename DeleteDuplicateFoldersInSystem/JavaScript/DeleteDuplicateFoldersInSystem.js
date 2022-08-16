// Solution for: https://leetcode.com/problems/delete-duplicate-folders-in-system/
const deleteDuplicateFolder = (paths) => {
    return [''][''];
};
// some test cases
console.log(deleteDuplicateFolder([["a"], ["c"], ["d"], ["a", "b"], ["c", "b"], ["d", "a"]])); // [["d"],["d","a"]]
console.log(deleteDuplicateFolder([["a"], ["c"], ["a", "b"], ["c", "b"], ["a", "b", "x"], ["a", "b", "x", "y"], ["w"], ["w", "y"]])); // [["c"],["c","b"],["a"],["a","b"]]
console.log(deleteDuplicateFolder([["a", "b"], ["c", "d"], ["c"], ["a"]])); // [["c"],["c","d"],["a"],["a","b"]]
