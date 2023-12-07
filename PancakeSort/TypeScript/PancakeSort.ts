// Solution for: https://leetcode.com/problems/pancake-sorting/
const pancakeSort = (arr: number[]): number[] => {
    
    const pancakeFlips: number[] = [];

    for(let i = arr.length; i > 0; --i) {
        if(i === arr[i - 1]) continue;

        const element = 1 + arr.indexOf(i);
        pancakeFlips.push(element, i);

        reverseArraySegment(arr, 0, element);
        reverseArraySegment(arr, 0, i);
    }

    return pancakeFlips;
};

const reverseArraySegment = (arraySegment: number[], minPos = 0, maxPos = arraySegment.length): void => {
    
    --maxPos;

    while(minPos < maxPos) {
        const tempVal = arraySegment[minPos];
        arraySegment[minPos++] = arraySegment[maxPos];
        arraySegment[maxPos--] = tempVal;
    }
};


// some tests
console.log(pancakeSort([3,2,4,1])); // [4,2,4,3]
console.log(pancakeSort([1,2,3])); // []