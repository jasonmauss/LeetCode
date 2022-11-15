// Solution for: https://leetcode.com/problems/jump-game-iv/
const getValuePositionsMap = (arr:number[]):Map<number, number[]> => {

    let result = new Map();

    for(let i=arr.length-1;i>=0;i--) {
        if(!result.has(arr[i])) {
            result.set(arr[i], []); 
        }
        result.get(arr[i]).push(i);
    }

    return result;
}

const findAllOptions = (arr:number[], currP:number, mySet:Set<number>, valuePositionsMap:Map<number, number[]>):number[] => {

    let result = [];

    if(currP > 0 && arr[currP-1] != arr[currP] && !mySet.has(currP-1)) {
        result.push(currP-1);
    }

    if(currP < arr.length-1 && arr[currP+1] != arr[currP] && !mySet.has(currP+1)) {
        result.push(currP+1);
    }

    if(valuePositionsMap.has(arr[currP])) {

        for(let i of valuePositionsMap.get(arr[currP])) {
            if(i != currP && !mySet.has(i)) {
                result.push(i);
            }
        }

        valuePositionsMap.delete(arr[currP]);
    }

    return result;
}

const minJumps = (arr: number[]): number => {

    let valuePositionsMap = getValuePositionsMap(arr);
    let mySet = new Set<number>();
    mySet.add(0);
    let aoArray = [0];
    let counter = 0;

    while(!mySet.has(arr.length - 1)) {
        counter++;
        let newArray = [];
        for(let currP of aoArray) {
            for(let item of findAllOptions(arr, currP, mySet, valuePositionsMap)) {
                newArray.push(item);
                mySet.add(item);
                if(item == arr.length-1) {
                    break;
                }
            }
            if(mySet.has(arr.length-1)) {
                break;
            }
        }
        aoArray = newArray;
    }

    return counter;

};





// some test cases
console.log(minJumps([100,-23,-23,404,100,23,23,23,3,404])); // 3
console.log(minJumps([7])); // 0
console.log(minJumps([7,6,9,6,9,6,9,7])); // 1