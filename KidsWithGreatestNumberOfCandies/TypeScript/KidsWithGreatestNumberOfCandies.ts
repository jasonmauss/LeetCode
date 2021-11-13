// Solution for: https://leetcode.com/problems/kids-with-the-greatest-number-of-candies/
const kidsWithCandies = (candies: number[], extraCandies: number): boolean[] => {

    let results:boolean[] = [];
    let maxCandiesBeforeExtras = Math.max(...candies);

    for(let i:number = 0; i < candies.length; i++) {
        results.push(candies[i] + extraCandies >= maxCandiesBeforeExtras);
    }

    return results;

};


// some test cases
console.log(kidsWithCandies([2,3,5,1,3], 3)); // [true,true,true,false,true]
console.log(kidsWithCandies([4,2,1,1,2], 1)); // [true,false,false,false,false]
console.log(kidsWithCandies([12,1,12], 10)); // [true,false,true]