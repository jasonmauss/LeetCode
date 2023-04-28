// Solution for: https://leetcode.com/problems/calculate-delayed-arrival-time/
const findDelayedArrivalTime = (arrivalTime: number, delayedTime: number): number => {

    return (arrivalTime + delayedTime) >= 24 ? (arrivalTime + delayedTime) % 24 : arrivalTime + delayedTime;

};





// some test cases
console.log(findDelayedArrivalTime(15, 5)); // 20
console.log(findDelayedArrivalTime(13, 11)); // 0
console.log(findDelayedArrivalTime(13, 17)); // 6
console.log(findDelayedArrivalTime(23, 23)); // 22
