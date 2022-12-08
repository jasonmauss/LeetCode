// Solution for: https://leetcode.com/problems/candy/
const candy = (ratings: number[]): number => {

    let ratingsCount = ratings.length,
    leftArray = new Array(ratingsCount).fill(1),
    rightArray = new Array(ratingsCount).fill(1),
    result = 0;
    
    for (let i = 1; i < ratingsCount; i++) {
        if (ratings[i] > ratings[i - 1]) {
            leftArray[i] = leftArray[i - 1] + 1;
        }
    }
        
    for (let i = ratingsCount - 2; i >= 0; i--) {
        if (ratings[i] > ratings[i + 1]) {
            rightArray[i] = rightArray[i + 1] + 1;
        }
    }
        
    for (let i = 0; i < ratingsCount; i++) {
        result += Math.max(leftArray[i], rightArray[i]);
    }
        
    return result;

};





// some test cases
console.log(candy([1,0,2])); // 5
console.log(candy([1,2,2])); // 4