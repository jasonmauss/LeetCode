// Solution for: https://leetcode.com/problems/can-place-flowers/
var canPlaceFlowers = function (flowerbed, n) {
    // turn the numeric array into a string of 1's and 0's
    var bed = flowerbed.join('').toString();
    // openPlots will track how many open plots we
    // find by following the no-adjacent-flowers rule
    var openPlots = 0;
    var beforeIsZero, afterIsZero;
    // for any given position in the 1's and 0's, determine
    // if the previous number is a zero and if the next number
    // is a zero. If both of those are true, add a plot and then
    // advance the iterator by 1 to skip the "after" zero, and
    // keep checking.
    // Keep in mind the position in the string where
    // you're checking because "beforeisZero" should always be true
    // for the first character, and "afterIsZero" should always be true
    // for the last character in the string.
    for (var i = 0; i < bed.length; i++) {
        if (bed[i] === '0') {
            beforeIsZero = i === 0 || bed[i - 1] === '0';
            afterIsZero = i === bed.length - 1 || bed[i + 1] === '0';
        }
        else {
            continue;
        }
        if (beforeIsZero && afterIsZero) {
            openPlots++;
            i = i + 1;
        }
    }
    // the return value should just be whether you found as many
    // or more plots as the input argument n.
    return openPlots >= n;
};
// some test cases
console.log(canPlaceFlowers([1, 0, 0, 0, 1], 1)); // true
console.log(canPlaceFlowers([1, 0, 0, 0, 1], 2)); // false
console.log(canPlaceFlowers([1, 0, 0, 0, 0, 0, 1], 2)); // true
console.log(canPlaceFlowers([1, 0, 0, 0, 0, 1], 2)); // false
console.log(canPlaceFlowers([1, 0, 0, 0, 0, 0, 0, 1, 0, 0], 3)); // true
