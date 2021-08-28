// Solution for: https://leetcode.com/problems/divide-two-integers/
var divide = function (dividend, divisor) {
    // Just to make the logic easier, normalize to positive numbers here and
    // store whether the original dividend/divisor combination would lead to a positive
    // result or not so we can use the bool value for some logic later on.
    var positive = (dividend <= 0 && divisor <= 0) || (dividend >= 0 && divisor >= 0);
    divisor = Math.abs(divisor);
    dividend = Math.abs(dividend);
    // Since this function is recursive we need to break out of it when the dividend is less
    // than the divisor and return 0.
    if (dividend < divisor) {
        return 0;
    }
    // Take care of an edge case here.  If the two are equal, the result is 1 or -1
    if (dividend === divisor) {
        return positive ? 1 : -1;
    }
    // When you multiply any number x * y, it's the same as doing (x + x + x + x ... + x) y times.
    // An easy solution here is to just keep adding the divisor over and over again until we pass the result we want,
    // but that is nasty slow and has O(n) where n is the dividend. So instead, we are going to bitwise shift the
    // divisor and continue multiplying it by 2. We continue to do this until the next bit shift breaks past our
    // dividend. When that happens, you know for sure you can multiply divisor * quotient and your number will be
    // less than dividend. After that, you just need to add in the remainder and you're good to go. It is possible
    // to have a big remainder. That is why we're checking for 0 as well, because once we hit 1073741824 (2147483648 / 2), then
    // next double will cross it over to -2147483648, so we have to handle that as well.
    var _originalDivisor = divisor;
    var quotient = 1;
    for (var next = divisor << 1; next > 0 && next <= dividend; next = divisor << 1) {
        divisor <<= 1;
        quotient <<= 1;
    }
    // Add in the remainder if it is equal to or larger than the divisor.
    if ((dividend - divisor) >= _originalDivisor) {
        quotient = quotient + divide(dividend - divisor, _originalDivisor);
    }
    // Take care of flipping the number back to negative if we need to
    quotient = positive ? quotient : 0 - quotient;
    // Finally, take care of the 32-bit signed integer requirement
    quotient = Math.min(2147483647, quotient);
    quotient = Math.max(-2147483648, quotient);
    return quotient;
};
// some test cases
console.log(divide(256, 7)); // 36
console.log(divide(10, 3)); // 3
console.log(divide(7, -3)); // -2
console.log(divide(0, 1)); // 0
console.log(divide(1, 1)); // 1
