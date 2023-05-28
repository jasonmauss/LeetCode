// Solution for: https://leetcode.com/problems/remove-trailing-zeros-from-a-string/
const removeTrailingZeros = (num) => {
    if (!num.endsWith('0'))
        return num;
    if (num === '0')
        return '';
    // if we make it here we know the last
    // number in the string is a zero, so we
    // can start looking backwards from the second
    // to last character, not the last.
    for (let i = num.length - 2; i >= 0; i--) {
        if (num.charAt(i) != '0') {
            return num.substring(0, i + 1);
        }
        else {
            continue;
        }
    }
    return '';
};
// some test cases
console.log(removeTrailingZeros('51230100')); // 512301
console.log(removeTrailingZeros('123')); // 123
console.log(removeTrailingZeros('00000')); // ''
console.log(removeTrailingZeros('0')); // ''
console.log(removeTrailingZeros('15400084700000')); // 154000847
