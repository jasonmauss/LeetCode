// Solution for: https://leetcode.com/problems/count-good-triplets/
const countGoodTriplets = (arr: number[], a: number, b: number, c: number): number => {

    let returnValue = 0;
    let length = arr.length;

    for (let i = 0; i < length; i++) {
        for (let j = i + 1; j < length; j++) {
            for (let k = j + 1; k < length; k++) {
                if (Math.abs(arr[i] - arr[j]) <= a &&
                    Math.abs(arr[j] - arr[k]) <= b &&
                    Math.abs(arr[i] - arr[k]) <= c) {
                    returnValue++;
                }

            }
        }
    }

    return returnValue;

};





// some test cases
console.log(countGoodTriplets([3,0,1,1,9,7], 7, 2, 3)); // 4
console.log(countGoodTriplets([1,1,2,2,3], 0, 0, 1)); // 0