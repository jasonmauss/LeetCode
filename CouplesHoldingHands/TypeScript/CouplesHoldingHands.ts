// Solution for: https://leetcode.com/problems/couples-holding-hands/
const minSwapsCouples = (row: number[]): number => {

    let result = 0;
    const processed = new Set();
    const pairMap = new Map(row.map((val, i) => [val, i]));

    const findNeighborIndex = (index:number):number => {
        return index + (index % 2 === 0 ? 1 : -1);
    }

    const findPairValue = (value:number):number => {
        return value + (value % 2 === 0 ? 1 : -1);
    }

    const findLoopLength = (index:number, targetValue:number):number => {

        const pairValue = findPairValue(row[index]);
        const pairIndex = pairMap.get(pairValue);
        const pairNeighborIndex = findNeighborIndex(pairIndex);

        processed.add(index).add(findNeighborIndex(index)).add(pairIndex).add(pairNeighborIndex);

        if (row[pairNeighborIndex] === targetValue) {
            return 1;
        }

        return 1 + findLoopLength(pairNeighborIndex, targetValue);
    }

    for(let i = 0; i < row.length && processed.size !== row.length; i += 2) {
        
        if (!processed.has(i)) {
            result += findLoopLength(i, row[i]) - 1;
        }
    }

    return result;

};




// some test cases
console.log(minSwapsCouples([0,2,1,3])); // 1
console.log(minSwapsCouples([3,2,0,1])); // 0