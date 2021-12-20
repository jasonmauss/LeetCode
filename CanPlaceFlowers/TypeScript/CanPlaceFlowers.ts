// Solution for: https://leetcode.com/problems/can-place-flowers/
const canPlaceFlowers = (flowerbed: number[], n: number): boolean => {
    
    // turn the numeric array into a string of 1's and 0's
    const bed = flowerbed.join('').toString();
    // bedIndex will track where in the string we find
    // a string of 3 consecutive zeros
    let bedIndex:number = -1;
    // openPlots will track how many open plots we
    // find by following the no-adjacent-flowers rule
    let openPlots = 0;

    // search for the first occurence of 3 consecutive zeros.
    bedIndex = bed.indexOf('0') || bed.indexOf('100');
    
    while(bedIndex > -1) {
        openPlots++;
        bedIndex = bed.indexOf('000', bedIndex + 2) || bed.indexOf('100', bedIndex + 2);
    }

    return openPlots >= n;
};

// some test cases
console.log(canPlaceFlowers([1,0,0,0,1], 1)); // true
console.log(canPlaceFlowers([1,0,0,0,1], 2)); // false
console.log(canPlaceFlowers([1,0,0,0,0,0,1], 2)); // true
console.log(canPlaceFlowers([1,0,0,0,0,1], 2)); // false
console.log(canPlaceFlowers([1,0,0,0,0,0,0,1,0,0], 3)); // true