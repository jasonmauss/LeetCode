// Solution for: https://leetcode.com/problems/maximum-number-of-words-found-in-sentences/
const mostWordsFound = (sentences) => {
    // if you like the cool (but less readable) one-liners, you could go with this
    //return Math.max(...sentences.map(sentence => sentence.split(' ').length));
    // This isn't necessarily much more readable, but it's a little bit faster
    return sentences.reduce((currentMostWordsFound, nextSentence) => {
        return Math.max(currentMostWordsFound, nextSentence.split(' ').length);
    }, 0);
};
// some test cases
console.log(mostWordsFound(["alice and bob love leetcode", "i think so too", "this is great thanks very much"])); // 6
console.log(mostWordsFound(["please wait", "continue to fight", "continue to win"])); // 3
