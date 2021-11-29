// Solution for: https://leetcode.com/problems/element-appearing-more-than-25-in-sorted-array/
const findSpecialInteger = (arr: number[]): number => {

    let numberMap:Map<number, number> = new Map<number, number>();
    let occurenceMinimum = Math.floor(arr.length / 4);

    for(let i:number = 0; i < arr.length; i++) {
        let curVal = arr[i];
        numberMap.set(curVal, numberMap.has(curVal) ? numberMap.get(curVal) + 1 : 1);
        if(numberMap.get(curVal) > occurenceMinimum) {
            return curVal;
        }
    };

    return 0;
};



// some test cases
console.log(findSpecialInteger([1,2,2,6,6,6,6,7,10])); // 6
console.log(findSpecialInteger([1,1])); // 1