// Solution for: https://leetcode.com/problems/implement-strstr/
const strStr = (haystack: string, needle: string): number => {

    if(needle === '') return 0;
        
    return haystack.indexOf(needle);
};

// some test cases
console.log(strStr('hello','ll')); // 2
console.log(strStr('aaaaa','bba')); // -1
console.log(strStr('','')); // 0
console.log(strStr('foobar','ba')); // 3