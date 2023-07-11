// Solution for: https://leetcode.com/problems/check-if-the-number-is-fascinating/
const isFascinating = (n: number): boolean => {

    let twoTimes = (n * 2).toString();
    let threeTimes = (n * 3).toString();

    let numberConcat = n.toString() + twoTimes + threeTimes;
    let numberConcatArray = numberConcat.split('');

    for(let i = 1; i < 10; i++) {
        if(numberConcatArray.filter(x => x === i.toString()).length !== 1) {
            return false;
        }
    }

    return true;

};






// some test cases
console.log(isFascinating(192)); // true
console.log(isFascinating(100)); // false
