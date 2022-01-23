// Solution for: https://leetcode.com/problems/statistics-from-a-large-sample/
const sampleStats = (count: number[]): number[] => {

    const countLength:number = count.length;
    let totalValues:number = 0;
    let minValue = countLength - 1;
    let maxValue = 0;
    let modValue = 0;
    let indexofModValue = 0;

    let result:number[] = [];

    for(let i:number = 0; i < countLength; i++) {
        if(count[i] > 0) {
            minValue = Math.min(i, minValue);
            maxValue = Math.max(i, maxValue);
            totalValues += count[i];
            if(count[i] > modValue) {
                modValue = count[i];
                indexofModValue = i;
            }
        }
    }

    result.push(...[minValue, maxValue])

    let sum:number = count.reduce((acc, cur, ind) => acc + (ind * cur), 0);
    let len:number = count.reduce((acc, cur, ind) => acc + cur, 0);
    result.push(sum / len);
        
    const half = Math.floor(totalValues / 2);

    let median:number = 0;
    for(let i:number = 0, tempTotal:number = 0, lastIndex:number = 0; i < countLength; i++) {
        if(count[i]) {
            tempTotal += count[i];
            if(tempTotal > half) {
                if(totalValues % 2 === 0 && (tempTotal - count[i] === half)) {
                    median = (i + lastIndex) / 2.0;
                } else {
                    median = i;
                }
                break;
            }
            lastIndex = i;
        }
    }
    result.push(median);

    result.push(indexofModValue);
    
    return result;

};

// some test cases
console.log(sampleStats([0,1,3,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0])); // [1.00000,3.00000,2.37500,2.50000,3.00000]
console.log(sampleStats([0,4,3,2,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0])); // [1.00000,4.00000,2.18182,2.00000,1.00000]
