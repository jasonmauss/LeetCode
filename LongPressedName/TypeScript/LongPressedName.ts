// Solution for: https://leetcode.com/problems/long-pressed-name/
const isLongPressedName = (name: string, typed: string): boolean => {
    
    const nameTypedChars = name.split('')
    const actualTypedChars = typed.split('')
    const typedLength = typed.length

     if (typedLength < name.length) {
        return false;
    }

    for (let i = 0; i < typedLength; i++) {
        if (nameTypedChars[i] !== actualTypedChars[i]) {
            if (actualTypedChars[i] === actualTypedChars[i - 1]) {
                actualTypedChars.splice(i, 1);
                i--;
            } else {
                return false;
            }
        }
    }

    return true;

};






// some test cases
console.log(isLongPressedName("alex", "aaleex")); // true
console.log(isLongPressedName("alex", "alexs")); // false
console.log(isLongPressedName("saeed", "ssaaedd")); // false
console.log(isLongPressedName("leelee", "lleeelee")); // true