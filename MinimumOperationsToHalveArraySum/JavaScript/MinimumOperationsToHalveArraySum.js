const { MaxPriorityQueue, } = require('@datastructures-js/priority-queue');
// Solution for: https://leetcode.com/problems/minimum-operations-to-halve-array-sum/
const halveArray = (nums) => {
    const maxPQ = new MaxPriorityQueue();
    let sum = 0;
    for (let num of nums) {
        sum += num;
        maxPQ.enqueue(num);
    }
    let afterReduced = sum / 2;
    let cnt = 0;
    while (sum > afterReduced) {
        const removed = maxPQ.dequeue().element;
        const half = removed / 2;
        sum -= half;
        maxPQ.enqueue(half);
        cnt++;
    }
    return cnt++;
};
// some test cases
console.log(halveArray([5, 19, 8, 1])); // 3
console.log(halveArray([3, 8, 20])); // 3
