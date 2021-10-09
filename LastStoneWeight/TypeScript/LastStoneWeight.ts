// Solution for: https://leetcode.com/problems/last-stone-weight/
const lastStoneWeight = (stones: number[]): number => {

    let needToSmash:boolean = stones.length > 1;

    // sort heaviest to lightest
    stones.sort((a,b) => b - a);
    
    while (needToSmash) {

        let firstStone = stones.shift(); // heaviest
        let secondStone = stones.shift(); // next heaviest
        
        // smash the stones
        if(firstStone !== secondStone) {
            firstStone = firstStone - secondStone;
            stones.push(firstStone);
            stones.sort((a,b) => b - a);
        }
       
        needToSmash = stones.length > 1     
    }

    return stones.length > 0 ? Math.min(...stones) : 0;
};

// some test cases
console.log(lastStoneWeight([2,7,4,1,8,1])); // 1
console.log(lastStoneWeight([1])); // 1
