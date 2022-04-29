// Solution for: https://leetcode.com/problems/palindrome-partitioning/
const partition = (s) => {
    const P = [];
    const isPanlindrome = (stringValue) => {
        let left = 0, right = stringValue.length - 1, valid = true;
        while (left < right) {
            valid = valid && stringValue[left] === stringValue[right];
            left++;
            right--;
        }
        return valid;
    };
    const palindromeHelper = (stringVal, stringArray) => {
        if (stringVal.length === 0 && stringArray.length !== 0) {
            P.push(stringArray);
            return;
        }
        for (let i = 0; i < stringVal.length; i++) {
            const stringPart = stringVal.substring(0, i + 1);
            if (isPanlindrome(stringPart))
                palindromeHelper(stringVal.substring(i + 1), [...stringArray, stringPart]);
        }
    };
    palindromeHelper(s, []);
    return P;
};
// some test cases
console.log(partition("aab")); //  [["a","a","b"],["aa","b"]]
console.log(partition("a")); //  [["a"]]
