// Solution for: https://leetcode.com/problems/distribute-candies

const distributeCandies = (candyType: number[]): number => {
    
    const uniqueCandies:Set<number> = new Set<number>(candyType);

    return Math.min(new Set<number>(candyType).size, (candyType.length / 2));

};



// some test cases
console.log(distributeCandies([1,1,2,2,3,3])); // 3
console.log(distributeCandies([1,1,2,3])); // 2
console.log(distributeCandies([6,6,6,6])); // 1