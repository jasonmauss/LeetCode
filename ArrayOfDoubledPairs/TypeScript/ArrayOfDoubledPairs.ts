// Solution for: https://leetcode.com/problems/array-of-doubled-pairs/
const canReorderDoubled = (arr: number[]): boolean => {

    // sort the array to make our lives easier
    arr.sort((a, b) => a - b);

    // keep track of which numbers occur (key) and how many times (value)
    let numOccurenceMap:Map<number, number> = new Map<number, number>();

    // go through the array and populate the map based on the values
    for (let num of arr) {
        numOccurenceMap.set(num, (numOccurenceMap.get(num) || 0) + 1);
    }

    for (let num of arr) {
        if (numOccurenceMap.has(num)) {
            // find the match, divide by 2 for negatives, multiply by 2 for positives
            let matchingPairNum:number = num >= 0 ? num * 2 : num / 2;

            // if it wasn't in the array, return false
            if(!numOccurenceMap.has(matchingPairNum)) {
                return false;
            }

            // decrement the map value by 1 for both the number and it's matching pair
            // if that made the value zero, remove it from the map
            for (let key of [num, matchingPairNum]) {
                numOccurenceMap.set(key, numOccurenceMap.get(key) - 1);
                if (numOccurenceMap.get(key) === 0) {
                    numOccurenceMap.delete(key);
                }
            }
        }
    }

    return true;

};


// some test cases
console.log(canReorderDoubled([3,1,3,6])); // false
console.log(canReorderDoubled([2,1,2,6])); // false
console.log(canReorderDoubled([4,-2,2,-4])); // true