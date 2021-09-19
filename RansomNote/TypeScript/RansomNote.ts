// Solution for: https://leetcode.com/problems/ransom-note/
const canConstruct = (ransomNote: string, magazine: string): boolean => {

    if(ransomNote.length > magazine.length) return false;
    
    for(let i:number = 0; i < ransomNote.length; i++) {
        const letter:string = ransomNote.substring(i, i + 1);
        if (magazine.indexOf(letter) == -1) return false;
        magazine = magazine.replace(letter, '');
    }

    return true;
};

// some test cases
console.log(canConstruct('a','b')); // false
console.log(canConstruct('aa','ab')); // false
console.log(canConstruct('aa','aab')); // true
console.log(canConstruct('alarm','xuepmaltropma')); // true
console.log(canConstruct('words','geoirgjword')); // false