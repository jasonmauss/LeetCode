// Solution for: https://leetcode.com/problems/number-of-equivalent-domino-pairs/
function numEquivDominoPairs(dominoes: number[][]): number {

    let map = new Map();
    let count = 0;
    for (let [a , b] of dominoes) {
        let key = a < b ? `${a}${b}` : `${b}${a}`;

        if (map.has(key)) {
            let currentIndex = map.get(key) + 1;
            map.set(key, currentIndex);
            count += currentIndex;
        } else {
            map.set(key, 0);
        }
    }

    return count;
};

// some test cases
console.log(numEquivDominoPairs([[1,2],[2,1],[3,4],[5,6]])); // 1
console.log(numEquivDominoPairs([[1,2],[1,2],[1,1],[1,2],[2,2]])); // 3
console.log(numEquivDominoPairs([[3,4],[4,3],[1,1],[2,2],[2,2]])); // 2