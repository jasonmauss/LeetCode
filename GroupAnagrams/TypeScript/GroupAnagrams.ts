// Solution for: https://leetcode.com/problems/group-anagrams

const groupAnagrams = (strs: string[]): string[][] => {
    return [['']];
};




// some test cases
console.log(groupAnagrams(["eat","tea","tan","ate","nat","bat"])); // [["bat"],["nat","tan"],["ate","eat","tea"]]
console.log(groupAnagrams([""])); // [[""]]
console.log(groupAnagrams(["a"])); // [["a"]]