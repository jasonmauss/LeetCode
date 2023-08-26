// Solution for: https://leetcode.com/problems/plus-one/
const plusOne = (digits) => {
    for (let i = digits.length - 1; i >= 0; i--) {
        if (digits[i] + 1 > 9) {
            digits[i] = 0;
            if (i === 0) {
                digits.unshift(...[1]);
            }
        }
        else {
            digits[i]++;
            break;
        }
    }
    return digits;
    // if you want a one-liner you can do this too.
    // return Array.from((BigInt(digits.join('')) + BigInt('1')).toString(), Number)
};
// some test cases
console.log(plusOne([1, 2, 3])); // [1,2,4]
console.log(plusOne([4, 3, 2, 1])); // [4,3,2,2]
console.log(plusOne([9])); // [1,0]
console.log(plusOne([6, 1, 4, 5, 3, 9, 0, 1, 9, 5, 1, 8, 6, 7, 0, 5, 5, 4, 3])); // [6, 1, 4, 5, 3, 9, 0, 1, 9, 5, 1, 8, 6, 7, 0, 5, 5, 4, 4]
console.log(plusOne([9, 9, 9, 9])); // [1,0,0,0,0]
