// Solution for: https://leetcode.com/problems/pancake-sorting/
const pancakeSort = (arr: number[]): number[] => {
    
    const sortedCopy = [...arr].sort((a, b) => a - b);
    const pancakeFlips: number[] = [];

    const flipIt = (curPos:number, nextPos:number):void => {
        const firstFlip = arr.splice(0, curPos + 1);
        firstFlip.reverse();
        const nextSegment = arr.splice(0, nextPos - curPos);
        const secondFlip = [...firstFlip, ...nextSegment].reverse();
        arr = [...secondFlip, ...arr];
        pancakeFlips.push(curPos + 1, nextPos + 1);
    };

    for(let i = sortedCopy.length - 1; i >= 0; --i) {
        if(arr[i] !== sortedCopy[i]) {
            flipIt(arr.indexOf(sortedCopy[i]), i);
        }
    }

    return pancakeFlips;

};




// some tests
console.log(pancakeSort([3,2,4,1])); // [4,2,4,3]
console.log(pancakeSort([1,2,3])); // []