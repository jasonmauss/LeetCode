// Solution for: https://leetcode.com/problems/minimum-value-to-get-positive-step-by-step-sum/
const minStartValue = (nums: number[]): number => {

    for (let i:number = 1; i < nums.length; i++) {
        nums[i] = nums[i] + nums[i - 1];
      }
    
      let result = 0;
    
      result = result = 1 - Math.min(...nums);
      return result <= 0 ? 1 : result;

};


// some test cases
console.log(minStartValue([-3,2,-3,4,2])); // 5
console.log(minStartValue([1,2])); // 1
console.log(minStartValue([1,-2, -3])); // 5