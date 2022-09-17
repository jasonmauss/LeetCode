// Solution for: https://leetcode.com/problems/allocate-mailboxes/
const minDistance = (houses, k) => {
    houses.sort((b, a) => b - a);
    const numHouses = houses.length;
    let dp = Array.from({ length: numHouses }, _ => Array(k + 1)), prefixSum = [0];
    for (let i = 0; i < numHouses; i++) {
        prefixSum[i + 1] = prefixSum[i] + houses[i];
    }
    const minDistanceForHouses = (start, end) => {
        const mid = Math.trunc((start + end) / 2);
        return (prefixSum[end] -
            prefixSum[mid] -
            prefixSum[mid - ((end - start + 1) % 2)] +
            prefixSum[start - 1]);
    };
    const partition = (index, mailboxes) => {
        if (dp[index][mailboxes] === undefined) {
            if (numHouses - index === mailboxes) {
                dp[index][mailboxes] = 0;
            }
            else if (mailboxes === 1) {
                dp[index][mailboxes] = minDistanceForHouses(index + 1, numHouses);
            }
            else {
                dp[index][mailboxes] = Number.MAX_SAFE_INTEGER;
                for (let i = index; i <= numHouses - mailboxes; i++) {
                    dp[index][mailboxes] = Math.min(dp[index][mailboxes], minDistanceForHouses(index + 1, i + 1) +
                        partition(i + 1, mailboxes - 1));
                }
            }
        }
        return dp[index][mailboxes];
    };
    return partition(0, k);
};
// some test cases
console.log(minDistance([1, 4, 8, 10, 20], 3)); // 5
console.log(minDistance([2, 3, 5, 12, 18], 2)); // 9
