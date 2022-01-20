// Solution for: https://leetcode.com/problems/compare-strings-by-frequency-of-the-smallest-character/
const numSmallerByFrequency = (queries: string[], words: string[]): number[] => {

    const getLowestCharFrequency = (s:string): number => {

        let lowestChar = 'z';
        let lowestFrequency = 0;
        
        for (const char of s) {
            if (char === lowestChar) {
                lowestFrequency++;
            } else if (char < lowestChar) {
                lowestChar = char;
                lowestFrequency = 1;
            }
        }
        
        return lowestFrequency;
    }

    const wordVals = words.map(getLowestCharFrequency);
  
    wordVals.sort((a, b) => b - a);
    
    return queries.map(query => {
        const queryVal = getLowestCharFrequency(query);
        let wordsWithHigherValue:number = 0;
        
        for (const wordVal of wordVals) {
            if (queryVal < wordVal) wordsWithHigherValue++;
        
            else break;
        }
        
        return wordsWithHigherValue;
    });

};

// some test cases
console.log(numSmallerByFrequency(["cbd"], ["zaaaz"])); // [1]
console.log(numSmallerByFrequency(["bbb","cc"], ["a","aa","aaa","aaaa"])); // [1, 2]