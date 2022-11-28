// Solution for: https://leetcode.com/problems/guess-the-word/

// This is the Master's API interface.
// You should not implement it, or speculate about its implementation
//
class Master {
    guess(word: string): number {
        return 0;
    }
}

const findSecretWord = (words: string[], master: Master):any => {
    
    const getMostCommonWord = (words) => {
        const count = new Array(6).fill(new Array(26).fill(0));
        for (let word of words) {
            for (let [idx, char] of Object.entries(word)) {
                count[idx][char.toString().charCodeAt(0)-97]++;
            }
        }
        
        let mostCommonWord = "";
        let maxScore = 0;
        for (let word of words) {
            let score = 0;
            for (let [idx, char] of Object.entries(word)) {
                score += count[idx][char.toString().charCodeAt(0)-97];
            }
            if (score > maxScore) {
                maxScore = score;
                mostCommonWord = word;
            }
        }
        
        return mostCommonWord;    
    };
    
    const getNewWordlist = (wordlist, target, cnt) => {
        return wordlist.filter(word => {
            let c = 0;
            for (let [idx, char] of Object.entries(word)) {
                if (char === target[idx]) c++;
            }
            if (c === cnt) return true;
            return false;
        });
    };
    
    while (words.length > 0) {
        const mostCommonWord = getMostCommonWord(words);
        const cnt = master.guess(mostCommonWord);
        if (cnt === 6) return;
        words = getNewWordlist(words, mostCommonWord, cnt);
    }
};




// some test cases  
console.log(findSecretWord([], new Master())); // 