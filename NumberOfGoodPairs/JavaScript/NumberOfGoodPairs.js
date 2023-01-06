// Solution for: https://leetcode.com/problems/number-of-good-pairs/
const numIdenticalPairs = (nums) => {
    // There are two viable solutions to this one - the second solution is better suited towards
    // potentially lengthy lists of items with both time and space being O(n), while the
    // first solution is time O(n^2) and space O(1).
    // for each item in the array,
    // loop through each item in the array that appears after it.
    // If there is a match, it is considered a "good pair".
    // Keep track of - and return - the number of good pairs.
    // let goodPairs = 0;
    // for(let firstNumber = 0; firstNumber < nums.length - 1; firstNumber++) {
    //     for(let secondNumber = firstNumber + 1; secondNumber < nums.length; secondNumber++) {
    //         if(nums[firstNumber] === nums[secondNumber])
    //             goodPairs++;
    //     }
    // }
    // return goodPairs;
    // loop through each item in the array and store how many times each number
    // appears in the array.
    // If the item appears at least twice, multiply the number of appearances
    // by itself minus one, then divide by 2 to get the number of "good pairs".
    let goodPairs = 0;
    let numberMap = new Map();
    for (let num of nums) {
        numberMap.set(num, (numberMap.get(num) || 0) + 1);
    }
    for (const [key, value] of numberMap) {
        goodPairs += (numberMap.get(key) * (numberMap.get(key) - 1)) / 2;
    }
    return goodPairs;
};
// some test cases
console.log(numIdenticalPairs([1, 2, 3, 1, 1, 3])); // 4
console.log(numIdenticalPairs([1, 1, 1, 1])); // 6
console.log(numIdenticalPairs([1, 2, 3])); // 0
console.log(numIdenticalPairs([1, 2, 3, 4, 1, 2, 2, 3, 3, 3, 4, 4, 4, 4])); // 20
