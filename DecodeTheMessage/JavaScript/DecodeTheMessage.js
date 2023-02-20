// Solution for: https://leetcode.com/problems/decode-the-message/
const decodeMessage = (key, message) => {
    let keyMap = new Map();
    let keyFirstAppearanceIndex = 0;
    for (let i = 0; i < key.length; i++) {
        if (!keyMap.has(key.charAt(i)) && key.charAt(i) !== ' ') {
            keyMap.set(key.charAt(i), keyFirstAppearanceIndex);
            keyFirstAppearanceIndex++;
        }
    }
    let decodedMessage = '';
    for (let char of message) {
        if (char === ' ') {
            decodedMessage += ' ';
        }
        else {
            let charCode = keyMap.get(char) + 97;
            decodedMessage += String.fromCharCode(charCode);
        }
    }
    return decodedMessage;
};
// some test cases
console.log(decodeMessage('the quick brown fox jumps over the lazy dog', 'vkbs bs t suepuv')); // this is a secret
console.log(decodeMessage('eljuxhpwnyrdgtqkviszcfmabo', 'zwx hnfx lqantp mnoeius ycgk vcnjrdb')); // the five boxing wizards jump quickly
