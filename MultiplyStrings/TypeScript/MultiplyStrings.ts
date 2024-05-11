// Solution for: https://leetcode.com/problems/multiply-strings/

const multiply = (num1: string, num2: string): string => {
    
    const num1Length:number = num1.length;
    const num2Length:number = num2.length;

    const returnValue:number[] = new Array<number>(num1Length + num2Length).fill(0);

    for (let i = num1Length - 1; i >= 0; i--) {
        for (let j = num2Length - 1; j >= 0; j--) {
            const mul:number = (num1.charCodeAt(i) - '0' . charCodeAt(0)) * (num2.charCodeAt(j) - '0' . charCodeAt(0));
            const sum:number = mul + returnValue[i + j + 1];
            returnValue[i + j] += Math.floor(sum / 10);
            returnValue[i + j + 1] = sum % 10;
        }
    }

    let returnString:string = '';

    for (let digit of returnValue) {
        if (!(returnString === '' && digit === 0)) {
            returnString += digit;
        }
    }

    return returnString === '' ? '0' : returnString;

};



// some test cases
console.log(multiply('2', '3')); // '6'
console.log(multiply('123', '456')); // '56088'
