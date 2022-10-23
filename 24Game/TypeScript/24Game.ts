// Solution for: https://leetcode.com/problems/24-game/
const judgePoint24 = (cards: number[]): boolean => {

    cards = cards.map(num => Number(num.toFixed(4)));
    
    const computeNumberCalculations = (num1:number, num2:number):number[] => {
        return [num1 + num2, num1 - num2, num2 - num1, num1 * num2, num1/num2, num2/num1];
    };
    
    const dfs = (list) => {
        let size = list.length;
        if(size === 1) {
            if(Math.abs(list[0] - 24) < 0.001)
                return true;
            else
                return false;
        }
        
        for(let i = 0; i < size; i++) {
            for(let j = i + 1; j < size; j++) {
                let nextRound = [];
                for(let k = 0; k < size; k++) {
                    if(k !== i && k !== j) nextRound.push(list[k]);
                }

                for(let val of computeNumberCalculations(list[i], list[j])) {
                    nextRound.push(val);
                    if(dfs(nextRound)) return true;
                    else nextRound.pop();
                }
            }
        }
        return false;
    };
    
    return dfs(cards);

};


// some test cases
console.log(judgePoint24([4,1,8,7])); // true
console.log(judgePoint24([1,2,1,2])); // false