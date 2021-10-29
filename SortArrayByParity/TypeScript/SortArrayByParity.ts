// Solution for: https://leetcode.com/problems/sort-array-by-parity/
const sortArrayByParity = (nums: number[]): number[] => {

    let returnValues:number[] = nums.filter(number => number % 2 === 0);

    returnValues.push(...nums.filter(number => number % 2 !== 0));

    return returnValues;
};

// some test cases
console.log(sortArrayByParity([3,1,2,4])) ; // [2,4,3,1]
console.log(sortArrayByParity([0])) ; // [0]