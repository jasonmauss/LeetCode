// Solution for: https://leetcode.com/problems/array-partition/
const arrayPairSum = (nums: number[]): number => {

    const sortedNums = nums.sort((a, b) => a - b);
    
    let res = 0;
    
    for (let i = 0; i < sortedNums.length; i += 2) {
        res += sortedNums[i];
    }

    return res;

};









// some test cases
console.log(arrayPairSum([1,4,3,2])); // 4
console.log(arrayPairSum([6,2,6,5,1,2])); // 9