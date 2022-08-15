// Solution for: https://leetcode.com/problems/poor-pigs/
const poorPigs = (buckets: number, minutesToDie: number, minutesToTest: number): number => {

    let steps = Math.ceil(minutesToTest / minutesToDie);
    let total = 1;
    let result = 0;
    while (total < buckets) {
        total = total * (steps + 1);
        result++;
    }

    return result;
};





// some test cases
console.log(poorPigs(1000, 15, 60)); //  5
console.log(poorPigs(4, 15, 15)); //  2
console.log(poorPigs(4, 15, 30)); //  2