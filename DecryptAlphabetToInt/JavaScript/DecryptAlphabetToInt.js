// Solution for: https://leetcode.com/problems/decrypt-string-from-alphabet-to-integer-mapping/
const freqAlphabets = (s) => {
    const charCodeOffset = 96;
    let mappingString = '';
    for (let charIndex = 0; charIndex < s.length; charIndex++) {
        if ((charIndex + 2 <= s.length) && (s[charIndex + 2] === '#')) {
            mappingString += String.fromCharCode(Number(s[charIndex] + '' + s[charIndex + 1]) + charCodeOffset);
            charIndex += 2;
        }
        else {
            mappingString += String.fromCharCode(Number(s[charIndex]) + charCodeOffset);
        }
    }
    return mappingString;
};
// some test cases
console.log(freqAlphabets("10#11#12")); // jkab
console.log(freqAlphabets("1326#")); // acz
console.log(freqAlphabets("13914#21#26#28")); // acinuzbh
