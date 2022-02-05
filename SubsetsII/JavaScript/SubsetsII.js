// Solution for: https://leetcode.com/problems/subsets-ii/
const subsetsWithDup = (nums) => {
    nums = nums.sort((a, b) => a - b);
    let starts = new Array(nums.length).fill(0);
    let result = [[]];
    for (let i = 0; i < nums.length; i++) {
        let size = result.length;
        starts[i] = size;
        let j = (i > 0 && nums[i] == nums[i - 1]) ? starts[i - 1] : 0;
        while (j < size) {
            result.push([...result[j], nums[i]]);
            j++;
        }
    }
    return result;
};
// some test cases
console.log(subsetsWithDup([1, 2, 2])); // [[],[1],[1,2],[1,2,2],[2],[2,2]]
console.log(subsetsWithDup([0])); // [[],[0]]
