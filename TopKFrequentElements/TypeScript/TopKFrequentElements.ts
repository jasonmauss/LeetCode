// Solution for: https://leetcode.com/problems/top-k-frequent-elements/
const topKFrequent = (nums: number[], k: number): number[] => {

    const numsToFrequencyMap: { [key: number]: number } = {};

    for (let i:number = 0; i < nums.length; i++) {
        const elem = nums[i];
        if (numsToFrequencyMap[elem] !== undefined) {
            numsToFrequencyMap[elem] += 1;
        } else {
            numsToFrequencyMap[elem] = 1;
        }
    }

    const order: [number, number][] = [];

    for (const key in numsToFrequencyMap) {
        const frequency = numsToFrequencyMap[key];
        order.push([Number(key), Number(frequency)]);
    }

    order.sort((a, b) => b[1] - a[1]);

    const res: number[] = [];
    for (let i:number = 0; i < k; i++) {
        const elem = order[i];
        const num = elem[0];
        res.push(num);
    }

    return res;

};

// some test cases
console.log(topKFrequent([1,1,1,2,2,3], 2)); // [1,2]
console.log(topKFrequent([1], 1)); // [1]