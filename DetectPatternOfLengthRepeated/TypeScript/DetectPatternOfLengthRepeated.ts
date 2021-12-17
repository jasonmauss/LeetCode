// Solution for: https://leetcode.com/problems/detect-pattern-of-length-m-repeated-k-or-more-times/
const containsPattern = (arr: number[], m: number, k: number): boolean => {

    for(let i:number = m, count:number = 0; i < arr.length; i++){
        if(arr[i] != arr[i-m]) count = 0;
        else if(++count === m*(k - 1)) return true;
    }
    return false;
};

// some test cases
console.log(containsPattern([1,2,4,4,4,4], 1, 3)); // true
console.log(containsPattern([1,2,1,2,1,1,1,3], 2, 2)); // true
console.log(containsPattern([1,2,1,2,1,3], 2, 3)); // false
console.log(containsPattern([1,2,3,1,2], 2, 2)); // false
console.log(containsPattern([2,2,2,2], 2, 3)); // false