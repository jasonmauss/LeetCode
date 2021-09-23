// Solution for: https://leetcode.com/problems/maximum-number-of-words-you-can-type/
const canBeTypedWords = (text: string, brokenLetters: string): number => {
    return text.split(' ').filter((word) => !wordHasBrokenLetter(word, brokenLetters)).length;
};

// since destructuring works on strings, we can use it with .some() and
// .includes() to determine if it contains a broken letter or not, basically
// just comparing the two arrays to each other
const wordHasBrokenLetter = (word, brokenLetter):boolean => {
    return [...word].some((char) => brokenLetter.includes(char));
}


// some test cases
console.log(canBeTypedWords("a b c d e", "abcde")); // 0
console.log(canBeTypedWords("hello world", "ad")); // 1
console.log(canBeTypedWords("leet code", "lt")); // 1
console.log(canBeTypedWords("leet code", "e")); // 0
console.log(canBeTypedWords("hello darkness my old friend", "ks")); // 4