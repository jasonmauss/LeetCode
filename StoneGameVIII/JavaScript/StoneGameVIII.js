// Solution for: https://leetcode.com/problems/stone-game-viii/
const stoneGameVIII = (stones) => {
    let n = stones.length;
    let prefix = [0];
    let dp = [...Array(n)];
    for (let i = 0; i < n; i++)
        prefix.push(prefix[prefix.length - 1] + stones[i]);
    let bestRight = prefix[n];
    let bestCurrent = 0;
    for (let i = n - 2; i >= 0; i--)
        bestCurrent = bestRight,
            //update what you re going to use in the future
            bestRight = Math.max(bestRight, prefix[i + 1] - bestCurrent);
    return bestCurrent;
};
// some test cases
console.log(stoneGameVIII([-1, 2, -3, 4, -5])); // 5
console.log(stoneGameVIII([7, -6, 5, 10, 5, -2, -6])); // 13
console.log(stoneGameVIII([-10, -12])); // -22
