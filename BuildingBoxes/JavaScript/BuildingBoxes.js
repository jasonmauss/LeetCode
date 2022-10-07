// Solution for: https://leetcode.com/problems/building-boxes/
const minimumBoxes = (n) => {
    //Binary search for the height of the biggest triangle I can create with n cubes available.
    let lowEnd = 1;
    let hiEnd = n;
    let result = 0;
    const totalCubes = x => x * (x + 1) * (x + 2) / 6; //the total cubes of a triangle with height x
    while (lowEnd + 1 < hiEnd) {
        let mid = lowEnd + hiEnd >> 1;
        if (totalCubes(mid) <= n)
            lowEnd = mid;
        else
            hiEnd = mid;
    }
    const floorFunc = (x) => Math.floor(Math.sqrt(2 * x) + 1 / 2); // the i-th element of the sequence 1,2,2,3,3,3,4,4,4,4,5,...
    result = (lowEnd) * (lowEnd + 1) / 2; // the base of the largest complete triangle 1+2+3+..+H
    n -= totalCubes(lowEnd); //remove the cubes of the complete triangle
    return result + floorFunc(n);
};
// some test cases
console.log(minimumBoxes(3)); // 3
console.log(minimumBoxes(4)); // 3
console.log(minimumBoxes(10)); // 6
