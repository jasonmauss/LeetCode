// Solution for: https://leetcode.com/problems/sorting-the-sentence/
const sortSentence = (s: string): string => {

    let wordArray = s.split(' ');
    wordArray.sort((a, b) => Number(a.substring(a.length - 1)) - Number(b.substring(b.length - 1)));
    wordArray.forEach((value, index, theArray) => {
        theArray[index] = value.substring(0, value.length - 1);
    });

    return wordArray.join(' ');
};





// some test cases
console.log(sortSentence('is2 sentence4 This1 a3')); // "This is a sentence"
console.log(sortSentence('Myself2 Me1 I4 and3')); // "Me Myself and I"