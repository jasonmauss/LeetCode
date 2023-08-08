// Solution for: https://leetcode.com/problems/valid-palindrome/
const isPalindrome = (s: string): boolean => {

    return s.replace(/[^0-9a-z]/gi, '').toLowerCase().split('').reverse().join('') 
    === s.replace(/[^0-9a-z]/gi, '').toLowerCase();

};




// some test cases
console.log(isPalindrome("A man, a plan, a canal: Panama")); // true
console.log(isPalindrome("race a car")); // false
console.log(isPalindrome(" ")); // true