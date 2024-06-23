// Solution for: https://leetcode.com/problems/valid-perfect-square/

function isPerfectSquare(num: number): boolean {
    
    let lesserNum = 1;
    let higherNum = num;

    while(lesserNum <= higherNum) {
        const middleNum = Math.floor((lesserNum + higherNum) / 2);

        const squaredResult = middleNum * middleNum;

        if(squaredResult === num) return true;

        else if(squaredResult < num) lesserNum = middleNum + 1;

        else higherNum = middleNum - 1;
    }

    return false;

};




// some test cases
console.log(isPerfectSquare(16)); // true
console.log(isPerfectSquare(14)); // false
