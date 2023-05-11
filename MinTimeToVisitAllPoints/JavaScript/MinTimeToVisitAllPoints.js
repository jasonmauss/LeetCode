// Solution for: https://leetcode.com/problems/minimum-time-visiting-all-points/
const minTimeToVisitAllPoints = (points) => {
    let minTime = 0;
    for (let positionCounter = 1; positionCounter < points.length; positionCounter++) {
        const xAxisTime = Math.abs(points[positionCounter][0] - points[positionCounter - 1][0]);
        const yAxisTime = Math.abs(points[positionCounter][1] - points[positionCounter - 1][1]);
        minTime += Math.max(xAxisTime, yAxisTime);
    }
    return minTime;
};
// some test cases
console.log(minTimeToVisitAllPoints([[1, 1], [3, 4], [-1, 0]])); // 7
console.log(minTimeToVisitAllPoints([[3, 2], [-2, 2]])); // 5
