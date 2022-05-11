// Solution for: https://leetcode.com/problems/maximum-number-of-eaten-apples/
const eatenApples = (apples: number[], days: number[]): number => {

    let time = new Array(40001);
    let answer = 0;
    let last = apples.length

    for (let i = 0, j = Infinity; i <= last; i++) {
        
        if (j < i) j = i;

        if (apples[i]) {
            let exp = i + days[i] - 1;
            if (time[exp]) time[exp] += apples[i];
            else time[exp] = apples[i];

            if (exp < j) j = exp;

            if (exp > last) last = exp;
        }

        while (!time[j] && j < last) j++;

        if (time[j]) answer++, time[j]--;
    }

    return answer;

};



// some test cases
console.log(eatenApples([1,2,3,5,2],[3,2,1,4,2])); // 7
console.log(eatenApples([3,0,0,0,0,2],[3,0,0,0,0,2])); // 5