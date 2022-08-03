// Solution for: https://leetcode.com/problems/smallest-range-covering-elements-from-k-lists/
const smallestRange = (nums) => {
    let orderedRange = [];
    let answer = [];
    for (let i = 0; i < nums.length; i++) {
        for (let j = 0; j < nums[i].length; j++) {
            orderedRange.push([nums[i][j], i + 1]);
        }
    }
    orderedRange = orderedRange.sort((a, b) => a[0] - b[0]);
    let rangeStart = 0;
    let rangeEnd = 0;
    let uniqueGroups = nums.length;
    let totalCountOfUniqueGroups = 0;
    let groupMap = {};
    while (rangeEnd < orderedRange.length) {
        const currentElement = orderedRange[rangeEnd];
        if (!groupMap[currentElement[1]]) {
            totalCountOfUniqueGroups++;
        }
        groupMap[currentElement[1]] = (groupMap[currentElement[1]] || 0) + 1;
        if (totalCountOfUniqueGroups === uniqueGroups) {
            while (groupMap[orderedRange[rangeStart][1]] > 1) {
                groupMap[orderedRange[rangeStart][1]]--; //minialize range
                rangeStart++;
            }
            if (answer.length === 0 || (answer[1] - answer[0] > orderedRange[rangeEnd][0] - orderedRange[rangeStart][0])) {
                answer = [orderedRange[rangeStart][0], orderedRange[rangeEnd][0]];
            }
        }
        rangeEnd++;
    }
    return answer;
};
// some test cases
console.log(smallestRange([[4, 10, 15, 24, 26], [0, 9, 12, 20], [5, 18, 22, 30]])); // [20,24]
console.log(smallestRange([[1, 2, 3], [1, 2, 3], [1, 2, 3]])); // [1,1]
