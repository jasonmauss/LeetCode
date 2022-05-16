// Solution for: https://leetcode.com/problems/maximum-candies-allocated-to-k-children/
const maximumCandies = (candies, k) => {
    const ok = (min_candy) => {
        let count = 0;
        for (let candy of candies) {
            count += Math.floor(candy / min_candy);
        }
        return count >= k;
    };
    let low = 0;
    let high = Math.max(...candies);
    while (low <= high) {
        let mid = low + Math.trunc((high - low) / 2);
        if (ok(mid))
            low = mid + 1;
        else
            high = mid - 1;
    }
    return high;
};
// some test cases
console.log(maximumCandies([5, 8, 6], 3)); // 5
console.log(maximumCandies([2, 5], 11)); // 0
