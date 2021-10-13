// Solution for: https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/
// const twoSum = (numbers: number[], target: number): number[] => {

//     const indexValues:number[] = [];

//     // for each item we encounter, check to see if
//     // the matching value we need exists, and if so
//     // what index it exists at. If it exists, push the 
//     // current index + 1 and the matching value index + 1
//     // to the returned array
//     for(let i:number = 0; i < numbers.length; i++) {
//         let result:number = target - numbers[i];
//         let matchingIndex:number = numbers.indexOf(result, i + 1);
//         if(matchingIndex !== -1) {
//             indexValues.push(i + 1);
//             indexValues.push(matchingIndex + 1);
//             return indexValues;
//         }
//     }
// };

// this is better than the first solution above
const twoSum = (numbers: number[], target: number): number[] => {
    let length:number = numbers.length;
    let beginningPosition:number = 0;
    let endingPosition:number = length - 1;

    let sum:number = numbers[beginningPosition] + numbers[endingPosition];
    while(sum !== target) {
        sum < target ? beginningPosition++ : endingPosition--;
        sum = numbers[beginningPosition] + numbers[endingPosition];
    }
    return [beginningPosition + 1, endingPosition + 1];
};

// some test cases
console.log(twoSum([2,7,11,15], 9)); // [1,2];
console.log(twoSum([2,3,4], 6)); // [1,3];
console.log(twoSum([-1,0], -1)); // [1,2];
console.log(twoSum([5,7,8,9], 14)); // [1,4];
console.log(twoSum([0,0,3,4],0)); // [1,2];