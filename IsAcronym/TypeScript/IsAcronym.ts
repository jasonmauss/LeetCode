// Solution for: https://leetcode.com/problems/check-if-a-string-is-an-acronym-of-words/
const isAcronym = (words: string[], s: string): boolean => {

    words.forEach((value, index, array) => {
        words[index] = value.substring(0, 1);
    });

    return words.join('') === s;

};



// some test cases
console.log(isAcronym(["alice","bob","charlie"], "abc")); // true
console.log(isAcronym(["an","apple"], "a")); // false
console.log(isAcronym(["never","gonna","give","up","on","you"], "ngguoy")); // true