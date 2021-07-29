function isPalindrome(x: number): boolean {

    if (x < 0) return false;

    let originalValue: number = x;
    let reversedNumber: number = 0;
  
    while (originalValue !== 0) {
      const remainder = Math.trunc(originalValue % 10);
      reversedNumber = reversedNumber * 10 + remainder;
      originalValue = Math.trunc(originalValue / 10);
    }
  
    return reversedNumber === x;

};

// some test cases
console.log(isPalindrome(121)); // true
console.log(isPalindrome(-121)); // false