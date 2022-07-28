// Solution for: https://leetcode.com/problems/stone-game-iii/
const stoneGameIII = (stoneValue: number[]): string => {

    const stoneValues = new Array(stoneValue.length).fill(-Infinity);

    for (let i = stoneValue.length - 1; i >= 0; i--) {
        let points = 0;
        for (let stones = 1; stones <= 3; stones++) {
            if (i + stones > stoneValue.length) break;
            points += stoneValue[i + stones - 1];
            stoneValues[i] = Math.max(stoneValues[i], points - (stoneValues[i + stones] || 0));
        }
    }

    if (stoneValues[0] === 0) return 'Tie';
    if (stoneValues[0] > 0) return 'Alice';
    return 'Bob';

};



// some test cases
console.log(stoneGameIII([1,2,3,7])); // Bob
console.log(stoneGameIII([1,2,3,-9])); // Alice
console.log(stoneGameIII([1,2,3,6])); // Tie