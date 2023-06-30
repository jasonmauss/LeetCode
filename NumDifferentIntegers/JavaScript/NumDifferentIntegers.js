// Solution for: https://leetcode.com/problems/number-of-different-integers-in-a-string/
const numDifferentIntegers = (word) => {
    // Going to use a Set of numbers to track unique numbers
    let uniqueIntegers = new Set();
    // Using this to keep track of whether a number has started being observed
    let numberStarted = false;
    // Using this to store the position in the word string where the latest number started being observed
    let numFirstPosition = 0;
    for (let i = 0; i < word.length; i++) {
        // if the char is between a and z then charCodeAt
        // will give us a value between 97 and 122. Otherwise
        // we know it's a number
        let charCode = word.charCodeAt(i);
        if (charCode >= 97 && charCode <= 122) {
            // if we had been tracking a number
            if (numberStarted) {
                // the number has now stopped, so grab the current
                // position which is where it has ended.
                let numLastPosition = i;
                // using substring to grab the characters making up the number
                let numString = word.substring(numFirstPosition, numLastPosition);
                // parse the characters into a number and add it to the Set of numbers.
                uniqueIntegers.add(BigInt(numString));
                // reset the boolean that tells us if we're tracking a number or not
                numberStarted = false;
            }
        }
        else {
            // we are here because we encountered a numeric value
            // if we weren't already in the middle of tracking a number
            // then take note of the starting index and flip the boolean
            // that tells us we're in the middle of tracking a number
            if (!numberStarted) {
                numberStarted = true;
                numFirstPosition = i;
            }
        }
    }
    // if we had started tracking a number but never finished, that means the word
    // ended in a number. So parse it and add it to the Set of numbers
    if (numberStarted) {
        let numString = word.substring(numFirstPosition, word.length);
        uniqueIntegers.add(BigInt(numString));
    }
    // The number of unique integers will be the size
    // property of the Set of numbers
    return uniqueIntegers.size;
};
// some test cases
console.log(numDifferentIntegers('a123bc34d8ef34')); // 3
console.log(numDifferentIntegers('leet1234code234')); // 2
console.log(numDifferentIntegers('a1b01c001')); // 1
console.log(numDifferentIntegers('2393706880236110407059624696967828762752651982730115221690437821508229419410771541532394006597463715513741725852432559057224478815116557380260390432211227579663571046845842281704281749571110076974264971989893607137140456254346955633455446057823738757323149856858154529105301197388177242583658641529908583934918768953462557716z97438020429952944646288084173334701047574188936201324845149110176716130267041674438237608038734431519439828191344238609567530399189316846359766256507371240530620697102864238792350289978450509162697068948604722646739174590530336510475061521094503850598453536706982695212493902968251702853203929616930291257062173c79487281900662343830648295410')); // 3
