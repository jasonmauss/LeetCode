// Solution for:https://leetcode.com/problems/reverse-string/solutions/1511930/ts-solution/
/**
 Do not return anything, modify s in-place instead.
 */
const reverseString = (s) => {
    let low = 0;
    let high = s.length - 1;
    while (low < high) {
        const tempVal = s[low];
        s[low] = s[high];
        s[high] = tempVal;
        low++;
        high--;
    }
};
// some test cases
const string1 = ["h", "e", "l", "l", "o"];
reverseString(string1);
console.log(string1); // ["o","l","l","e","h"]
const string2 = ["H", "a", "n", "n", "a", "h"];
reverseString(string2);
console.log(string2); // ["h","a","n","n","a","H"]
