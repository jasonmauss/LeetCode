// Solution for: https://leetcode.com/problems/restore-ip-addresses/

const dfs = (s: string, i: number, current: string, block: string, count: number, result: string[] ):void => {

    if(i > s.length || count > 3 || block.length > 1 && parseInt(block) + "" != block || Number(block) > 255) return;

    if(i == s.length){
        if(block !="" && count == 3) {
            result.push(current);
        }
        else {
            return
        }
        
    }


    dfs(s, i + 1, current + s[i], block +s[i], count, result);

    if(block != "")
        dfs(s, i, current + ".", "", count + 1, result);
}


const restoreIpAddresses = (s: string): string[] => {
    
    let result : string[]  = [];

    dfs(s, 0, "", "", 0, result);

    return result;

};


// some test cases
console.log(restoreIpAddresses('25525511135')); // ["255.255.11.135","255.255.111.35"]
console.log(restoreIpAddresses('101023')); // ["1.0.10.23","1.0.102.3","10.1.0.23","10.10.2.3","101.0.2.3"]
console.log(restoreIpAddresses('0000')); // ["0.0.0.0"]
