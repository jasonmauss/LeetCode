// Solution for: https://leetcode.com/problems/sum-of-unique-elements/
const sumOfUnique = (nums: number[]): number =>{

    let sumOfValues = 0;
    const duplicateValueSet = new Set();
    const uniqueValueSet = new Set();

    for(let num of nums) {
        if(!uniqueValueSet.has(num) && !duplicateValueSet.has(num)) {
            uniqueValueSet.add(num);
        } else {
            uniqueValueSet.delete(num);
            duplicateValueSet.add(num);
        }
    }

    for (let [key, value] of uniqueValueSet.entries()) {
        sumOfValues += Number(value);
    }

    return sumOfValues;
};







// some test cases
console.log(sumOfUnique([1,2,3,2])); // 4
console.log(sumOfUnique([1,1,1,1,1])); // 0
console.log(sumOfUnique([1,2,3,4,5])); // 15