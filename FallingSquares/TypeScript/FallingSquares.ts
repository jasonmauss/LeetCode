// Solution for:https://leetcode.com/problems/falling-squares/

class Interval {
    start:number
    end:number
    height:number

    constructor(start:number, end:number, height:number) {
        this.start = start;
        this.end = end;
        this.height = height;
    }
}

const getHeight = (intervals:Interval[], currentInterval:Interval) :number => {
    
    let currentMaxHeight = 0;

    for (const interval of intervals) {
        if (interval.end <= currentInterval.start)
            continue;
        if (interval.start >= currentInterval.end)
            continue;
            currentMaxHeight = Math.max(currentMaxHeight, interval.height);
    }

    currentInterval.height += currentMaxHeight;
    intervals.push(currentInterval);
    return currentInterval.height;

};

const fallingSquares = (positions: number[][]): number[] => {

    const result = [];
    const intervals = [];
    let height = 0;

    for (const p of positions) {
        const currentInterval = new Interval(p[0], p[0] + p[1], p[1]);
        height = Math.max(height, getHeight(intervals, currentInterval));
        result.push(height);
    }

    return result;

};




// some test cases
console.log(fallingSquares([[1,2],[2,3],[6,1]])); // [2,5,5]
console.log(fallingSquares([[100,100],[200,100]])); // [100,100]