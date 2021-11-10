// Solution for: https://leetcode.com/problems/determine-if-string-halves-are-alike/

const halvesAreAlike = (s: string): boolean => {

    return s.substring(0, s.length / 2).match(/[aeiou]/gi)?.length === s.substring(s.length / 2).match(/[aeiou]/gi)?.length;

};

// some test cases
console.log(halvesAreAlike("book")); // true
console.log(halvesAreAlike("textbook")); // false
console.log(halvesAreAlike("MerryChristmas")); // false
console.log(halvesAreAlike("AbCdEfGh")); // true
console.log(halvesAreAlike("bCdFgHjKl")); // true