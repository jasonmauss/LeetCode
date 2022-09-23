// Solution for: https://leetcode.com/problems/maximum-number-of-events-that-can-be-attended-ii/
const maxValue = (events, k) => {
    let eventValues = Array.from({ length: k + 1 }, (_) => Array(events.length).fill(0));
    events.sort((b, a) => b[0] > a[0] ? 1 : -1);
    const findEventValue = (index, maxEvents) => {
        if (maxEvents == 0 || index == events.length)
            return 0;
        let nextIndex;
        if (!eventValues[maxEvents][index]) {
            eventValues[maxEvents][index] = findEventValue(index + 1, maxEvents);
            for (let i = index + 1; i < events.length; i++)
                if (events[index][1] < events[i][0]) {
                    nextIndex = i;
                    break;
                }
            eventValues[maxEvents][index] = Math.max(eventValues[maxEvents][index], events[index][2] + (nextIndex ? findEventValue(nextIndex, maxEvents - 1) : 0));
        }
        return eventValues[maxEvents][index];
    };
    return findEventValue(0, k);
};
// some test cases
console.log(maxValue([[1, 2, 4], [3, 4, 3], [2, 3, 1]], 2)); // 7
console.log(maxValue([[1, 2, 4], [3, 4, 3], [2, 3, 10]], 2)); // 10
console.log(maxValue([[1, 1, 1], [2, 2, 2], [3, 3, 3], [4, 4, 4]], 3)); // 9
