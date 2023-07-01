// Solution for: https://leetcode.com/problems/valid-boomerang/solutions/287019/java-0ms-solution/
const isBoomerang = (points: number[][]): boolean => {

    let x1 = points[0][0];
    let x2 = points[1][0];
    let x3 = points[2][0];

    let y1 = points[0][1];
    let y2 = points[1][1];
    let y3 = points[2][1];

    if ((((x1 - x2) * (y2 - y3)) - ((x2 - x3) * (y1 - y2))) == 0)
        return false;
    else
        return true;

};





// some test cases
console.log(isBoomerang([[1,1],[2,3],[3,2]])); // true
console.log(isBoomerang([[1,1],[2,2],[3,3]])); // false