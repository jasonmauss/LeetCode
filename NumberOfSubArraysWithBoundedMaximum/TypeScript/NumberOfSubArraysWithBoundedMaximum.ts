// Solution for: https://leetcode.com/problems/number-of-subarrays-with-bounded-maximum/
const numSubarrayBoundedMax = (nums: number[], left: number, right: number): number => {

    let prevHigh = -1, sum = 0, prev = 0;
     
    for(let i = 0; i < nums.length; i++) {
        
        if(nums[i] >= left && nums[i] <= right) {
            prev = i - prevHigh;
        } else if(nums[i] > right){
            prev = 0;
            prevHigh = i;
        }
        
        sum += prev;
    }
    
    return sum;

};



// some test cases
console.log(numSubarrayBoundedMax([2,1,4,3], 2, 3)); // 3
console.log(numSubarrayBoundedMax([2,9,2,5,6], 2, 8)); // 7