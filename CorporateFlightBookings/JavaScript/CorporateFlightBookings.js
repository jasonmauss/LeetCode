// Solution for: https://leetcode.com/problems/corporate-flight-bookings/
const corpFlightBookings = (bookings, n) => {
    const answer = Array(n).fill(0);
    for (let i = 0; i < bookings.length; i++) {
        const [first, last, seats] = bookings[i];
        for (let j = first - 1; j < last; j++) {
            answer[j] += seats;
        }
    }
    return answer;
};
// some test cases
console.log(corpFlightBookings([[1, 2, 10], [2, 3, 20], [2, 5, 25]], 5)); // [10,55,45,25,25]
console.log(corpFlightBookings([[1, 2, 10], [2, 2, 15]], 2)); // [10,25]
