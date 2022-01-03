// Solution for: https://leetcode.com/problems/non-overlapping-intervals/
const eraseOverlapIntervals = (intervals: number[][]): number => {

    let result:number = -1;

    if(intervals.length < 2) return 0;

    intervals.sort((a, b) => a[1] - b[1]);

    let curInterval = intervals[0];


    for(let i of intervals) {
        if(curInterval[1] > i[0]) {
            result++
        } else {
            curInterval = i;
        }
    }

    return result;
};

// some test cases
console.log(eraseOverlapIntervals([[1,2],[2,3],[3,4],[1,3]])); // 1
console.log(eraseOverlapIntervals([[1,2],[1,2],[1,2]])); // 2
console.log(eraseOverlapIntervals([[1,2],[2,3]])); // 0