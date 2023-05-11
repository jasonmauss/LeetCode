// Solution for: https://leetcode.com/problems/find-the-highest-altitude/
const largestAltitude = (gain: number[]): number => {

    let runningTotal = 0;
    let highestNum = 0;

    for(let g of gain) {
        runningTotal += g;
        highestNum = Math.max(runningTotal, highestNum);
    }

    return highestNum;

};






// some test cases
console.log(largestAltitude([-5,1,5,0,-7])); // 1
console.log(largestAltitude([-4,-3,-2,-1,4,3,2])); // 0