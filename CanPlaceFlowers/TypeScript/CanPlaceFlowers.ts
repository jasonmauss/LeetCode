// Solution for: https://leetcode.com/problems/can-place-flowers/
const canPlaceFlowers = (flowerbed: number[], n: number): boolean => {
    
    // openPlots will track how many open plots we
    // find by following the no-adjacent-flowers rule
    let openPlots = 0;
    let beforeIsZero:boolean, afterIsZero:boolean;

    // for any given position in the 1's and 0's, determine
    // if the previous number is a zero and if the next number
    // is a zero. If both of those are true, add a plot and then
    // advance the iterator by 1 to skip the "after" zero, and
    // keep checking.
    
    // Keep in mind the position in the string where
    // you're checking because "beforeisZero" should always be true
    // for the first character, and "afterIsZero" should always be true
    // for the last character in the string.
    for(let i:number = 0; i < flowerbed.length && openPlots < n; i++) {
        if(flowerbed[i] === 0) {
            beforeIsZero = i === 0 || flowerbed[i - 1] === 0;
            afterIsZero = i === flowerbed.length - 1 || flowerbed[i + 1] === 0;
        } else {
            continue;
        }

        if(beforeIsZero && afterIsZero) {
            openPlots++;
            i = i + 1;
        }
    }

    // the return value should just be whether you found as many
    // (or more, just to be safe) plots as the input argument n. Though, with the boolean
    // condition in the for loop initializer checking the openPlots value,
    // openPlots should never be greater than, only equal to.
    return openPlots >= n;
};

// some test cases
console.log(canPlaceFlowers([1,0,0,0,1], 1)); // true
console.log(canPlaceFlowers([1,0,0,0,1], 2)); // false
console.log(canPlaceFlowers([1,0,0,0,0,0,1], 2)); // true
console.log(canPlaceFlowers([1,0,0,0,0,1], 2)); // false
console.log(canPlaceFlowers([1,0,0,0,0,0,0,1,0,0], 2)); // true