// Solution for: https://leetcode.com/problems/ugly-number/

const isUgly = (n: number): boolean => {
    
    const maxDivide= (a: number, b: number): number => {
        while (a % b == 0) {
            a /= b;
        }
        return a;
    }

    if (n == 0) return false;
    n = maxDivide(n, 2);
    n = maxDivide(n, 3);
    n = maxDivide(n, 5);

    return n == 1;

};



// some test cases
console.log(isUgly(6)); // true
console.log(isUgly(1)); // true
console.log(isUgly(14)); // false