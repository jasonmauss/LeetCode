// Solution for https://leetcode.com/problems/longest-substring-without-repeating-characters/

function lengthOfLongestSubstring(s: string): number {
    if (s === '') return Number(0);
    
    let charArray: string[] = s.split('');
    let longestFound: number = 0;
    let charSet: Set<string> = new Set<string>();
    let leftPos: number = 0;

    // implements the "sliding window" approach
    // move through the string using a Set to keep track of unique values. If a duplicate value
    // is found, delete the "left most" character in the string from the set and keep doing so until
    // the set no longer has that character then count the number between what is "left most" ordinally
    // and the current position in the string you're on, + 1 and compare that to the longest range
    // you've come across so far to know if it's the longest substring (without repeated characters) or not.
    for(let i = 0;i < s.length; i++)
    {
        while(charSet.has(s[i])) {
            charSet.delete(s[leftPos]);
            leftPos += 1;
        }
        charSet.add(s[i]);
        longestFound = Math.max(longestFound, i - leftPos + 1);
    }

    return longestFound;
}

// some tests
console.log(lengthOfLongestSubstring('abcabcbb')); // 3
console.log(lengthOfLongestSubstring('uapnebdyuybb')); // 8
console.log(lengthOfLongestSubstring('uapnnebdyuybb')); // 6
console.log(lengthOfLongestSubstring('uapnebdyuyb')); // 8
console.log(lengthOfLongestSubstring('uappnebdyuybb')); // 7
console.log(lengthOfLongestSubstring('uapnebdyyuybb')); // 8