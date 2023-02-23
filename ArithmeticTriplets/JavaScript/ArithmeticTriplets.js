// Solution for: https://leetcode.com/problems/number-of-arithmetic-triplets/
const arithmeticTriplets = (nums, diff) => {
    const numberSet = new Set();
    let tripletCount = 0;
    for (let num of nums) {
        if (numberSet.has(num - 2 * diff) && numberSet.has(num - diff)) {
            tripletCount++;
        }
        numberSet.add(num);
    }
    return tripletCount;
};
// some test cases
console.log(arithmeticTriplets([0, 1, 4, 6, 7, 10], 3)); // 2
console.log(arithmeticTriplets([4, 5, 6, 7, 8, 9], 2)); // 2
