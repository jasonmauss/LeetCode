// Solution for: https://leetcode.com/problems/increasing-decreasing-string/

const sortString = (s: string): string => {

    let stringArray = s.split('');
    let returnVal = '';

    // get all the values sorted so we can count on
    // them being in a specific order
    stringArray.sort();

    // keep filtering until there are no more values
    // to filter, then reverse the array and filter
    // back the other direction. Continue this until the
    // string array is empty
    while (stringArray.length) {
        stringArray = stringArray.filter((value, index) => {
            if (index === 0 || value !== returnVal[returnVal.length - 1]) {
                returnVal += value;
                return false;
            }
            return true;
        });

        stringArray.reverse();
    }

    return returnVal;
};

// some test cases
console.log(sortString("aaaabbbbcccc")); // abccbaabccba
console.log(sortString("rat")); // art
console.log(sortString("leetcode")); // cdelotee
console.log(sortString("ggggggg")); // ggggggg
console.log(sortString("spo")); // ops