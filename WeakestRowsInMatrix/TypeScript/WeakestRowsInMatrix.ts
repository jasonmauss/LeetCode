// Solution for: https://leetcode.com/problems/the-k-weakest-rows-in-a-matrix/

const kWeakestRows = (mat: number[][], k: number): number[] => {

    const weaknessMap: Map<String, Number> = new Map<String, Number>();

    mat.forEach((row, index) => {
        weaknessMap.set(index.toString(), 0);
        let sum:number = row.reduce((prev, next) => prev + next);
        weaknessMap[index] = sum;
    });

    return Object.entries(weaknessMap)
        .sort(([, a], [, b]) => a - b)
        .map(([key]) => Number(key))
        .slice(0, k);
};

// some test cases
console.log(kWeakestRows(
   [[1,1,0,0,0],
    [1,1,1,1,0],
    [1,0,0,0,0],
    [1,1,0,0,0],
    [1,1,1,1,1]], 3)); // [2,0,3]


console.log(kWeakestRows(
   [[1,0,0,0],
    [1,1,1,1],
    [1,0,0,0],
    [1,0,0,0]], 2)); // [0,2]