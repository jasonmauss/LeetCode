// Solution for: https://leetcode.com/problems/number-of-equivalent-domino-pairs/
function numEquivDominoPairs(dominoes: number[][]): number {

    let dominoMap = new Map();
    let pairCount = 0;

    for (let [num1 , num2] of dominoes) {

        let key = num1 < num2 ? `${num1}${num2}` : `${num2}${num1}`;

        if (dominoMap.has(key)) {
            let currentPairCount = dominoMap.get(key) + 1;
            dominoMap.set(key, currentPairCount);
            pairCount += currentPairCount;
        } else {
            dominoMap.set(key, 0);
        }
    }

    return pairCount;
};

// some test cases
console.log(numEquivDominoPairs([[1,2],[2,1],[3,4],[5,6]])); // 1
console.log(numEquivDominoPairs([[1,2],[1,2],[1,1],[1,2],[2,2]])); // 3
console.log(numEquivDominoPairs([[3,4],[4,3],[1,1],[2,2],[2,2]])); // 2