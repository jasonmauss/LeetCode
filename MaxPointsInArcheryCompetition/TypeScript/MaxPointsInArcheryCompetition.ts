// Solution for: https://leetcode.com/problems/maximum-points-in-an-archery-competition/
const maximumBobPoints = (numArrows: number, aliceArrows: number[]): number[] => {

	type CacheKey = `${number}-${number}`;

    // cache to store the results
    const cache: Record<CacheKey, number> = {};
    // function to form the key for us when we have a number and arrows left
    const getCacheKey = (i: number, arrowsLeft: number): CacheKey => `${i}-${arrowsLeft}`;
    
    // determine max points possible if starting at k-th target with certain arrows left
    const determinePoints = (n: number, arrowsLeft: number) => {
        if (n === aliceArrows.length || arrowsLeft <= 0) return 0;
        
        const key = getCacheKey(n, arrowsLeft);
        if (key in cache) return cache[key];
        
        const requiredArrows = aliceArrows[n] + 1;
        let result = Math.max(determinePoints(n + 1, arrowsLeft),
                requiredArrows <= arrowsLeft
                ? determinePoints(n + 1, arrowsLeft - requiredArrows) + n
				: 0
        )
        cache[key] = result;
        return result;
    }
    
    const bobsArrows = [...aliceArrows];

    for (let i = 1; i < aliceArrows.length; i++) {
        const maxResultFromCurrent = determinePoints(i, numArrows);
        const maxResultFromNext = determinePoints(i + 1, numArrows);
        
        if (maxResultFromCurrent == maxResultFromNext) {
            bobsArrows[i] = 0;
        } else {
            bobsArrows[i]++;
            numArrows -= bobsArrows[i];
        }
    }
    
    bobsArrows[0] = numArrows;
    return bobsArrows;

};



// some test cases
console.log(maximumBobPoints(9, [1,1,0,1,0,0,2,1,0,1,2,0])); // [0,0,0,0,1,1,0,0,1,2,3,1]
console.log(maximumBobPoints(3, [0,0,1,0,0,0,0,0,0,0,0,2])); // [0,0,0,0,0,0,0,0,1,1,1,0]