// Solution for: https://leetcode.com/problems/chunk-array/
const chunk = (arr: any[], size: number): any[][] => {

    if(arr.length === 0) return [];

    const chunks = [];

    for(let i = 0; i < arr.length; i += size) {
        let tempChunk = [];
        for(let j = i; j < i + size; j++) {
            if(j < arr.length) {
                tempChunk.push(arr[j]);
            }
        }
        chunks.push(tempChunk);
    }

    return chunks;

};







// some test cases
console.log(chunk([1,2,3,4,5], 1)); // [[1],[2],[3],[4],[5]]
console.log(chunk([1,9,6,3,2], 3)); // [[1,9,6],[3,2]]
console.log(chunk([8,5,3,2,6], 6)); // [[8,5,3,2,6]]
console.log(chunk([], 1)); // []
