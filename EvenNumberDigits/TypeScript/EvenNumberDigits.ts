// Solution for: https://leetcode.com/problems/find-numbers-with-even-number-of-digits/
const findNumbers = (nums: number[]): number => {

    let evenDigitNumbers = 0;

    for(let num of nums) {
        if(num.toString().length % 2 === 0) 
            evenDigitNumbers++;
    }

    return evenDigitNumbers;

};







// some test cases
console.log(findNumbers([12,345,2,6,7896])); // 2
console.log(findNumbers([555,901,482,1771])); // 1