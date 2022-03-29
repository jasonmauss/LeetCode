// Solution for: https://leetcode.com/problems/prime-palindrome/
const primePalindrome = (n) => {
    const isPrime = (n) => {
        if (n <= 1)
            return false;
        if (n <= 3)
            return true;
        if (n % 2 == 0 || n % 3 == 0)
            return false;
        for (let i = 3; i <= Math.floor(Math.sqrt(n)) + 1; i += 2) {
            if (n % i == 0)
                return false;
        }
        return true;
    };
    const isPalindrome = (value) => {
        let length = 0;
        let r = value.length - 1;
        while (length < r) {
            if (value[length] != value[r])
                return false;
            length++;
            r--;
        }
        return true;
    };
    while (true) {
        let str = String(n);
        if (String(n).length % 2 == 0 && n > 11) {
            n = Math.pow(10, Math.ceil(Math.log10(n + 1)));
            continue;
        }
        if (!isPalindrome(str)) {
            n++;
            continue;
        }
        if (isPrime(n))
            return n;
        n++;
    }
};
// some test cases
console.log(primePalindrome(6)); // 7
console.log(primePalindrome(8)); // 11
console.log(primePalindrome(13)); // 101
