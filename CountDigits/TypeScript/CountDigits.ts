// Solution for: https://leetcode.com/problems/count-the-digits-that-divide-a-number/
const countDigits = (num: number): number => {

    let digits = num.toString().split('');
    let divisibleDigitCount = 0;

    for(let digit of digits) {
        if(num % Number(digit) === 0) divisibleDigitCount++;
    }

    return divisibleDigitCount;
};




// some test cases
console.log(countDigits(7)); // 1
console.log(countDigits(121)); // 2
console.log(countDigits(1248)); // 4