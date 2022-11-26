// Solution for: https://leetcode.com/problems/find-all-good-strings/
const buildKMPArray = (evilInputString:string):string[] => {

    const result = new Array(evilInputString.length).fill(0);
    let j = 0;

    for (let i = 1; i < evilInputString.length; i++) {

        while (j && evilInputString[j] !== evilInputString[i]) {
            j = result[j - 1];
        }

        if (evilInputString[i] === evilInputString[j]) {
            j += 1;
        }

        result[i] = j;
    }

    return result;
}

const findGoodStrings = (n: number, s1: string, s2: string, evil: string): number => {

    const evilLength = evil.length;
    const modulo = 1000000007;
    const kmp = buildKMPArray(evil); // hints talk about using Kunth-Morris-Pratt (KMP) algorithm for Pattern Searching
    
    const cache = {};

    const goodStringCount = (sIndex:number, evilIndex, isPrefixOf1, isPrefixOf2):number => {

        if (evilIndex === evilLength) return 0;
        if (sIndex === n) return 1;

        const key = [sIndex, evilIndex, isPrefixOf1, isPrefixOf2].join('-');

        if (cache.hasOwnProperty(key)) return cache[key];

        let total = 0;
        let first = isPrefixOf1 ? s1.charCodeAt(sIndex) : 97  // a;
        let last = isPrefixOf2 ? s2.charCodeAt(sIndex) : 122  // z;

        for (let i = first; i <= last; i++) {
            const char = String.fromCharCode(i);
            const isPre1 = isPrefixOf1 && i === first;
            const isPre2 = isPrefixOf2 && i === last;
            let evilPrefix = evilIndex;

            while (evilPrefix && char !== evil[evilPrefix]) {
                evilPrefix = kmp[evilPrefix - 1];
            }

            if (char === evil[evilPrefix]) {
                evilPrefix += 1;
            }

            total += goodStringCount(sIndex + 1, evilPrefix, isPre1, isPre2);
        }

        return cache[key] = total % modulo;
    }

    return goodStringCount(0, 0, true, true);

};




// some test cases
console.log(findGoodStrings(2,'aa','da','b')); // 51
console.log(findGoodStrings(8,'leetcode','leetgoes','leet')); // 0
console.log(findGoodStrings(2,'gx','gz','x')); // 2