// Solution for: https://leetcode.com/problems/sort-even-and-odd-indices-independently/
const sortEvenOdd = (nums: number[]): number[] => {
    
    const evenNums = [];
    const oddNums = [];

    for(let i = 0; i < nums.length; i++) {
        if(i % 2 === 0) {
            evenNums.push(nums[i]);
        } else {
            oddNums.push(nums[i]);
        }
    }

    // sort even index nums in ascending order
    if(evenNums.length > 0) evenNums.sort((a,b) => a - b);
    // sort odd index nums in descending order
    if(oddNums.length > 0) oddNums.sort((a,b) => b - a);

    const returnArray = [];

    while(evenNums.length > 0 || oddNums.length > 0) {
        if(evenNums.length > 0) returnArray.push(evenNums.shift());
        if(oddNums.length > 0) returnArray.push(oddNums.shift());
    }

    return returnArray;
};


// some tests
console.log(sortEvenOdd([4,1,2,3])); // [2,3,4,1]
console.log(sortEvenOdd([2,1])); // [2,1]