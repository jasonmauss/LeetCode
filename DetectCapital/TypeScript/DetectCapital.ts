// Solution for: https://leetcode.com/problems/detect-capital/
const detectCapitalUse = (word: string): boolean => {

    return word.toUpperCase() === word || word.toLowerCase() === word || capitalizeFirstLetterOnly(word) === word;

};

const capitalizeFirstLetterOnly = (s:string):string => {
    return s.charAt(0).toUpperCase() + s.slice(1).toLowerCase();
};


// some test cases
console.log(detectCapitalUse('USA')); // true
console.log(detectCapitalUse('FlaG')); // false
console.log(detectCapitalUse('leetcode')); // true
console.log(detectCapitalUse("Google")); // true
console.log(detectCapitalUse("GoogLe")); // false
