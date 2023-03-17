// Solution for: https://leetcode.com/problems/rings-and-rods/
const countPoints = (rings: string): number => {

    const rodRingCombinations = new Array(10).fill(new Set()).map(_ => new Set());
    let totalRodsWithAllColors = new Set();

    for (let i = 0; i < rings.length; i += 2) {
        let ringColor = rings[i];
        let rodIndex = rings[i + 1];
        rodRingCombinations[rodIndex].add(ringColor);
        if (rodRingCombinations[rodIndex].size === 3) totalRodsWithAllColors.add(rodIndex);
    }
    
    return totalRodsWithAllColors.size;

};




// some test cases
console.log(countPoints('B0B6G0R6R0R6G9')); // 1
console.log(countPoints('B0R0G0R9R0B0G0')); // 1
console.log(countPoints('G4')); // 0