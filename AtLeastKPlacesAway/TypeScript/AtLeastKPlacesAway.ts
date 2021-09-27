// Solution for: https://leetcode.com/problems/check-if-all-1s-are-at-least-length-k-places-away/
const kLengthApart = (nums: number[], k: number): boolean => {

    if(k === 0) return true;

    for (let i:number = 0; i < nums.length; i++) {
        if(nums[i] === 1) {
            for(let j:number = 1; j <= k && i + j < nums.length; j++) {
                if(nums[i + j] !== 0) return false;
            }
            i += k;
        }
        
    }

    return true;
};



// some test cases
console.log(kLengthApart([1,0,0,1,0,1], 2)); // false
console.log(kLengthApart([1,0,0,0,1,0,0,1], 2)); // true
console.log(kLengthApart([1,1,1,1,1], 0)); // true
console.log(kLengthApart([0,1,0,1], 1)); // true