// Solution for: https://leetcode.com/problems/jump-game-v/
const maxJumps = (arr: number[], d: number): number => {

    const helper = (index:number): number => {
        if (cache[index] === 0) {
        
            let max = 0;
            
            for (let i = index + 1; i <= index + d && i < arr.length && arr[i] < arr[index]; ++i) {
                max = Math.max(helper(i), max);
            }

            for (let i = index - 1; i >= index - d && i >= 0 && arr[i] < arr[index]; --i) {
                max = Math.max(helper(i), max);
            }

            cache[index] = max + 1;
        }

        return cache[index];
    }

    const cache = new Uint16Array(1001);
    return Math.max(...(arr.map((v, i) => helper(i))));

};




// some test cases
console.log(maxJumps([6,4,14,6,8,13,9,7,10,6,12], 2)); // 4
console.log(maxJumps([3,3,3,3,3], 3)); // 1
console.log(maxJumps([7,6,5,4,3,2,1], 1)); // 7