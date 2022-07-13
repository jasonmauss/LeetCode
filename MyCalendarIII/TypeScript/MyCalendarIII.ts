// Solution for: https://leetcode.com/problems/my-calendar-iii/
class MyCalendarThree {
    startTimes:number[];
    endTimes:number[];

    constructor() {
        this.startTimes = [];
        this.endTimes = [];
    }

    insertTimeSlot(times:number[], time:number) {
        if(times.length === 0) {
            times.push(time)
            return;
        }
        let left = 0;
        let right = times.length - 1;
    
        while(left <= right) {
            const mid = (left + right) >>> 1;
            const previousTime = times[mid];
            if (time >= previousTime) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
    
        }
        times.splice(left, 0, time)
    }

    book(start: number, end: number): number {

        this.insertTimeSlot(this.startTimes, start)
        this.insertTimeSlot(this.endTimes, end)
        let overlaps = 0;
        let prevEndTimeIndex = 0;
        for (let i = 0; i < this.startTimes.length; i++) {
            if (this.startTimes[i] < this.endTimes[prevEndTimeIndex]) overlaps++;
            else prevEndTimeIndex++
        }
      
        return overlaps;

    }
    
}

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