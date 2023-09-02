// Solution for: https://leetcode.com/problems/reorganize-string/
const reorganizeString = (s) => {
    // account for this edge case
    if (s.length === 2)
        return s;
    // this will hold the letters that are adjacent that need to
    // be redistributed throughout the string elsewhere
    const reorganizeArray = [];
    // going to work with the string as an array
    const inputArray = s.split('');
    // populate the reorganizeArray by removing adjacent 
    // letters from the original string
    for (let i = 1; i < inputArray.length; i++) {
        if (inputArray[i] === inputArray[i - 1]) {
            reorganizeArray.push(...inputArray.splice(i, 1));
            i--;
        }
    }
    // loop through the letters that need to be redistributed
    if (reorganizeArray.length > 0) {
        for (let i = 0; i < reorganizeArray.length; i++) {
            // keep track of whether or not we were able to place or "redistribute" the
            // current letter needing to be placed.
            let placementFound = false;
            let elementNeedingPlacement = reorganizeArray[i];
            // if the letter can be placed up front, put it there. Simple/Efficient
            if (inputArray[0] !== elementNeedingPlacement) {
                inputArray.unshift(...reorganizeArray.splice(i, 1));
                placementFound = true;
                i = -1; // this will basically "reset" us and start over at the beginning of the array
                continue;
            }
            // the letter couldn't be placed up front so try to find a place for it
            // elsewhere in the string/array
            for (let j = 0; j < inputArray.length; j++) {
                if (inputArray[j] !== elementNeedingPlacement && inputArray[j + 1] !== elementNeedingPlacement) {
                    inputArray.splice(j + 1, 0, ...reorganizeArray.splice(i, 1));
                    placementFound = true;
                    i = -1;
                    break;
                }
            }
            // if we looked through every item needing to be placed somewhere
            // and couldn't place any of them, return an empty string
            if (!placementFound && i === reorganizeArray.length - 1) {
                return '';
            }
        }
    }
    // just turn the array back into a string
    return inputArray.join('');
};
// some test cases
console.log(reorganizeString("aab")); // "aba"
console.log(reorganizeString("aaab")); // ""
console.log(reorganizeString("aabcc")); // "acbac"
console.log(reorganizeString("aabccc")); // "cacabc"
console.log(reorganizeString("caabccc")); // "cacacbc"
console.log(reorganizeString("aabccdde")); // "adcbacde"
console.log(reorganizeString("baaba")); // "ababa"
console.log(reorganizeString("abbabbaaab")); // "ababababab"
console.log(reorganizeString("abbbabaaa")); // "ababababa"
