// Solution for: https://leetcode.com/problems/count-asterisks/
const countAsterisks = (s) => {
    let asteriskCount = 0;
    const verticalBarGroups = s.split('|');
    for (let verticalBarIndex = 0; verticalBarIndex < verticalBarGroups.length; verticalBarIndex += 2) {
        asteriskCount += verticalBarGroups[verticalBarIndex].split('*').length - 1;
    }
    return asteriskCount;
};
// some test cases
console.log(countAsterisks("l|*e*et|c**o|*de|")); // 2
console.log(countAsterisks("iamprogrammer")); // 0
console.log(countAsterisks("yo|uar|e**|b|e***au|tifu|l")); // 5
