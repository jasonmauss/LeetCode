// Solution for: https://leetcode.com/problems/statistics-from-a-large-sample/
const mostCommonNumber = (numbers:number[]): number => {
    
    let counted = numbers.reduce((acc, curr) => { 
        if (curr in acc) {
            acc[curr]++;
        } else {
            acc[curr] = 1;
        }

        return acc;
        
    }, {});

    let mode = Object.keys(counted).reduce((a, b) => counted[a] > counted[b] ? a : b);

    return parseInt(mode);
}

const sampleStats = (count: number[]): number[] => {

    let result:number[] = [];
    let sample:number[] = [];

    for(let i:number = 0; i < count.length; i++) {
        if(count[i] > 0) {
            sample.push(...new Array<number>(count[i]).fill(i));
        }
    }

    result.push(Math.min(...sample));
    result.push(Math.max(...sample));
    let sampleTotal:number = sample.reduce((a, b) => a + b, 0);
    result.push(sampleTotal / sample.length);

    let half:number = Math.floor(sample.length / 2);
    if (sample.length % 2) {
        result.push(sample[half]);
    } else {
        result.push((sample[half - 1] + sample[half]) / 2.0);
    }

    result.push(mostCommonNumber(sample));

    return result;

};

// some test cases
console.log(sampleStats([0,1,3,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0])); // [1.00000,3.00000,2.37500,2.50000,3.00000]
console.log(sampleStats([0,4,3,2,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0])); // [1.00000,4.00000,2.18182,2.00000,1.00000]
