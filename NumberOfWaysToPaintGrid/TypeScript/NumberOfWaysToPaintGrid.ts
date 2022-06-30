// Solution for: https://leetcode.com/problems/number-of-ways-to-paint-n-3-grid/
const numOfWays = (n: number): number => {
    
    let colors3 = 6
    let colors2 = 6
    let next2, next3
    
    for (let i = 2; i <= n; i++) {
        next2 = 3 * colors2 + 2 * colors3

        next3 = 2 * colors2 + 2 * colors3

        colors2 = next2 % 1000000007
        colors3 = next3 % 1000000007
    }  

    return (colors3 + colors2) % 1000000007

};



// some test cases
console.log(numOfWays(1)); // 12
console.log(numOfWays(5000)); // 30228214