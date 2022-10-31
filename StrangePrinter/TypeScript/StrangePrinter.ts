// Solution for: https://leetcode.com/problems/strange-printer/
const strangePrinter = (s: string): number => {

    let dp = Array(s.length + 1).fill(null).map(a => Array(s.length + 1).fill(-1));

    const check = (left, right) => {
        if (dp[left][right] > -1) {
            return dp[left][right];
        }

        if (left == right) {
            return 1;
        } else if (left > right) {
            return 0;
        }

        const target = s[left];
        let out = s.length;

        for (let i = left; i <= right; i++) {
            if (s[i] === target) {
                if (i == left) {
                    out = 1 + check(left + 1, right);
                } else {
                    out = Math.min(out, check(left, i - 1) + check(i + 1, right));
                }
            }
        }

        dp[left][right] = out;
        return out;
    };

    return check(0, s.length - 1);

};




// some test cases
console.log(strangePrinter("aaabbb")); // 2
console.log(strangePrinter("aba")); // 2