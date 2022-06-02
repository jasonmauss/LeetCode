// Solution for: https://leetcode.com/problems/maximum-score-words-formed-by-letters/
const maxScoreWords = (words, letters, scores) => {
    const frequency = new Uint8Array(26);
    let max = 0;
    for (let i = 0; i < letters.length; ++i) {
        ++frequency[letters[i].charCodeAt(0) - 97];
    }
    const fill = (wordIndex) => {
        let score = 0;
        for (let i = 0; i < words[wordIndex].length; ++i) {
            const charCode = words[wordIndex].charCodeAt(i) - 97;
            if (frequency[charCode] !== 0) {
                --frequency[charCode];
                score += scores[charCode];
                continue;
            }
            for (let j = 0; j < i; ++j) {
                ++frequency[words[wordIndex].charCodeAt(j) - 97];
            }
            score = 0;
            break;
        }
        return score;
    };
    const recover = (wordIndex) => {
        for (let i = 0; i < words[wordIndex].length; ++i) {
            ++frequency[words[wordIndex].charCodeAt(i) - 97];
        }
    };
    const recursive = (wordIndex, score) => {
        if (wordIndex === words.length) {
            return score > max && (max = score);
        }
        const fillScore = fill(wordIndex);
        recursive(wordIndex + 1, score + fillScore);
        fillScore > 0 && recover(wordIndex);
        recursive(wordIndex + 1, score);
    };
    recursive(0, 0);
    return max;
};
// some test cases
console.log(maxScoreWords(["dog", "cat", "dad", "good"], ["a", "a", "c", "d", "d", "d", "g", "o", "o"], [1, 0, 9, 5, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0])); //23
console.log(maxScoreWords(["xxxz", "ax", "bx", "cx"], ["z", "a", "b", "c", "x", "x", "x"], [4, 4, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 0, 10])); //27
console.log(maxScoreWords(["leetcode"], ["l", "e", "t", "c", "o", "d"], [0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0])); //0
