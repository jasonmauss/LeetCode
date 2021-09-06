// Solution for: https://leetcode.com/problems/combination-sum/
const combinationSum = (candidates: number[], target: number): number[][] => {

    // result of all combinations that sum to target
    const combinations: number[][] = [];

    /**
     * helper dfs (depth-first search) function to generate all paths that sum to target
     * @param path current dfs path of numbers
     * @param sum current sum of numbers
     * @param last last index drawn
     */
    function dfs(path: number[], sum: number, last: number): void {
        // check if we've reached target sum (this is valid combo)
        if (sum === target) {
            // push to res and return to break
            combinations.push(path);
            return;
        }

        // iterate thru children (candidates in this case)
        // except, we start at last candidate drawn, to avoid duplicates
        for (let i = last; i < candidates.length; i++) {
            // check to see if adding this candidate can contribute to sum
            // don't do anything if it exceeds (it won't be valid)
            if (sum + candidates[i] <= target) {
                // note, it's important we spread the path array (make a copy of it with the destructuring "..." syntax)
                // so that all calls in recursion tree aren't modifying same array
                dfs([...path, candidates[i]], sum + candidates[i], i);
            }
        }
    }

    // Sort candidate values ascending. Sorting them because in the dfs function,
    // when iterating through candidate values, if the next number being added causes
    // us to exceed the target then we don't want to continue to that next number 
    // since it will only result in exceeding the target
    candidates.sort((a, b) => a - b);

    // call the dfs helper function with an initial empty path, because no candidate
    // values evaluated yet. Sum and last array position also start off at zero.)
    dfs([], 0, 0);

    return combinations;
};

// some test cases
console.log(combinationSum([2,3,6,7], 7)); // [[2,2,3],[7]]
console.log(combinationSum([2,3,5], 8)); // [[2,2,2,2],[2,3,3],[3,5]]
console.log(combinationSum([2], 1)); // []
console.log(combinationSum([1], 1)); // [[1]]
console.log(combinationSum([1], 2)); // [[1,1]]
