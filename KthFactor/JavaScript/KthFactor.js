// Solution for: https://leetcode.com/problems/the-kth-factor-of-n/
const kthFactor = (n, k) => {
    const findDivisors = (num) => {
        const divisors = [];
        const sqrt = Math.sqrt(num);
        for (let i = 1; i <= sqrt; i++) {
            if (num % i === 0) {
                divisors.push(i);
                if (num / i !== i) {
                    divisors.push(num / i);
                }
            }
        }
        return divisors.sort((a, b) => a - b);
    };
    const divisors = findDivisors(n);
    return divisors[k - 1] ?? -1;
};
// some tests
console.log(kthFactor(12, 3)); // 3
console.log(kthFactor(7, 2)); // 7
console.log(kthFactor(4, 4)); // -1
console.log(kthFactor(39, 3)); // 3
console.log(kthFactor(112, 6)); // 3
