// Solution for: https://leetcode.com/problems/count-the-number-of-vowel-strings-in-range/
const vowelStrings = (words, left, right) => {
    let validVowelStringsCount = 0;
    const vowels = "aeiou";
    const rangeStrings = words.slice(left, right + 1);
    for (const word of rangeStrings) {
        if (vowels.includes(word.charAt(0)) &&
            vowels.includes(word.charAt(word.length - 1)))
            validVowelStringsCount++;
    }
    return validVowelStringsCount;
};
// some test cases
console.log(vowelStrings(["are", "amy", "u"], 0, 2)); // 2
console.log(vowelStrings(["hey", "aeo", "mu", "ooo", "artro"], 1, 4)); // 3
console.log(vowelStrings(["vo", "j", "i", "s", "i"], 0, 3)); // 1
