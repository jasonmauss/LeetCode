// important thing to keep in mind is that palindromes can be of an even or odd
// number of characters which means a "from inner most to outer most characters"
// approach has to account for that.
// e.g. "tacocat" (odd number of total chars) = could start at only the 'o' and just start comparing outwards
// e.g. "tacoocat" (even number of total chars) = would have to start with 'oo' chars to detect the palindrome by moving outwards
function longestPalindrome(s) {
    if (s === null || s.length < 2)
        return s;
    var longestPalindromeString = '';
    for (var i = 0; i < s.length; i++) {
        // find the longest paldindromic substring by starting at a given index
        // and scanning from that index outward in both directions
        var palindromicString = scanString(s, i);
        if (palindromicString.length > longestPalindromeString.length) {
            longestPalindromeString = palindromicString;
        }
    }
    return longestPalindromeString;
}
function scanString(stringToScan, startingPosition) {
    // Find the longest palindrome of odd-length characters
    var oddLengthPalindrome = getPalindromeFromStartingPosition(stringToScan, startingPosition, startingPosition);
    // Find the longest palindrom of even-length characters
    var evenLengthPalindrome = getPalindromeFromStartingPosition(stringToScan, startingPosition, startingPosition + 1);
    return oddLengthPalindrome.length > evenLengthPalindrome.length ? oddLengthPalindrome : evenLengthPalindrome;
}
function getPalindromeFromStartingPosition(stringValue, startingLeftPosition, startingRightPosition) {
    while (startingLeftPosition >= 0 && startingRightPosition < stringValue.length && stringValue[startingLeftPosition] === stringValue[startingRightPosition]) {
        startingLeftPosition--;
        startingRightPosition++;
    }
    return stringValue.slice(startingLeftPosition + 1, startingRightPosition);
}
console.log(longestPalindrome('babad')); // bab or aba
console.log(longestPalindrome('cbbd')); // bb
console.log(longestPalindrome('a')); // a
console.log(longestPalindrome('ac')); // a
console.log(longestPalindrome('aufeefaphillihp')); // phillihp
