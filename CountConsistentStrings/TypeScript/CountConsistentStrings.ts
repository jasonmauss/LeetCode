// Solution for: https://leetcode.com/problems/count-the-number-of-consistent-strings/description/
const countConsistentStrings = (allowed: string, words: string[]): number => {

    let consistentStringCount = 0;
    const allowedChars = new Set(allowed.split(''));

    for(let word of words) {

        let isStringConsistent = false;

        for(let char of word.split('')) {
            
            if(allowedChars.has(char)) {
                isStringConsistent = true;
                continue;
            } else {
                isStringConsistent = false;
                break;
            }
        }

        if(isStringConsistent) consistentStringCount++;
    }

    return consistentStringCount;

};





// some test cases
console.log(countConsistentStrings('ab', ["ad","bd","aaab","baa","badab"])); // 2
console.log(countConsistentStrings('abc', ["a","b","c","ab","ac","bc","abc"])); // 7
console.log(countConsistentStrings('cad', ["cc","acd","b","ba","bac","bad","ac","d"])); // 4