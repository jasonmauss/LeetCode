// Solution for: https://leetcode.com/problems/decompress-run-length-encoded-list/
const decompressRLElist = (nums: number[]): number[] => {

    const output:number[] = [];

    for(let i:number = 0; i < nums.length; i += 2) {
        
        const freq:number = nums[i];
        const val:number = nums[i + 1];

        for(let j:number = 0; j < freq; j++) {
            output.push(val);
        }
    }

    return output;
};


// some test cases
console.log(decompressRLElist([1,2,3,4])); // [2,4,4,4]
console.log(decompressRLElist([1,1,2,3])); // [1,3,3]
console.log(decompressRLElist([2,5,4,2,5,1])); // [5,5,2,2,2,2,1,1,1,1,1]