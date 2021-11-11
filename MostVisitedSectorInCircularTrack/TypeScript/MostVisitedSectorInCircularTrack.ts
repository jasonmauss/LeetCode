// Solution for: https://leetcode.com/problems/most-visited-sector-in-a-circular-track/
const mostVisited = (n: number, rounds: number[]): number[] => {

    const startingRound:number = rounds[0];
    const endingRound:number = rounds[rounds.length-1];
    const result:number[] = [];
    
    if(startingRound <= endingRound) {
        
        for(let i:number = startingRound; i <= endingRound; i++) {
            result.push(i);
        }

    } else {
        
        for(let i:number = 1; i <= endingRound; i++) {
             result.push(i);
        }

        for(let i:number = startingRound; i <= n; i++) {
            result.push(i);
        }
    }

    return result;
};

// some test cases
console.log(mostVisited(4, [1,3,1,2])); //  [1,2]
console.log(mostVisited(2, [2,1,2,1,2,1,2,1,2])); //  [2]
console.log(mostVisited(7, [1,3,5,7])); //  [1,2,3,4,5,6,7]