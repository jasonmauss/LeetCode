// Solution for: https://leetcode.com/problems/word-break-ii/
const dfs = (s, set, memo) => {
    if (memo.has(s)) {
        return memo.get(s);
    }
    let i = 1;
    const result = [];
    while (i < s.length + 1) {
        const thisWord = s.substring(0, i);
        if (set.has(thisWord)) {
            if (i === s.length) {
                result.push(thisWord);
                break;
            }
            const nextCombos = dfs(s.substring(i), set, memo);
            nextCombos.forEach(combo => {
                result.push(`${thisWord} ${combo}`);
            });
        }
        i++;
    }
    memo.set(s, result);
    return result;
};
const wordBreak = (s, wordDict) => {
    return dfs(s, new Set(wordDict), new Map);
};
// some test cases
console.log(wordBreak("catsanddog", ["cat", "cats", "and", "sand", "dog"])); // ["cats and dog","cat sand dog"]
console.log(wordBreak("pineapplepenapple", ["apple", "pen", "applepen", "pine", "pineapple"])); // ["pine apple pen apple","pineapple pen apple","pine applepen apple"]
console.log(wordBreak("catsandog", ["cats", "dog", "sand", "and", "cat"])); // []
