// Solution for: https://leetcode.com/problems/happy-number/
const getNextValue = (n:number): number => {
    
    let totalSum:number = 0;

    while(n > 0) {
        let d:number = n % 10;
        n = Math.floor(n / 10);
        totalSum += d * d;
    }

    return totalSum;
};

const isHappy = (n: number): boolean => {

    while(n !== 1 && n !== 4) {
        n = getNextValue(n);
    }

    return n === 1;

};

// some test cases
console.log(isHappy(19)); //  true
console.log(isHappy(2)); //  false