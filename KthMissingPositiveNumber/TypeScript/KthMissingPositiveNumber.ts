// Solution for: https://leetcode.com/problems/kth-missing-positive-number/
const findKthPositive = (arr: number[], k: number): number => {

    let index = 0;
    let last = 0;
    let i = 0;
  
    const map = new Map();
  
    arr.forEach((d) => {
        map.set(d, true);
    });
  
    while(index !== k){
        const next = i + 1;

        if(!map.has(next)){
            index++;
            last = next;
        }
    
        i++;
    }
  
    return last;

};

// some test cases
console.log(findKthPositive([2,3,4,7,11], 5)); // 9
console.log(findKthPositive([1,2,3,4], 2)); // 6