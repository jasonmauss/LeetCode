// Solution for: https://leetcode.com/problems/removing-minimum-and-maximum-from-array/
const minimumDeletions = (nums: number[]): number => {

    let l = nums.length;
    let min: number = 0;
    let max: number = 0;
    
    for (let i = 0; i < l; i++) {
        let n = nums[i];
        if (nums[min] > n) min = i;
        if (nums[max] < n) max = i;
    }
    
    let candidates: number[] = [];
    
    candidates.push(Math.max(min, max) + 1);
    candidates.push(l - Math.min(min, max))
    candidates.push((l - min) + max + 1)
    candidates.push((l - max) + min + 1)
    return candidates.sort((a, b) => a - b)[0];

};



// some test cases
console.log(minimumDeletions([2,10,7,5,4,1,8,6])); // 5
console.log(minimumDeletions([0,-4,19,1,8,-2,-3,5])); // 3
console.log(minimumDeletions([101])); // 1