// Solution for: https://leetcode.com/problems/next-greater-element-i

const nextGreaterElement = (nums1: number[], nums2: number[]): number[] => {
    
    const returnElements:number[] = [];
    let elementFound:boolean = false;

    for(let num of nums1) {
        let valToPush = -1;
        for(let i = 0; i < nums2.length; i++) {

            if(num === nums2[i]) {
                elementFound = true;
            }

            if(elementFound && nums2[i] > num) {
                valToPush = nums2[i];
            }

            if(i === nums2.length - 1 || valToPush !== -1) {
                returnElements.push(valToPush);
                break;
            }
        }
        
        elementFound = false;
    }

    return returnElements;

};



// some test cases
console.log(nextGreaterElement([4,1,2], [1,3,4,2])); // [-1, 3, -1]
console.log(nextGreaterElement([2,4], [1,2,3,4])); // [3, -1]