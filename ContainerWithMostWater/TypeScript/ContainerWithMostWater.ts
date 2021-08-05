function maxArea(height: number[]): number {

    // store the largest area value
    let largestArea: number = 0;
    // index used to start at the left most value in the height array
    let left: number = 0;
    // index used to start at the right most value in the height array
    let right: number = height.length - 1;

    while(left < right) {
        largestArea = Math.max(largestArea, Math.min(height[left], height[right]) * (right - left));
        if(height[left] < height[right])
            left++;
        else
            right--;
    }

    return largestArea;

};

// some test cases
console.log(maxArea([1,8,6,2,5,4,8,3,7])) // 49
console.log(maxArea([1,1])) // 1
console.log(maxArea([4,3,2,1,4])) // 16
console.log(maxArea([1,2,1])); // 2