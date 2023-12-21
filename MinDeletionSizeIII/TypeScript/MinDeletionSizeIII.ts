// Solution for: https://leetcode.com/problems/delete-columns-to-make-sorted-iii/
const minDeletionSize = (strs: string[]): number => {
    
    const totalStrs = strs.length;
    const strSize = strs[0].length;
    let result:number = strSize - 1;
    let k:number = 0;

    let dp:number[] = new Array<number>(strSize).fill(1); // using fill so compile with tsc --lib "es2015,dom"

    for(let i = 0; i < strSize; ++i) {
        for(let j = 0; j < i; ++j) {
            for(k = 0; k < totalStrs; ++k) {
                if(strs[k].charAt(j) > strs[k].charAt(i)) break;
            }
            if(k === totalStrs && dp[j] + 1 > dp[i]) {
                dp[i] = dp[j] + 1;
            }
        }
        result = Math.min(result, strSize - dp[i]);
    }

    return result;

};



// some tests
console.log(minDeletionSize(["babca","bbazb"])); // 3
console.log(minDeletionSize(["edcba"])); // 4
console.log(minDeletionSize(["ghi","def","abc"])); // 0