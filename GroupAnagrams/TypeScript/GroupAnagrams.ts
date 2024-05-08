// Solution for: https://leetcode.com/problems/group-anagrams

const groupAnagrams = (strs: string[]): string[][] => {
    
    const strsMap = new Map();

    for (const str of strs) {
        const sortedStr = str.split('').sort().join('');
        const values = strsMap.get(sortedStr) || [];

        strsMap.set(sortedStr, values.concat(str));
    }

    const result = [];
    for (const [_, value] of strsMap) {
        result.push(value);
    }
    
    return result;
};




// some test cases
console.log(groupAnagrams(["eat","tea","tan","ate","nat","bat"])); // [["bat"],["nat","tan"],["ate","eat","tea"]]
console.log(groupAnagrams([""])); // [[""]]
console.log(groupAnagrams(["a"])); // [["a"]]