// Solution for: https://leetcode.com/problems/replace-question-marks-in-string-to-minimize-its-value/description/
const minimizeStringValue = (s) => {
    // get a count of how many of each character there are
    let charCounts = {};
    const inputStringAsArray = s.split('');
    for (let char of inputStringAsArray) {
        charCounts[char] = (charCounts[char] || 0) + 1;
    }
    // Keep track of which chars will get used to replace question marks
    const replacementChars = [];
    // Determine which characters will replace each question mark
    for (let i = 0; i < charCounts['?']; ++i) {
        let minimumValueChar = 'a';
        let minimumCountChar = charCounts['a'];
        // ensure charCounts object has a property for each lower case character
        // in the alphabet and initialize the value to zero, if needed. For each 
        // question mark(the loop we're inside now) find the first character property 
        // that has a value less than minimum char property. Capture that char as
        // a question mark replacement value, and increment it's property value by 1.
        for (let j = 97; j <= 122; ++j) {
            let tempCharProperty = String.fromCharCode(j);
            if (!charCounts[tempCharProperty])
                charCounts[tempCharProperty] = 0;
            if (charCounts[tempCharProperty] < minimumCountChar) {
                minimumValueChar = tempCharProperty;
                minimumCountChar = charCounts[tempCharProperty];
            }
        }
        charCounts[minimumValueChar]++;
        replacementChars.push(minimumValueChar);
    }
    // Sort the replacement chars so that the smallest lexicographically value
    // gets used as we 'pop()' the values off the array below.
    replacementChars.sort((a, b) => b.charCodeAt(0) - a.charCodeAt(0));
    // go through and replace any ? with the last element in replacementChars
    for (let i = 0; i < inputStringAsArray.length; ++i) {
        if (inputStringAsArray[i] === '?')
            inputStringAsArray[i] = replacementChars.pop();
    }
    // call join('') so it's just a plain string again
    return inputStringAsArray.join('');
};
// some test cases
console.log(minimizeStringValue('???')); // abc
console.log(minimizeStringValue('a?a?')); // abac
console.log(minimizeStringValue('abcdefghijklmnopqrstuvwxy??')); // "abcdefghijklmnopqrstuvwxyaz"
console.log(minimizeStringValue('d??')); // dab
