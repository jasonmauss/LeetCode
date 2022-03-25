// Solution for: https://leetcode.com/problems/maximum-length-of-a-concatenated-string-with-unique-characters/
const maxLength = (arr: string[]): number => {

    const process = (arr: string[], soFar:string, index:number):number => {
        
        if (index > arr.length) return 0;

        let set:Set<string> = new Set<string>();
        
        let chars:string[] = soFar.split('');
        for(let char of chars) {
            if(set.has(char)) return 0;
            set.add(char);
        }

        let max:number = soFar.length;
        for(let i:number = index; i < arr.length; i++) {
            max = Math.max(max, process(arr, soFar + arr[i], i + 1));
        }
        return max;
    }

    return process(arr, '', 0);
    
};



// some test cases
console.log(maxLength(["un","iq","ue"])); // 4
console.log(maxLength(["cha","r","act","ers"])); // 6
console.log(maxLength(["abcdefghijklmnopqrstuvwxyz"])); // 26
