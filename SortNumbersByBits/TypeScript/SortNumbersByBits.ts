// Solution for: https://leetcode.com/problems/sort-integers-by-the-number-of-1-bits/
const sortByBits = (arr: number[]): number[] => {

    return arr.sort((a, b) => bitCount(a) - bitCount(b) || a - b);
    
};

const bitCount = num => {

    let sum = 0;

    while (num) {
        sum += num & 1;
        num = num >> 1;
    }

    return sum;
};

// some test cases
console.log(sortByBits([0,1,2,3,4,5,6,7,8])); // [0,1,2,4,8,3,5,6,7]
console.log(sortByBits([1024,512,256,128,64,32,16,8,4,2,1])); // [1,2,4,8,16,32,64,128,256,512,1024]
console.log(sortByBits([10000,10000])); // [10000,10000]
console.log(sortByBits([2,3,5,7,11,13,17,19])); // [2,3,5,17,7,11,13,19]
console.log(sortByBits([10,100,1000,10000])); // [10,100,10000,1000]