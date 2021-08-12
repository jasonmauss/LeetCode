// Solution for:  https://leetcode.com/problems/3sum/

const threeSum = (nums: number[]): number[][] => {

    if (nums.length < 3) return [];

    // sort numbers from smallest to largest
    nums = nums.sort((a, b) => a - b);

    const triplets: number[][] = [];
    for (let i: number = 0; i < nums.length - 2; i++) {
    // Remove any duplicates from anchor position before setting up pointers.
    while (nums[i] === nums[i - 1]) i++;
    
    let left: number = i + 1;
    let right: number = nums.length - 1;
    while (left < right) {
        const [anchorVal, leftValue, rightValue]: number[] = [
            nums[i],
            nums[left],
            nums[right],
        ];
        const sum: number = anchorVal + leftValue + rightValue;
        if (sum === 0) {
            triplets.push([anchorVal, leftValue, rightValue]);
            // Remove dupes after finding the sum of zero.
            while (nums[left] === nums[left + 1]) left++;
        
            left++;
        }
        if (sum > 0) right--;
        if (sum < 0) left++;
    }
  }
  
  return triplets;
    
};

// some test cases
console.log(threeSum([-1,0,1,2,-1,-4])); // [-1,-1,2], [-1, 0, 1]]
console.log(threeSum([])); // []
console.log(threeSum([0])); // []
