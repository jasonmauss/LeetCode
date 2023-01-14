// Solution for: https://leetcode.com/problems/minimum-sum-of-four-digit-number-after-splitting-digits/
const minimumSum = (num: number): number => {

    const digits = num.toString().split('');
    const n = digits.length;
    let minSum = 0;
    digits.sort();
    
    for (let i = 0; i < n / 2; i++) {
        const pair = digits[i] + digits[n - 1 - i];
        minSum += +pair;
    }
  
    return minSum;

};



// some test cases
console.log(minimumSum(2932)); // 52
console.log(minimumSum(4009)); // 13