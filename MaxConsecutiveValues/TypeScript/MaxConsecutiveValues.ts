// Solution for: https://leetcode.com/problems/maximum-number-of-consecutive-values-you-can-make/
const getMaximumConsecutive = (coins: number[]): number => {

    coins.sort((a, b) => a - b);

    let maxConsecutive:number = 1; // 0 for [] can be assumed so initialize to 1
    
    for(let coin of coins) {
        if(coin <= maxConsecutive) maxConsecutive += coin;
    }

    return maxConsecutive; 

};

// some test cases
console.log(getMaximumConsecutive([1,3])); // 2
console.log(getMaximumConsecutive([1,1,1,4])); // 8
console.log(getMaximumConsecutive([1,4,10,3,1])); // 20