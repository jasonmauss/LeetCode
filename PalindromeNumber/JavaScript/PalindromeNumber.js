function isPalindrome(x) {
    if (x < 0)
        return false;
    var originalValue = x;
    var reversedNumber = 0;
    while (originalValue !== 0) {
        var remainder = Math.trunc(originalValue % 10);
        reversedNumber = reversedNumber * 10 + remainder;
        originalValue = Math.trunc(originalValue / 10);
    }
    return reversedNumber === x;
}
;
// some test cases
console.log(isPalindrome(121)); // true
console.log(isPalindrome(-121)); // false
