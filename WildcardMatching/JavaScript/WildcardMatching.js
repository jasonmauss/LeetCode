// Solution for: https://leetcode.com/problems/wildcard-matching/
const isMatch = (s, p) => {
    if (!p)
        return !s;
    if (p === '*')
        return true;
    let inputStringIndex = 0;
    let patternStringIndex = 0;
    let inputPlaceholder = null;
    let patternPlaceholder = null;
    while (inputStringIndex < s.length) {
        // if the current pattern char is '?' or the two chars are equal, just
        // increment both indexes and start the loop again
        if (p[patternStringIndex] === '?' || s[inputStringIndex] === p[patternStringIndex]) {
            inputStringIndex++;
            patternStringIndex++;
            continue;
        }
        if (p[patternStringIndex] === '*') {
            // if the asterisk is at the end of the pattern
            // then it matches the rest of the input string by definition so we're done
            if (patternStringIndex === p.length - 1)
                return true;
            // as long as there are asterisks, keep incrementing the pattern position index
            while (p[patternStringIndex + 1] === '*')
                patternStringIndex++;
            // find the next char in the pattern after '*' and then progress the scanning
            // of the input string as long as it doesn't match the next pattern char
            let nextPatternChar = p[patternStringIndex + 1];
            while (inputStringIndex < s.length && s[inputStringIndex] !== nextPatternChar && nextPatternChar !== '?')
                inputStringIndex++;
            // keep track of where in the pattern we were at so we can return to it
            patternPlaceholder = patternStringIndex;
            // same for input string
            inputPlaceholder = inputStringIndex;
            patternStringIndex++;
            continue;
        }
        // if we have previously encountered a '*' character then
        // inputPlaceholder will have a value and we can resume
        // from where our placeholder values were set to.
        if (inputPlaceholder != null) {
            inputStringIndex = inputPlaceholder + 1;
            patternStringIndex = patternPlaceholder;
            continue;
        }
        return false;
    }
    // if there are trailing asterisks, handle them here
    while (patternStringIndex < p.length && p[patternStringIndex] === '*') {
        patternStringIndex++;
    }
    // if we have consumed all of the pattern, then the result will be true
    return patternStringIndex >= p.length;
};
// some test cases
console.log(isMatch('aa', 'a')); // false
console.log(isMatch('aa', '*')); // true
console.log(isMatch('cb', '?a')); // false
console.log(isMatch('aabccbaa', 'aa*a')); // true
console.log(isMatch('aabccbaa', 'a??cba*')); // false
console.log(isMatch('aabccbaa', 'aabc?*a')); // true
