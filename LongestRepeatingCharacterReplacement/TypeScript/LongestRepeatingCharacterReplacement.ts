// Solution for: https://leetcode.com/problems/longest-repeating-character-replacement/
const characterReplacement = (s: string, k: number): number => {

    const frequencies = {}
    let highestFrequency = 0;
    let longest = 0;;
    let left = 0;
    let right = 0;
    
    while (right < s.length) {
        const rightCharacter = s.charAt(right);
        frequencies[rightCharacter] = frequencies[rightCharacter] + 1 || 1;

        highestFrequency = Math.max(highestFrequency, frequencies[rightCharacter]);

        while ((right - left + 1) - highestFrequency > k) {
            const leftCharacter = s.charAt(left);
            frequencies[leftCharacter] -= 1;
            left++;
        }

        longest = Math.max(longest, right - left + 1);

        right++;
    }
    
    return longest;

};



// some test cases
console.log(characterReplacement("ABAB", 2)); // 4
console.log(characterReplacement("AABABBA", 1)); // 4