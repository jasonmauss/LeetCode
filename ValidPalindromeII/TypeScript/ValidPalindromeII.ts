// Solution for: https://leetcode.com/problems/valid-palindrome-ii/
const validPalindrome = (s:string):boolean => {
    for (let i:number = 0; i < s.length / 2; i++) {
        let j:number = s.length - i - 1;
        if (s[i] !== s[j]) {
            return isPalindrome(removeCharAt(s, i)) || isPalindrome(removeCharAt(s, j))
        }
    }
    return true;
};

// remove a character at a specified index/position
const removeCharAt = (s:string, index:number):string => s.substr(0, index) + s.substr(index + 1);

// split the string into an array, reverse the array, then re-join it.
const isPalindrome = (s:string):boolean => s === s.split('').reverse().join('');

// some test cases
console.log(validPalindrome("aba")); // true
console.log(validPalindrome("abca")); // true
console.log(validPalindrome("abc")); // false
console.log(validPalindrome("abcba")); // true
console.log(validPalindrome("abcdef")); // false