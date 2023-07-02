// Solution for: https://leetcode.com/problems/perfect-number/
const checkPerfectNumber = (num) => {
    let sumOfDivisors = 0;
    if (num === 1)
        return false;
    for (let i = 1; i <= Math.round(num / 2); i++) {
        if (num % i === 0) {
            sumOfDivisors += i;
        }
    }
    return sumOfDivisors == num;
};
// some test cases
console.log(checkPerfectNumber(28)); // true
console.log(checkPerfectNumber(7)); // false
