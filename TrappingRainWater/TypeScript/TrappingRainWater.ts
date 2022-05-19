// Solution for: https://leetcode.com/problems/trapping-rain-water/
const trap1 = (height: number[]): number => {

    const elevations:number = height.length;
    const leftMaxHeight:number[] = new Array(elevations);
    const rightMaxHeight:number[] = new Array(elevations);
    let totalRainWater:number = 0;

    // There is a fairly simple algorithm to solve this problem:
    // For each position or "elevation" value given in the height
    // array, move from left to right and capture the max left height
    // which is the bigger number between current height[i] and the
    // previous height[i]. Then also move from right to left capturing
    // the max right height with the same type of logic. Once the max left
    // and max right values have been obtained, loop through both and get
    // the rain water values by taking the lesser value between max left
    // and max right, and subtracting the elevation from it.

    // establish some initial values for the first positions before looping
    // since the loops will need to compare the current value in the loop to
    // the "previous" positions value
    leftMaxHeight[0] = height[0];
    rightMaxHeight[elevations - 1] = height[elevations - 1];

    // get all the left max height values
    for(let i:number = 1; i < elevations; i++) {
        leftMaxHeight[i] = Math.max(height[i], leftMaxHeight[i - 1]);
    }

    // get all the right max height values
    for(let i:number = elevations - 2; i >= 0; i--) {
        rightMaxHeight[i] = Math.max(height[i], rightMaxHeight[i + 1]);
    }

    // rain water to add for each elevation is:
    // lesser between left/right minus current height
    for(let i:number = 1; i < elevations - 1; i++) {
        totalRainWater += Math.min(leftMaxHeight[i], rightMaxHeight[i]) - height[i];
    }

    return totalRainWater;

};

const trap = (height: number[]): number => {

    // an improvement on the initial solution
    // don't pre-allocate or initially set any
    // array elements, loop through the height
    // array elements only once, keeping track of
    // left and right positions as we go.
    const elevations = height.length;
    let totalRainWater:number = 0;
    let leftMaxHeight:number = 0;
    let rightMaxHeight:number = 0;
    let leftPosition = 0;
    let rightPosition:number = elevations - 1;

    while (leftPosition <= rightPosition) {
        leftMaxHeight = Math.max(leftMaxHeight, height[leftPosition]);
        rightMaxHeight = Math.max(rightMaxHeight, height[rightPosition]);
        totalRainWater += leftMaxHeight < rightMaxHeight ? leftMaxHeight - height[leftPosition++] : rightMaxHeight - height[rightPosition--];
    }

    return totalRainWater;

}


// some test cases
console.log(trap([0,1,0,2,1,0,1,3,2,1,2,1])); // 6
console.log(trap([4,2,0,3,2,5])); // 9