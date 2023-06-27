// Solution for: https://leetcode.com/problems/valid-mountain-array/
const validMountainArray = (arr: number[]): boolean => {

    // A valid mountain array must have at least 3 elements
    if(arr.length < 3) return false;

    // i is going to store the current index we're on and
    // we will add one to it to check the next number and
    // whether it's greater or less than the current number
    // depending on which "side of the mountain" we're on.
    let i = 0;

    // move forward through the array checking that the next
    // number is bigger than the previous one until that is
    // no longer the case, incrementing i each time.
    while(arr[i] < arr[i + 1] && i < arr.length) {
        i++;
    }

    // now that we're out of the loop above, check to see where we
    // ended up. If we're at the end, or if we never moved anywhere
    // at all, it's not a mountain array.
    if(i === 0  || i + 1 === arr.length) return false;

    // If we have reached this far, then we at least came to one 
    // "mountain peak" - now we check to see if the rest of the
    // values conform to the notion of a mountain and decrease in value
    while(arr[i] > arr[i + 1] && i < arr.length) {
        i++;
    }

    // if it was a true mountain array, then at this point i
    // should equal the length of the array.
    return i + 1 === arr.length;
    

};





// some test cases
console.log(validMountainArray([2,1])); //  false
console.log(validMountainArray([3,5,5])); //  false
console.log(validMountainArray([0,3,2,1])); //  true
console.log(validMountainArray([0,1,2,3,4,3,2,1])); //  true
console.log(validMountainArray([0,1,2,3,4,3,2,4])); //  false