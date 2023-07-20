// Solution for: https://leetcode.com/problems/power-of-two/
const isPowerOfTwo = (n) => {
    for (let i = 0; i < 32; i++) {
        const powerOfTwo = Math.pow(2, i);
        if (n === powerOfTwo)
            return true;
        if (powerOfTwo > n)
            return false;
    }
    return false;
};
// some test cases
console.log(isPowerOfTwo(1)); // true
console.log(isPowerOfTwo(16)); // true
console.log(isPowerOfTwo(3)); // false
