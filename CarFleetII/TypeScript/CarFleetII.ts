// Solution for: https://leetcode.com/problems/car-fleet-ii/
const getTimeToCatchNext = (leftCar, rightCar):any => {
    const [leftPosition, leftSpeed] = leftCar;
    const [rightPosition, rightSpeed] = rightCar;
    const distToCatch = rightPosition - leftPosition;
    const diffInSpeed = leftSpeed - rightSpeed;
    return diffInSpeed > 0 ? distToCatch / diffInSpeed : -1;
  }

const getCollisionTimes = (cars: number[][]): number[] => {

    // Final fleet in reverse order
    const finalFleet = [];

    // Init each answer with -1
    const result = new Array(cars.length).fill(-1);

    // Check from last one to first one
    for (let i = cars.length - 1; i >= 0; i -= 1) {
        // Find the first one in front that current car can hit
        // 1) If no cars in final fleet, no need to check
        // 2) If the first car in front will never hit its next car (with value -1), 
        //    no need to check further
        while (finalFleet.length && result[finalFleet[finalFleet.length - 1]] >= 0) {
            const nextCar = finalFleet[finalFleet.length - 1];
            const timeToCatchNext = getTimeToCatchNext(cars[i], cars[nextCar]);
            // If current car A catches next car B sooner than B catches its next car C,
            // then we found the target car, it's B
            if (timeToCatchNext > 0 && timeToCatchNext <= result[nextCar]) {
                break;
            }
            // If curent car A cannot catch next car B (meaning either car B is faster than A, 
            // or B catches C sooner than A catches B), we can safely pop B. Because either A
            // will never hit a car, or if A will hit some car eventually, B will be absorbed 
            // by that car. So we can keep popping until we find it.
            finalFleet.pop();
        }

        // Calculate the answer for current car if we found its target car
        if (finalFleet.length) {
            const nextCar = finalFleet[finalFleet.length - 1];
            result[i] = getTimeToCatchNext(cars[i], cars[nextCar]);
        }

        // Add current car to final fleet
        finalFleet.push(i);
    }

    return result;

};



// some test cases
console.log(getCollisionTimes([[1,2],[2,1],[4,3],[7,2]])); // [1.00000,-1.00000,3.00000,-1.00000]
console.log(getCollisionTimes([[3,4],[5,4],[6,3],[9,1]])); // [2.00000,1.00000,1.50000,-1.00000]