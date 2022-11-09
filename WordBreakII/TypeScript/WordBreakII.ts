// Solution for: https://leetcode.com/problems/word-break-ii/
const wordBreak = (s: string, wordDict: string[]): string[] => {

    return [''];

};



// some test cases
console.log(wordBreak("catsanddog", ["cat","cats","and","sand","dog"])); // ["cats and dog","cat sand dog"]
console.log(wordBreak("pineapplepenapple", ["apple","pen","applepen","pine","pineapple"])); // ["pine apple pen apple","pineapple pen apple","pine applepen apple"]
console.log(wordBreak("catsandog", ["cats","dog","sand","and","cat"])); // []