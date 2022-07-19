// Solution for: https://leetcode.com/problems/maximum-candies-you-can-get-from-boxes/
const maxCandies = (status, candies, keys, containedBoxes, initialBoxes) => {
    let boxesHeld = new Set(initialBoxes);
    let candyCount = 0;
    let eventOccured = true;
    while (eventOccured) {
        eventOccured = false;
        for (let box of boxesHeld) {
            if (status[box] === 1) {
                status[box] = 2;
                boxesHeld.delete(box);
                eventOccured = true;
                candyCount += candies[box];
                for (let key of keys[box]) {
                    if (status[key] === 0)
                        status[key] = 1;
                }
                for (let innerBox of containedBoxes[box]) {
                    if (status[innerBox] < 2)
                        boxesHeld.add(innerBox);
                }
            }
        }
    }
    return candyCount;
};
// some test cases
console.log(maxCandies([1, 0, 1, 0], [7, 5, 4, 100], [[], [], [1], []], [[1, 2], [3], [], []], [0])); // 16
console.log(maxCandies([1, 0, 0, 0, 0, 0], [1, 1, 1, 1, 1, 1], [[1, 2, 3, 4, 5], [], [], [], [], []], [[1, 2, 3, 4, 5], [], [], [], [], []], [0])); // 6
