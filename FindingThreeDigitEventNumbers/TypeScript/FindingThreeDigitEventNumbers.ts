// Solution for: https://leetcode.com/problems/finding-3-digit-even-numbers/
const findEvenNumbers = (digits: number[]): number[] => {

    const digitCount = digits.length;

    let result:number[] = [];
    for (let i:number = 0; i < digitCount; i++)
        if (digits[i] !== 0)
            for (let j:number = 0; j < digitCount; j++)
                if (i !== j)
                    for (let k:number = 0; k < digitCount; k++)
                        if (i !== k && j !== k && digits[k] % 2 === 0) {
                            result.push(digits[i] * 100 + digits[j] * 10 + digits[k]);
                        }

    return [...new Set<number>(result.sort())];
};


// some test cases
console.log(findEvenNumbers([2,1,3,0])); // [102,120,130,132,210,230,302,310,312,320]
console.log(findEvenNumbers([2,2,8,8,2])); // [222,228,282,288,822,828,882]
console.log(findEvenNumbers([3,7,5])); // []

// compile this with the --downlevelIteration flag on the TS compiler