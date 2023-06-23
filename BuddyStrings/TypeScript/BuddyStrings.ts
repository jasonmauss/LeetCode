// Solution for: https://leetcode.com/problems/buddy-strings/
const buddyStrings = (s: string, goal: string): boolean => {

    // tried this solution first but it's not fast enough, it times out during testing
    // let sArr = s.split('');

    // for(let i = 0; i < s.length; i++) {
    //     let tempChar = sArr[i];
    //     for(let j = i + 1; j < s.length; j++) {
    //         sArr[i] = sArr[j];
    //         sArr[j] = tempChar;
    //         if(sArr.join('') === goal) {
    //             return true;
    //         } else {
    //             sArr = s.split(''); // reset the array
    //         }
    //     }
    // }

    // return false;

    if(s.length <= 1 || goal.length <= 1 || s.length !== goal.length) return false;

    const getCharCounts = (s:string): Record<string, number> => {
        let counts:Record<string, number> = {};

        for(let i = 0; i < s.length; i++) {
            if(counts[s[i]]) counts[s[i]]++;
            else counts[s[i]] = 1;
        }

        return counts;
    }

    if(s === goal) {
        
        let charCounts:Record<string, number> = getCharCounts(s);
        
        for (let key in charCounts) {
            if (charCounts[key] > 1) return true;
        }

        return false;

    } else {
        let charOnePos = Number.MIN_SAFE_INTEGER;
        let charTwoPos = Number.MIN_SAFE_INTEGER;
        for(let i = 0; i < s.length; i++) {
            if(s[i] !== goal[i]) {
                if(charOnePos === Number.MIN_SAFE_INTEGER) charOnePos = i;
                else if(charTwoPos === Number.MIN_SAFE_INTEGER) charTwoPos = i;
                else return false;
            }
        }
        if(charOnePos === Number.MIN_SAFE_INTEGER || charTwoPos === Number.MIN_SAFE_INTEGER) return false;
        return (s[charOnePos] === goal[charTwoPos] && s[charTwoPos] === goal[charOnePos]);
    }

};






// some test cases
console.log(buddyStrings("ab", "ba")); // true
console.log(buddyStrings("ab", "ab")); // false
console.log(buddyStrings("aa", "aa")); // true