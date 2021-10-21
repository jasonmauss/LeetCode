// Solution for: https://leetcode.com/problems/count-largest-group/
const countLargestGroup = (n: number): number => {

    let count:object = {};
    let largestCount:number = -Infinity;
    let returnVal:number = 0;
    
    for (let i:number = 1; i <= n; i++) {
        let sum:number = 0;
        let num:number = i;
        while (num > 0) {
            sum += num % 10;
            num = Math.floor(num / 10);
        }
        count[sum] ? count[sum] += 1 : count[sum] = 1;
        largestCount = Math.max(largestCount, count[sum]);

    }
    
    for (let key in count) {
        if (count[key] === largestCount) {
            returnVal++;
        }
    }

    return returnVal++;
};



// some test cases
console.log(countLargestGroup(13)); // 4
console.log(countLargestGroup(2)); // 2
console.log(countLargestGroup(15)); // 6
console.log(countLargestGroup(24)); // 5