// Solution for:https://leetcode.com/problems/falling-squares/
class Interval {
    start;
    end;
    height;
    constructor(start, end, height) {
        this.start = start;
        this.end = end;
        this.height = height;
    }
}
const getHeight = (intervals, cur) => {
    let preMaxHeight = 0;
    for (const interval of intervals) {
        if (interval.end <= cur.start)
            continue;
        if (interval.start >= cur.end)
            continue;
        preMaxHeight = Math.max(preMaxHeight, interval.height);
    }
    cur.height += preMaxHeight;
    intervals.push(cur);
    return cur.height;
};
const fallingSquares = (positions) => {
    const result = [];
    const intervals = [];
    let h = 0;
    for (const pos of positions) {
        const cur = new Interval(pos[0], pos[0] + pos[1], pos[1]);
        h = Math.max(h, getHeight(intervals, cur));
        result.push(h);
    }
    return result;
};
// some test cases
console.log(fallingSquares([[1, 2], [2, 3], [6, 1]])); // [2,5,5]
console.log(fallingSquares([[100, 100], [200, 100]])); // [100,100]
