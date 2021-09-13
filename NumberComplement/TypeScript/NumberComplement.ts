// Solution for: https://leetcode.com/problems/number-complement/
const findComplement = (num: number): number => {

    // use the radix value of 2 to get the binary representation
    // then just flip the ones and zeroes and
    // supply the same radix value when parsing back into a number
    let numberString = num.toString(2);
    let result = '';
    // Using a string in a 'for...of' statement is only supported
    // in ES5 and higher so make sure you use the --target es5 or --target es6
    // flag when calling TSC to compile.
    for (let char of numberString) {
      result += char === '1' ? '0': '1';
    }
    
    return parseInt(result, 2);
};

// some test cases
console.log(findComplement(5)); // 2
console.log(findComplement(1)); // 0
console.log(findComplement(17)); // 14