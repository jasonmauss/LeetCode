// Solution for: https://leetcode.com/problems/reverse-string-ii/

const reverseStr = (s: string, k: number): string => {
    
    // split the input string into an array to make it easy to work with
    let charArray:string[] = s.split('');

    // loop over array in increments of k * 2
    for(let i = 0; i < charArray.length; i += k * 2) {

        // start at i
        let start = i;
        // take the lesser of the two lengths for the end
        let end = Math.min(i + k - 1, charArray.length - 1);

        // take the sub string or sub "array" and reverse it
        while(start < end) {
            const tempChar = charArray[start];
            charArray[start] = charArray[end];
            charArray[end] = tempChar;

            start++;
            end--;
        }
    }

    // put the array back together and return it
    return charArray.join('');

};



// some test cases
console.log(reverseStr('abcdefg', 2)); // 'bacdfeg'
console.log(reverseStr('abcd', 2)); // 'bacd'