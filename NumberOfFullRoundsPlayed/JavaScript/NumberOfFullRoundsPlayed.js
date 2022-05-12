// Solution for: https://leetcode.com/problems/the-number-of-full-rounds-you-have-played/
const roundUp = (hour, minute) => {
    if (minute === 0)
        return { hour: hour, slot: 0 };
    if (minute <= 15)
        return { hour: hour, slot: 1 };
    if (minute <= 30)
        return { hour: hour, slot: 2 };
    if (minute <= 45)
        return { hour: hour, slot: 3 };
    return { hour: (hour + 1) % 24, slot: 0 };
};
const roundDown = (hour, minute) => {
    if (minute <= 14)
        return { hour: hour, slot: 0 };
    if (minute <= 29)
        return { hour: hour, slot: 1 };
    if (minute <= 44)
        return { hour: hour, slot: 2 };
    if (minute <= 59)
        return { hour: hour, slot: 3 };
};
const numberOfRounds = (loginTime, logoutTime) => {
    let [hour1, minute1] = loginTime.split(':').map(function (x) { return Number(x); });
    let [hour2, minute2] = logoutTime.split(':').map(function (x) { return Number(x); });
    if (hour1 === hour2 && minute2 - minute1 < 15 && minute2 - minute1 >= 0) {
        return 0;
    }
    let roundedLoginTime = roundUp(hour1, minute1);
    let roundedLogoutTime = roundDown(hour2, minute2);
    let count = 0;
    while (roundedLoginTime.hour !== roundedLogoutTime.hour || roundedLoginTime.slot !== roundedLogoutTime.slot) {
        // This handles midnight cases so no need concern if login < logout or login > logout
        roundedLoginTime.slot += 1;
        if (roundedLoginTime.slot === 4) {
            roundedLoginTime.slot = 0;
            roundedLoginTime.hour = (roundedLoginTime.hour + 1) % 24;
        }
        count += 1;
    }
    return count;
};
// some test cases
console.log(numberOfRounds("09:31", "10:14")); // 1
console.log(numberOfRounds("21:30", "03:00")); // 22
