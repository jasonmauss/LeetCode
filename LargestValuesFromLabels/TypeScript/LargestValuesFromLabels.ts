// Solution for: https://leetcode.com/problems/largest-values-from-labels/
const largestValsFromLabels = (values: number[], labels: number[], numWanted: number, useLimit: number): number => {

    // fill an array with objects holding the labels and their values
    const obj = [];

    for(let i:number = 0;i < values.length; i++){
        obj.push({key:labels[i],value:values[i]})
    }
	
    // sort by their value
    obj.sort((a,b) => a.value - b.value);
	
    const map = new Map();

    let result:number = 0;

    // store the last/max value and it's label in a map and keep
    // checking if label's usage limit has been reached or not
    // repeat while there are items in the array and numWanted > 0
    while(obj.length > 0 && numWanted > 0){

        const lastObj = obj.pop();
        map.set(lastObj.key, map.get(lastObj.key) + 1 || 1);
        if(map.get(lastObj.key) <= useLimit) {
            result += lastObj.value;
            numWanted--;
        }
    }
    return result;

};



// some test cases
console.log(largestValsFromLabels([5,4,3,2,1], [1,1,2,2,3], 3, 1)); // 9
console.log(largestValsFromLabels([5,4,3,2,1], [1,3,3,3,2], 3, 2)); // 12
console.log(largestValsFromLabels([9,8,8,7,6], [0,0,0,1,1], 3, 1)); // 16