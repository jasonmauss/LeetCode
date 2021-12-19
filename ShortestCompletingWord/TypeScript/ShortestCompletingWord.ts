// Solution for: https://leetcode.com/problems/shortest-completing-word/
const shortestCompletingWord = (licensePlate: string, words: string[]): string => {

    let completingWord:string = '';
    let wordFound:boolean = false;

    // get alpha chars only, and into an array
    let licensePlateChars:string[] = licensePlate.toUpperCase().replace(/[^A-Z]/g, '').split('');

    words.forEach((word) => {
        if(!wordFound || word.length < completingWord.length) {
            let newWord:string = word.toUpperCase();

            licensePlateChars.forEach((lpChar) => {
                newWord = newWord.replace(lpChar, '');
            });

            if(word.length - licensePlateChars.length === newWord.length) {
                completingWord = word;
                wordFound = true;
            }
        }
    });

    return completingWord;

};

// some test cases
console.log(shortestCompletingWord("1s3 PSt", ["step","steps","stripe","stepple"])); // "steps"
console.log(shortestCompletingWord("1s3 456", ["looks","pest","stew","show"])); // "pest"