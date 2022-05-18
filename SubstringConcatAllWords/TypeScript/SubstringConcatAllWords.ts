// Solution for: https://leetcode.com/problems/substring-with-concatenation-of-all-words/
const findSubstring = (s: string, words: string[]): number[] => {

    // create a var to hold the result that will get returned
    let result:number[] = [];

    // get the word length so we know how many chars to increase
    // our starting position by as we search through the string
    let wordLength:number = words[0].length;

    // keep track of which words we are looking for, and how many times
    // the need to appear in the string as we search through it
    let wordFrequency:Map<string, number> = new Map<string, number>();

    // store a reference to how many words need to appear consecutively
    let wordCount = words.length;

    // populate the frequency map from the words array
    for(let word in words) {
        wordFrequency.set(words[word], wordFrequency.get(words[word]) + 1 || 1);
    }

    // outer loop that will help keep track of our starting position (i) which will
    // get added to the result array if we end up finding all of the words the correct
    // number of times (frequency)
    for(let i:number = 0; i < s.length; i++) {
        
        // foundWords will track which words we've found and how many times
        // we have found them. This will get reset to a new Map with each iteration
        // of the outer loop above.
        let foundWords:Map<string, number> = new Map<string, number>();

        // this loop acts as something of a sliding window to help us track
        // words found and frequency and if it matches up with what we need to find
        for(let j:number = 0; j < wordCount; j++) {
            
            // our starting position should be based on the length of each word from
            // the words array. Initially it will start from 0, then wordLength, etc.
            let startingPosition = i + (j * wordLength);

            // get the word from the string based on the length of each word (wordLength)
            let foundWord = s.substring(startingPosition, startingPosition + wordLength);

            // if the word found isn't in the words array, break out of this loop since the
            // starting position (current value of i) isn't going to help us and we should just
            // move on to the next starting position (increment i)
            if(!wordFrequency.has(foundWord)) break;

            // add the found word to foundWords and set the frequency value so we can compare
            // it to our word frequency map
            foundWords.set(foundWord, foundWords.get(foundWord) + 1 || 1);

            // if the word has been found more times than it should appear based on the word Frequency
            // map, then break out of this loop
            if(foundWords.get(foundWord) > wordFrequency.get(foundWord)) break;

            // if execution reaches this point then we have hit the limit of consecutive words allowed 
            // and we can add the starting position (i) to our result array
            if(j === (wordCount - 1)) result.push(i);
        }
    }

    return result;

};



// some test cases
console.log(findSubstring("barfoothefoobarman", ["foo","bar"])); // [0,9]
console.log(findSubstring("wordgoodgoodgoodbestword", ["word","good","best","word"])); // []
console.log(findSubstring("barfoofoobarthefoobarman", ["bar","foo","the"])); // [6,9,12]