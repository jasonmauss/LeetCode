// Solution for: https://leetcode.com/problems/combinations
const combine = (n: number, k: number): number[][] => {

    const combinations = [];

    const backtrack = (start: number, answer: number[]) =>{

        if (answer.length === k) {
            combinations.push([...answer]);
        }

        for (let i = start; i <= n && answer.length < k; i++) {
            answer.push(i)
            backtrack(i + 1, answer);
            answer.pop();
        }
    }

    backtrack(1, []);

    return combinations;

};



// some test cases
console.log(combine(4, 2)); // [[1,2],[1,3],[1,4],[2,3],[2,4],[3,4]]
console.log(combine(1, 1)); // [[1]]
