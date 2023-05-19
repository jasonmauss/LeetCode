// Solution for: https://leetcode.com/problems/find-first-palindromic-string-in-the-array/
const firstPalindrome = (words: string[]): string => {

    for(let word of words) {
        if(word.split('').reverse().join('') === word) return word;
    }

    return '';

};








// some test cases
console.log(firstPalindrome(["abc","car","ada","racecar","cool"])); // "ada"
console.log(firstPalindrome(["notapalindrome","racecar"])); // "racecar"
console.log(firstPalindrome(["def","ghi"])); // ""