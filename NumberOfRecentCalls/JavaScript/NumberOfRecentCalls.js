// Solution for: https://leetcode.com/problems/number-of-recent-calls/
var RecentCounter = /** @class */ (function () {
    function RecentCounter() {
        this.recentCalls = [];
    }
    RecentCounter.prototype.ping = function (t) {
        this.recentCalls.push(t);
        return this.recentCalls.filter(function (calls) { return t - 3000 <= calls && calls <= t; }).length;
        ;
    };
    return RecentCounter;
}());
/**
 * Your RecentCounter object will be instantiated and called as such:
 * var obj = new RecentCounter()
 * var param_1 = obj.ping(t)
 */
// some tests cases
var rc = new RecentCounter();
console.log(rc.ping(1));
console.log(rc.ping(100));
console.log(rc.ping(3001));
console.log(rc.ping(3002));
