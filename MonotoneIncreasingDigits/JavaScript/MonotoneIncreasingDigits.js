// Solution for: https://leetcode.com/problems/monotone-increasing-digits/
const monotoneIncreasingDigits = (n) => {
    let res = 0;
    let case9 = false;
    let m = 1;
    while (n) {
        const val = n % 10 - case9;
        n = Math.floor(n / 10);
        const next = n % 10;
        case9 = val < next;
        res = case9 ? m * 10 - 1 : res + val * m;
        m *= 10;
    }
    return res;
};
// some test cases
console.log(monotoneIncreasingDigits(10)); // 9
console.log(monotoneIncreasingDigits(1234)); // 1234
console.log(monotoneIncreasingDigits(332)); // 299
