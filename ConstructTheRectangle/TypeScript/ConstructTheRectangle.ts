// Solution for: https://leetcode.com/problems/construct-the-rectangle

const constructRectangle = (area: number): number[] => {
    
    const startingPoint = Math.floor(Math.sqrt(area));

    if(startingPoint * startingPoint === area) {
        return [startingPoint, startingPoint];
    }

    for(let i = startingPoint; i >= 1; i--) {
        if(area % i == 0) return [area / i, i];
    }

    return [area, 1];

};


// some test cases
console.log(constructRectangle(4)); // [2,2]
console.log(constructRectangle(37)); // [37,1]
console.log(constructRectangle(122122)); // [427,286]