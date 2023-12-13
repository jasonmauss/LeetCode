// Solution for: https://leetcode.com/problems/delete-columns-to-make-sorted/

const minDeletionSize = (strs: string[]): number => {
    
    const strsSize = strs[0].length;
    const length = strs.length;
    let deletions = 0;

    for(let i = 0; i < strsSize; i++) {
        const values = [];
        for(let j = 1; j < length; j++) {
            if(strs[j -1].charCodeAt(i) > strs[j].charCodeAt(i)) {
                deletions++;
                break;
            }
        }
    }

    return deletions;

};


// some tests
console.log(minDeletionSize(["cba","daf","ghi"])); // 1
console.log(minDeletionSize(["a","b"])); // 0
console.log(minDeletionSize(["zyx","wvu","tsr"])); // 3