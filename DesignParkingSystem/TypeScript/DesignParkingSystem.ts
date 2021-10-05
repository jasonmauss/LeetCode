// Solution for: https://leetcode.com/problems/design-parking-system/
class ParkingSystem {
    
    spaces:number[] = [0,0,0];
    parkedCars:number[] = [0,0,0];

    constructor(big: number, medium: number, small: number) {
        this.spaces[0] = big;
        this.spaces[1] = medium;
        this.spaces[2] = small;
    }

    addCar(carType: number): boolean {
        if(this.parkedCars[carType - 1] < this.spaces[carType - 1]) {
            this.parkedCars[carType - 1]++;
            return true;
        }
        return false;
    }
}

/**
 * Your ParkingSystem object will be instantiated and called as such:
 * var obj = new ParkingSystem(big, medium, small)
 * var param_1 = obj.addCar(carType)
 */

// some test cases
let parkingSystem:ParkingSystem = new ParkingSystem(1, 1, 0);
console.log(parkingSystem.addCar(1)); //  true
console.log(parkingSystem.addCar(2)); //  true
console.log(parkingSystem.addCar(3)); //  false
console.log(parkingSystem.addCar(1)); //  false