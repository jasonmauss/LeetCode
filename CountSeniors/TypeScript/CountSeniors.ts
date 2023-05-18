// Solution for: https://leetcode.com/problems/number-of-senior-citizens/
const countSeniors = (details: string[]): number => {

    let seniorCount = 0;

    for(let detail of details) {
        if(parseInt(detail[11] + detail[12]) > 60) seniorCount++;
    }


    return seniorCount;

};











// some test cases
console.log(countSeniors(["7868190130M7522","5303914400F9211","9273338290F4010"])); // 2
console.log(countSeniors(["1313579440F2036","2921522980M5644"])); // 0