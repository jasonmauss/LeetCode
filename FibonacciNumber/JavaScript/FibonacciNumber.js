// Solution for: https://leetcode.com/problems/fibonacci-number/
const fib = (n) => {
    if (n < 2)
        return n;
    let fibNumber1 = 0, fibNumber2 = 1, tempFibNumber = 0;
    for (let i = 2; i <= n; i++) {
        tempFibNumber = fibNumber1;
        fibNumber1 = fibNumber2;
        fibNumber2 = tempFibNumber + fibNumber1;
    }
    return fibNumber2;
};
// some test cases
console.log(fib(2)); // 1
console.log(fib(3)); // 2
console.log(fib(4)); // 3
