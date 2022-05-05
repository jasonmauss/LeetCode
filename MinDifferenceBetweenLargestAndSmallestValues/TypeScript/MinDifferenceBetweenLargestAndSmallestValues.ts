// Solution for: https://leetcode.com/problems/minimum-difference-between-largest-and-smallest-value-in-three-moves/
const minDifference = (nums: number[]): number => {
    
    let min = Infinity;
    nums.sort((a, b) => a - b);
    let n = nums.length,
        i = 0,
        j = n - 4; // -4 since n - 1 is the last element and we want to exclude 3 elements, thus n - 1 - 3 == n - 4
    while (0 <= j && j < n)
		min = Math.min(min, nums[j++] - nums[i++]); // slide window by 3
    return min < Infinity ? min : 0;

};



// some test cases
console.log(minDifference([5,3,2,4])); // 0
console.log(minDifference([1,5,0,10,14])); // 1