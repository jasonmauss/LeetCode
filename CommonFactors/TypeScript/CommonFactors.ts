// Solution for: https://leetcode.com/problems/number-of-common-factors/
const commonFactors = (a: number, b: number): number => {

    const factorSet = new Set();
    factorSet.add(1);

    for(let factor = 2; factor <= Math.min(a, b); factor++) {
        if(a % factor === 0 && b % factor === 0) factorSet.add(factor);
    }


    return factorSet.size;

};






// some test cases
console.log(commonFactors(12, 6)); // 4
console.log(commonFactors(25, 30)); // 2