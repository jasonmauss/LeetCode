// Solution for: https://leetcode.com/problems/longest-common-prefix/

const longestCommonPrefix = (strs: string[]): string  => {

    if(strs && strs.length > 0) {
        // start off by making the first string the longest prefix
        // then start comparing from the second word onward in the
        // loop below
        let longestPrefix: string = strs[0];
        for(let i = 1; i < strs.length; i++) {
            let matchingString = strs[i];
            // keep removing the last letter of the prefix string
            // until a potential prefix match is found using .slice()
            while(matchingString.indexOf(longestPrefix) !== 0) {
                longestPrefix = longestPrefix.slice(0, longestPrefix.length - 1);
                if(longestPrefix.length === 0) {
                    return '';
                }
            }
        }
        return longestPrefix;
    } else {
        return '';
    }
};

// some test cases
console.log(longestCommonPrefix(['flower', 'flow','flight'])); // 'fl'
console.log(longestCommonPrefix(['dog','racecar','car'])); // ''
console.log(longestCommonPrefix(['break','breakfast','bread'])); // 'brea'