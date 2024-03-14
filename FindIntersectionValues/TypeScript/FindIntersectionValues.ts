// Solution for: https://leetcode.com/problems/find-common-elements-between-two-arrays/
const findIntersectionValues = (nums1: number[], nums2: number[]): number[] => {
    
    let firstIntersection:number = 0;
    let secondIntersection:number = 0;

    for(const num of nums1) {
        if(nums2.includes(num)) firstIntersection++;
    }

    for(const num of nums2) {
        if(nums1.includes(num)) secondIntersection++;
    }

    return [firstIntersection, secondIntersection];

};


// some tests[
console.log(findIntersectionValues([4,3,2,3,1], [2,2,5,2,3,6])); // [3,4]
console.log(findIntersectionValues([3,4,2,3], [1,5])); // [0,0]