// Solution for: https://leetcode.com/problems/word-break/
const wordBreak = (s, wordDict) => {
    const wordSet = new Set(wordDict);
    const vistedWords = new Set();
    const queue = [0];
    const stringLength = s.length;
    while (queue.length) {
        const start = queue.shift();
        if (vistedWords.has(start))
            continue;
        for (let end = start + 1; end <= stringLength; end++) {
            if (wordSet.has(s.slice(start, end))) {
                if (end === stringLength)
                    return true;
                queue.push(end);
            }
        }
        vistedWords.add(start);
    }
    return false;
};
// some test cases
console.log(wordBreak("leetcode", ["leet", "code"])); // true
console.log(wordBreak("applepenapple", ["apple", "pen"])); // true
console.log(wordBreak("catsandog", ["cats", "dog", "sand", "and", "cat"])); // false
