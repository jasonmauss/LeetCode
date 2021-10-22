// Solution for: https://leetcode.com/problems/number-of-recent-calls/
class RecentCounter {

    recentCalls:number[] = [];

    constructor() {

    }

    ping(t: number): number {
        this.recentCalls.push(t);
        return this.recentCalls.filter(calls => t - 3000 <= calls && calls <= t).length;;
    }
}

/**
 * Your RecentCounter object will be instantiated and called as such:
 * var obj = new RecentCounter()
 * var param_1 = obj.ping(t)
 */


// some tests cases
let rc:RecentCounter = new RecentCounter();
console.log(rc.ping(1));
console.log(rc.ping(100));
console.log(rc.ping(3001));
console.log(rc.ping(3002));