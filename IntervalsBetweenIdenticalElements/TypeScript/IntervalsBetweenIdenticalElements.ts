// Solution for: https://leetcode.com/problems/intervals-between-identical-elements/
const getDistances = (arr: number[]): number[] => {

    const n = arr.length;
    const result = Array(n).fill(0);
    const map = new Map<number, number[]>();
    
    const processItem = (i: number): void => {
        const curr = arr[i]; 
        if (map.has(curr)) {
            const [acc, prev, count] = map.get(curr);
            const nextAcc = Math.abs(i - prev) * count + acc;
            result[i] += nextAcc;
            map.set(curr, [nextAcc, i, count + 1]);
        } else {
            map.set(curr, [0, i, 1]);
        }
    }
    
    for(let i=0; i < n; i++) processItem(i);
    map.clear();
    for(let i = n-1; i >= 0; i--) processItem(i)
    
    return result;
};


// some test cases
console.log(getDistances([2,1,3,1,2,3,3])); // [4,2,7,2,4,4,5]
console.log(getDistances([10,5,10,10])); // [5,0,3,4]