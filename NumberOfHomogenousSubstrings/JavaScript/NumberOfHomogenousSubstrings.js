// Solution for: https://leetcode.com/problems/count-number-of-homogenous-substrings/
const countHomogenous = (s) => {
    let countResult = 0;
    if (s.length === 1)
        return 1;
    // get a unique set of the chars that appear in the string
    const uniqueChars = [...new Set(s.split(''))];
    for (let char of uniqueChars) {
        let i = 1;
        let indexOf = 0;
        let startIndex = 0;
        indexOf = s.indexOf(char.repeat(i), startIndex);
        while (indexOf > -1) {
            countResult++;
            startIndex = indexOf + 1;
            if (s.indexOf(char.repeat(i), startIndex) === -1)
                i++;
            indexOf = s.indexOf(char.repeat(i), startIndex);
        }
    }
    return countResult;
};
// some test cases
console.log(countHomogenous("abbcccaa")); // 13
console.log(countHomogenous("xy")); // 2
console.log(countHomogenous("zzzzz")); // 15
