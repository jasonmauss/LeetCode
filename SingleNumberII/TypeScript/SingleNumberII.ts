// Solution for: https://leetcode.com/problems/single-number-ii/

const singleNumber = (nums: number[]): number => {
    
    const countsArray = [];

    for(let num of nums) {
        let potentiallyExistingObject = countsArray.find((obj) => obj.id === num);
        if(potentiallyExistingObject) {
            potentiallyExistingObject.value += 1;
        } else {
            countsArray.push({id:num, value: 1});
        }
    }

    return countsArray.find((obj) => obj.value === 1).id;

};



// some test cases
console.log(singleNumber([2,2,3,2])); // 3
console.log(singleNumber([0,1,0,1,0,1,99])); // 99