// Solution for: https://leetcode.com/problems/counting-words-with-a-given-prefix/
const prefixCount = (words: string[], pref: string): number => {

    let prefixedWords = 0;

    for(let word of words) {
        if(word.startsWith(pref)) {
            prefixedWords++;
        }
    }

    return prefixedWords;

};






// some test cases
console.log(prefixCount(["pay","attention","practice","attend"], "at")); // 2
console.log(prefixCount(["leetcode","win","loops","success"], "code")); // 0