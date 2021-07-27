// Solution for: https://leetcode.com/problems/longest-palindromic-substring/

// important thing to keep in mind is that palindromes can be of an even or odd
// number of characters which means a "from inner most to outer most characters"
// approach has to account for that.
// e.g. "tacocat" (odd number of total chars) = could start at only the 'o' and just start comparing outwards
// e.g. "tacoocat" (even number of total chars) = would have to start with 'oo' chars to detect the palindrome by moving outwards

function longestPalindrome(s: string): string {
    
    if(s === null || s.length < 2) return s;

    let longestPalindromeString: string = '';

    for(let i: number = 0; i < s.length; i++) {
        // find the longest paldindromic substring by starting at a given index
        // and scanning from that index outward in both directions
        const palindromicString = scanString(s, i);

        if(palindromicString.length > longestPalindromeString.length) {
            longestPalindromeString = palindromicString;
        }
    }

    return longestPalindromeString;
}


function scanString(stringToScan: string, startingPosition: number): string {
    
    // Find the longest palindrome of odd-length characters
    const oddLengthPalindrome = getPalindromeFromStartingPosition(stringToScan, startingPosition, startingPosition);
    // Find the longest palindrom of even-length characters
    const evenLengthPalindrome = getPalindromeFromStartingPosition(stringToScan, startingPosition, startingPosition + 1);

    return oddLengthPalindrome.length > evenLengthPalindrome.length ? oddLengthPalindrome : evenLengthPalindrome;
}

function getPalindromeFromStartingPosition(stringValue: string, startingLeftPosition: number, startingRightPosition: number): string {
    
    while(startingLeftPosition >= 0 && startingRightPosition < stringValue.length && stringValue[startingLeftPosition] === stringValue[startingRightPosition]) {
        startingLeftPosition--;
        startingRightPosition++;
    }

    return stringValue.slice(startingLeftPosition + 1, startingRightPosition);
}

// some test cases
console.log(longestPalindrome('babad')); // bab or aba
console.log(longestPalindrome('cbbd')); // bb
console.log(longestPalindrome('a')); // a
console.log(longestPalindrome('ac')); // a
console.log(longestPalindrome('aufeefaphillihp')); // phillihp