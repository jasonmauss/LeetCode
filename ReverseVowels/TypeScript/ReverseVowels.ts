// Solution for: https://leetcode.com/problems/reverse-vowels-of-a-string/
const reverseVowels = (s: string): string => {

    let vowelChars:string[] = [];
    let nonVowelChars:string[] = [];
    let vowels = ['a','e','i','o','u'];

    for(let i = 0; i < s.length; i++) {
        if(vowels.includes(s[i].toLowerCase())) {
            vowelChars.push(s[i]);
            nonVowelChars.push('*');
        } else {
            nonVowelChars.push(s[i]);
        }
    }

    for(let i = 0; i < nonVowelChars.length; i++) {
        if(nonVowelChars[i] === '*') {
            nonVowelChars[i] = vowelChars.pop();
        }
    }

    return nonVowelChars.join('');
};







// some test cases
console.log(reverseVowels('hello')); // "holle"
console.log(reverseVowels('leetcode')); // "leotcede"