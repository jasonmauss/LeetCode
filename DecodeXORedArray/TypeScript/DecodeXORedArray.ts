// Solution for: https://leetcode.com/problems/decode-xored-array/
const decode = (encoded: number[], first: number): number[] => {

    let decodedArray = new Array(encoded.length + 1);
    decodedArray[0] = first;
    for(let encodedIndex = 0; encodedIndex < encoded.length; encodedIndex++) {
        decodedArray[encodedIndex + 1] = decodedArray[encodedIndex] ^ encoded[encodedIndex];
    }

    return decodedArray;
    
};





// some test cases
console.log(decode([1,2,3], 1)); // [1,0,2,1]
console.log(decode([6,2,7,3], 4)); // [4,2,0,7,4]