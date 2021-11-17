// Solution for: https://leetcode.com/problems/maximum-product-difference-between-two-pairs/
const maxProductDifference = (nums: number[]): number => {

    let largest:number = Math.max(...nums);
    nums.splice(nums.indexOf(largest), 1);
    let secondLargest:number = Math.max(...nums);

    let smallest:number = Math.min(...nums);
    nums.splice(nums.indexOf(smallest), 1);
    let secondSmallest:number = Math.min(...nums);

    return (largest * secondLargest) - (smallest * secondSmallest);
};

// some test cases
console.log(maxProductDifference([5,6,2,7,4])); // 34
console.log(maxProductDifference([4,2,5,9,7,4,8])); // 64