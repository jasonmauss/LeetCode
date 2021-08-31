// Solution for: https://leetcode.com/problems/search-in-rotated-sorted-array/

// you could achieve this with a simple loop as shown below
// but this isn't really O(log n) runtime complexity and forces
// the code to loop through every value in the array potentially

// const search = (nums: number[], target: number): number => {
//     let previous = nums[0];
//     for (let i = 0 ; i < nums.length; i++) {
//         const current = nums[i];
//         if (current === target) return i;
//         if ( current < previous && target <= current) return -1;
//         previous = current;
//     }
//     return -1;
// };

// instead, the faster approach is to divide the array in half at the
// "mid" point, after which, at least one of the sub-arrays should
// always remain sorted. Then it becomes fairly simple: If one side is
// sorted, check if the target is within that sub-array, otherwise it's
// among the values in the other sub-array.
const search = (nums: number[], target: number): number => {

    let left: number = 0;
    let right: number = nums.length - 1;
    
    while (left <= right) {
        let midPoint = Math.floor((left + right) / 2);
        
        if (nums[midPoint] === target) {
            return midPoint;
        }
        
        // When dividing the rotated array into two halves, one will always be sorted.
        
        // Check if the left sub-array is sorted
        if (nums[left] <= nums[midPoint]) {

            if (nums[left] <= target && target <= nums[midPoint]) {
                // target is in the left sub-array
                right = midPoint - 1;
            } else {
                // target is in the right sub-array
                left = midPoint + 1;
            }
        } else {
            // Otherwise, the right sub-array is sorted
            if (nums[midPoint] <= target && target <= nums[right]) {
                // target is in the right sub-array
                left = midPoint + 1;

            } else {
                // target is in the left sub-array
                right = midPoint - 1;
            }
        }
    }

    // target was never found, just return -1
    return -1;
};

// some test cases
console.log(search([4,5,6,7,0,1,2], 0)); // 4
console.log(search([4,5,6,7,0,1,2], 3)); // -1
console.log(search([1], 0)); // -1
