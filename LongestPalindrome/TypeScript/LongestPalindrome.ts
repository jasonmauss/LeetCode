// Solution for: https://leetcode.com/problems/longest-palindrome/

const longestPalindrome = (s: string): number => {
    
    const palindromeLengthSet:Set<string> = new Set<string>();

    let longestPalindromeLength:number = 0;

    // anytime we encounter at least 2 of any character
    // we will remove it from the Set, and add 2 to the
    // longest length possible since it means that particular
    // character could be used on either "side" of the palindrome
    for(let char of s) {
        if(palindromeLengthSet.has(char)) {
            palindromeLengthSet.delete(char);
            longestPalindromeLength += 2;
        } else {
            palindromeLengthSet.add(char);
        }
    }

    // if there are any items left in the Set, that means
    // there was an odd number of one character, which could be
    // used as the middle character of the palindrome, so add one
    // to the longest length possible.
    if(palindromeLengthSet.size > 0) {
        longestPalindromeLength++;
    }

    return longestPalindromeLength;

};


// some test cases
console.log(longestPalindrome('abccccdd')); // 7
console.log(longestPalindrome('a')); // 1