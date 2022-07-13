// Solution for: https://leetcode.com/problems/my-calendar-iii/
var MyCalendarThree = /** @class */ (function () {
    function MyCalendarThree() {
        this.startTimes = [];
        this.endTimes = [];
    }
    MyCalendarThree.prototype.insertTimeSlot = function (times, time) {
        if (times.length === 0) {
            times.push(time);
            return;
        }
        var left = 0;
        var right = times.length - 1;
        while (left <= right) {
            var mid = (left + right) >>> 1;
            var previousTime = times[mid];
            if (time >= previousTime) {
                left = mid + 1;
            }
            else {
                right = mid - 1;
            }
        }
        times.splice(left, 0, time);
    };
    MyCalendarThree.prototype.book = function (start, end) {
        this.insertTimeSlot(this.startTimes, start);
        this.insertTimeSlot(this.endTimes, end);
        var overlaps = 0;
        var prevEndTimeIndex = 0;
        for (var i = 0; i < this.startTimes.length; i++) {
            if (this.startTimes[i] < this.endTimes[prevEndTimeIndex])
                overlaps++;
            else
                prevEndTimeIndex++;
        }
        return overlaps;
    };
    return MyCalendarThree;
}());
/**
 * Your MyCalendarThree object will be instantiated and called as such:
 * var obj = new MyCalendarThree()
 * var param_1 = obj.book(start,end)
 */
// some test cases
var obj = new MyCalendarThree();
var param_1 = obj.book(10, 20);
console.log(param_1);
var param_1 = obj.book(50, 60);
console.log(param_1);
var param_1 = obj.book(10, 40);
console.log(param_1);
var param_1 = obj.book(5, 15);
console.log(param_1);
var param_1 = obj.book(5, 10);
console.log(param_1);
var param_1 = obj.book(25, 55);
console.log(param_1);
