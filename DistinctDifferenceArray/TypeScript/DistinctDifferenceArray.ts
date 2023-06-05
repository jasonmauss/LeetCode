// Solution for: https://leetcode.com/problems/find-the-distinct-difference-array/
const distinctDifferenceArray = (nums: number[]): number[] => {

    const differences:number[] = [];

    for(let i = 0; i < nums.length; i++) {

        let distinctPrefixValues = new Set(nums.slice(0, i + 1)).size;
        let distinctSuffixValues = new Set(nums.slice(i + 1)).size;
        
        differences.push(distinctPrefixValues - distinctSuffixValues);

    }

    return differences;

};






// some test cases
console.log(distinctDifferenceArray([1,2,3,4,5])); // [-3,-1,1,3,5]
console.log(distinctDifferenceArray([3,2,3,4,2])); // [-2,-1,0,2,3]