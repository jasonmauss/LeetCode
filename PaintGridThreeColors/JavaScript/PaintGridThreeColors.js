// Solution for: https://leetcode.com/problems/painting-a-grid-with-three-different-colors
const colorTheGrid = (m, n) => {
    const getNextState = (prevState) => {
        // Get color of the 'state' at 'pos', use 2 bits to store a color
        const getColor = (state, pos) => (state >> (2 * pos)) & 3;
        // Set 'color' to the 'state' at 'pos', use 2 bits to store a color
        const setColor = (state, pos, color) => state | (color << (2 * pos));
        const result = [];
        const helper = (row, curState, prevState) => {
            if (row === m) {
                result.push(curState);
                return;
            }
            for (let i = 1; i <= 3; i++) {
                if (getColor(prevState, row) !== i &&
                    (row === 0 || getColor(curState, row - 1) !== i))
                    helper(row + 1, setColor(curState, row, i), prevState);
            }
        };
        helper(0, 0, prevState);
        return result;
    };
    const dp = Array.from(Array(n), () => Array(4 ** m));
    const dfs = (col = 0, prevState = 0) => {
        if (col === n)
            return 1;
        if (dp[col][prevState])
            return dp[col][prevState];
        let result = 0;
        for (const nextState of getNextState(prevState)) {
            result = (result + dfs(col + 1, nextState)) % (10 ** 9 + 7);
        }
        return (dp[col][prevState] = result);
    };
    return dfs();
};
// some test cases
console.log(colorTheGrid(1, 1)); // 3
console.log(colorTheGrid(1, 2)); // 6
console.log(colorTheGrid(5, 5)); // 580986
