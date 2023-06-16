// Solution for: https://leetcode.com/problems/remove-letter-to-equalize-frequency/description/
const equalFrequency = (word: string): boolean => {

    const frequencyCounts = {};

    for(let i = 0; i < word.length; i++) {
        const letter = word[i];
        frequencyCounts[letter] = frequencyCounts[letter] || 0;
        frequencyCounts[letter] = frequencyCounts[letter] + 1;
    }

    let frequenciesContainOne = false;
    const frequencyValues = [];

    for(let i = 0; i < word.length; i++) {
        
        const letter = word[i];
        
        frequencyCounts[letter] -=1;

        if(frequencyCounts[letter] === 0)
            delete frequencyCounts[letter];

        if(new Set(Object.values(frequencyCounts)).size === 1) return true;
        frequencyCounts[letter] ? frequencyCounts[letter] +=1 : frequencyCounts[letter] = 1;
    }

    return false;

};





// some test cases
console.log(equalFrequency("abcc")); // true
console.log(equalFrequency("aazz")); // false
console.log(equalFrequency("bac")); // true