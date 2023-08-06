// Solution for: https://leetcode.com/problems/valid-anagram/
const isAnagram = (s: string, t: string): boolean => {

    if(s.length !== t.length) return false;

    for(let char of s) {
        t = t.replace(char,'');
    }

    return t.trim().length === 0;

};



// some test cases
console.log(isAnagram("anagram", "nagaram")); // true
console.log(isAnagram("rat", "car")); // false
