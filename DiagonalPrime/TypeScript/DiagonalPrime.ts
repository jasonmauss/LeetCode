// Solution for: https://leetcode.com/problems/prime-in-diagonal/description/
const diagonalPrime = (nums: number[][]): number => {

    let maxPrime = 0;
    const numsLength = nums.length;

    const isPrimeNumber = (num: number) => {
        if (num < 2) return;
        for(let i = 2; i * i <= num; i++) {
            if (num % i === 0) return;
        }
        maxPrime = Math.max(num, maxPrime)
    }

    for(let i = 0; i < numsLength; i++) {
        isPrimeNumber(nums[i][i]);
        isPrimeNumber(nums[i][numsLength - i - 1]);
    }

    return maxPrime;

};






// some test cases
console.log(diagonalPrime([[1,2,3],[5,6,7],[9,10,11]])); // 11
console.log(diagonalPrime([[1,2,3],[5,17,7],[9,11,10]])); // 17