// Solution for: https://leetcode.com/problems/maximum-number-of-balls-in-a-box/
const countBalls = (lowLimit: number, highLimit: number): number => {

    let boxes:Map<number, number> = new Map<number, number>();

    for(let i:number = lowLimit; i <= highLimit; i++) {
        let boxNumber:number = getBoxNumberFromBallNumber(i);
        let box:number = boxes.get(boxNumber);
        if(box) {
            boxes.set(boxNumber, box + 1);
        } else {
            boxes.set(boxNumber, 1);
        }
    }

    return Math.max(...Array.from(boxes.values()));

};

const getBoxNumberFromBallNumber = (value:number):number => {

    let boxNumber:number = 0;

    while(value > 0) {
        boxNumber += value % 10;
        value /= 10;
        value = value | 0;
    }

    return boxNumber;
}

// some test cases
console.log(countBalls(1,10)); //  2
console.log(countBalls(5,15)); //  2
console.log(countBalls(19,28)); //  2