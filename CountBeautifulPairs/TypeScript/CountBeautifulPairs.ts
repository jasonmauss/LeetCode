// Solution for: https://leetcode.com/problems/number-of-beautiful-pairs/
const gcd = (a:number, b:number): number => {

    a = Math.abs(a);
    b = Math.abs(b);
    if (b > a) {var temp = a; a = b; b = temp;}
    while (true) {
        if (b == 0) return a;
        a %= b;
        if (a == 0) return b;
        b %= a;
    }

};

const countBeautifulPairs = (nums: number[]): number => {

    let beautifulPairs = 0;

    for(let i = 0; i < nums.length; i++) {
        for(let j = i + 1; j < nums.length; j++) {
            let firstDigit = nums[i].toString().substring(0, 1);
            let lastDigit = nums[j].toString().substring(nums[j].toString().length - 1);
            if(gcd(Number(firstDigit), Number(lastDigit)) === 1) {
                beautifulPairs++;
            }
        }
    }

    return beautifulPairs;
};




// some test cases
console.log(countBeautifulPairs([2,5,1,4])); // 5
console.log(countBeautifulPairs([11,21,12])); // 2