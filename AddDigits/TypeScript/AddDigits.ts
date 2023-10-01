// Solution for: https://leetcode.com/problems/add-digits/
const addDigits = (num: number): number => {

    let digitString: string = num.toString();

    while(digitString.length > 1) {

        let sum: number = 0;

        for(let i = 0; i < digitString.length; i++) {
            sum += Number(digitString[i]);
        }

        digitString = sum.toString();
    }

    return Number(digitString);

};



// some test cases
console.log(addDigits(38)); // 2
console.log(addDigits(0)); // 0