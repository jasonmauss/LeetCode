// Solution for: https://leetcode.com/problems/check-if-the-sentence-is-pangram/
const checkIfPangram = (sentence) => {
    for (let alphatbetCounter = 97; alphatbetCounter < 123; alphatbetCounter++) {
        if (sentence.indexOf(String.fromCharCode(alphatbetCounter)) === -1)
            return false;
    }
    return true;
};
// some test cases
console.log(checkIfPangram('thequickbrownfoxjumpsoverthelazydog')); // true
console.log(checkIfPangram('leetcode')); // false
console.log(checkIfPangram('thequickbrownfoxjumpsoverthelaydog')); // false
