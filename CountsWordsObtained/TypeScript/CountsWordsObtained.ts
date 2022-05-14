// Solution for: https://leetcode.com/problems/count-words-obtained-after-adding-a-letter/
const wordCount = (startWords: string[], targetWords: string[]): number => {

    const startMap = {};

    for(let word of startWords) {
        startMap[word.split('').sort().join('')] = true;
    }

    let answer = 0;

    for(let word of targetWords) {
        for(let i = 0;i < word.length; i++) {
            let temp = (word.substring(0, i) + word.substring(i + 1, word.length)).split('').sort().join('');
            if(startMap[temp]) {
                answer++;
                break;
            }
        }
    }
    
    return answer;

};




// some test cases
console.log(wordCount(["ant","act","tack"], ["tack","act","acti"])); // 2
console.log(wordCount(["ab","a"], ["abc","abcd"])); // 1