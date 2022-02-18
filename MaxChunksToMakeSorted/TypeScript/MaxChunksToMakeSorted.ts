// Solution for: https://leetcode.com/problems/max-chunks-to-make-sorted/
const maxChunksToSorted = (arr: number[]): number => {

    let chunks:number = 0;
    let gaps:number = 0;
    let notHoles:number = 0;
    let lastHoleIndex:number = -1;

    for (let i = 0; i < arr.length; ++i) {

        gaps++;
        
        const holeIndex = arr[i];
        lastHoleIndex = Math.max(holeIndex, lastHoleIndex);  
              
        notHoles = lastHoleIndex + 1 - gaps;
        if (notHoles === 0) chunks++;
    }

    return chunks;

};


// some test cases
console.log(maxChunksToSorted([4,3,2,1,0])); // 1
console.log(maxChunksToSorted([1,0,2,3,4])); // 4