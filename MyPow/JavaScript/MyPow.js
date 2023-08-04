// Solution for: https://leetcode.com/problems/powx-n/
const myPow = (x, n) => {
    if (n === 0)
        return 1;
    if (n === 1)
        return x;
    if (n < 0) {
        n = Math.abs(n);
        x = 1.0 / x;
    }
    let result = 1;
    while (n !== 0) {
        if (n % 2 === 1) {
            result *= x;
            n -= 1;
        }
        x *= x;
        n = Math.floor(n / 2.0);
    }
    return result;
};
// some test cases
console.log(myPow(2.00000, 10)); // 1024.00000
console.log(myPow(2.10000, 3)); // 9.26100
console.log(myPow(2.00000, -2)); // 0.25000
