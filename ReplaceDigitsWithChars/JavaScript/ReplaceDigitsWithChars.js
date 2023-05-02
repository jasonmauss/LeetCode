// Solution for: https://leetcode.com/problems/replace-all-digits-with-characters/
const replaceDigits = (s) => {
    const digitsReplacedWithChars = [];
    let prevCharCode = 0;
    for (let index = 0; index < s.length; index++) {
        if (index % 2 === 0) {
            digitsReplacedWithChars.push(s[index]);
            prevCharCode = s[index].charCodeAt(0);
        }
        else {
            digitsReplacedWithChars.push(String.fromCharCode(prevCharCode + parseInt(s[index])));
        }
    }
    return digitsReplacedWithChars.join('');
};
// some test cases
console.log(replaceDigits('a1c1e1')); // abcdef
console.log(replaceDigits('a1b2c3d4e')); // abbdcfdhe
