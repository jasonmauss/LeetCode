// Solution for: https://leetcode.com/problems/unique-length-3-palindromic-subsequences/
const countPalindromicSubsequence = (s: string): number => {

    const charToIndices = {};
    for (let i = 0; i < s.length; i++) {
        const char = s[i];
        if (charToIndices[char]) {
            charToIndices[char].push(i);
        } else {
            charToIndices[char] = [i];
        }
    }
    
    let count = 0;
    
    for (const currChar in charToIndices) {
        if (charToIndices[currChar].length < 2) continue;
        const currCharIndices = charToIndices[currChar];
        const firstIndex = currCharIndices[0];
        const lastIndex = currCharIndices[currCharIndices.length - 1];
        
        for (const char in charToIndices) {
            const indices = charToIndices[char];
            let lo = 0;
            let hi = indices.length;
            while (lo < hi) {
                const mid = (lo + hi) >> 1;
                if (indices[mid] <= firstIndex) {
                    lo = mid + 1;
                } else {
                    hi = mid;
                }
            }
            if (indices[lo] && indices[lo] < lastIndex) {
                count++;
            }
        }
    }

    return count;

};




// some test cases
console.log(countPalindromicSubsequence("aabca")); // 3
console.log(countPalindromicSubsequence("adc")); // 0
console.log(countPalindromicSubsequence("bbcbaba")); // 4