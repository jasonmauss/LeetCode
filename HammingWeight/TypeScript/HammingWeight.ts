// Solution for: https://leetcode.com/problems/number-of-1-bits/

const hammingWeight = (n: number): number => {
    
    const regex = new RegExp('1','g');
    const matches = n.toString(2).match(regex);
    return matches ? matches.length : 0;

};




// some test cases
console.log(hammingWeight(11)); // 3
console.log(hammingWeight(128)); // 1
console.log(hammingWeight(2147483645)); // 30