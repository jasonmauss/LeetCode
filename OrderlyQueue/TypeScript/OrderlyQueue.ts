// Solution for: https://leetcode.com/problems/orderly-queue/
const orderlyQueue = (s: string, k: number): string => {

    if(1 < k) {
        return [...s].sort().join('');
    } else {
        
        const mapFunction = (a, x):string => {
            if(s.slice(x) + s.slice(0, x) < a) {
                return s.slice(x) + s.slice(0, x);
            } else {
                return a;
            }
        };

        return Array.from({ length: s.length }, (_, i) => i).reduce(mapFunction, s);
    }
};





// some test cases
console.log(orderlyQueue('cba', 1)); // "acb"
console.log(orderlyQueue('baaca', 3)); // "aaabc"