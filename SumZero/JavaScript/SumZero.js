// Solution for: https://leetcode.com/problems/find-n-unique-integers-sum-up-to-zero/
const sumZero = (n) => {
    const uniqueNumbers = [];
    if (n === 1)
        return [0];
    for (let i = 1; uniqueNumbers.length < n; i++) {
        uniqueNumbers.push(i);
        if (uniqueNumbers.length === n) {
            uniqueNumbers[uniqueNumbers.length - 2] =
                (uniqueNumbers[uniqueNumbers.length - 1] +
                    uniqueNumbers[uniqueNumbers.length - 3]) * -1;
        }
        else {
            uniqueNumbers.push(i * -1);
        }
    }
    return uniqueNumbers.sort((a, b) => a - b);
};
// some test cases
console.log(sumZero(5)); //  [-7,-1,1,3,4] or [-5,-1,1,2,3] or [-3,-1,2,-2,4]
console.log(sumZero(3)); //  [-1,0,1]
console.log(sumZero(1)); //  [0]
