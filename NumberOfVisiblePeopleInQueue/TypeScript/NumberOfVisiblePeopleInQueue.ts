// Solution for: https://leetcode.com/problems/number-of-visible-people-in-a-queue/
const canSeePersonsCount = (heights: number[]): number[] => {

    const length:number = heights.length;
    const result:number[] = new Array<number>(length).fill(0);
    let stack = new Array<number>();

    for(let i:number = 0; i < length; i++) {
        while(stack.length && heights[i] > heights[stack.at(-1)]) {
            const index:number = stack.pop();
            result[index]++;
        }

        if(stack.length)
            result[stack.at(-1)]++;

        stack.push(i);
    }

    return result;
    
};



// some test cases
console.log(canSeePersonsCount([10,6,8,5,11,9])); // [3,1,2,1,1,0]
console.log(canSeePersonsCount([5,1,2,3,10])); // [4,1,1,1,0]