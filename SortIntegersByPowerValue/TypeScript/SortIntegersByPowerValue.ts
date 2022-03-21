// Solution for: https://leetcode.com/problems/sort-integers-by-the-power-value/
const getKth = (lo: number, hi: number, k: number): number => {

    let powersMap:Map<number, number> = new Map<number, number>();
    
    for(let j:number = lo; j <= hi; j++){
        
        let index:number = 0;
        let i:number = j;
        
        while(i > 1){
    
            if(i %  2 == 0){
                i = i / 2;
            } else {
                i = 3 * i + 1;
            }

            index++;
        }   
        powersMap.set(j, index);
    }
    
    let returnMap:Map<number, number> = new Map([...powersMap.entries()].sort((a,b) => a[1] - b[1]));
    
    return([...returnMap.entries()][k - 1][0]);
};

// some test cases
console.log(getKth(12, 15, 2)); //  13
console.log(getKth(7, 11, 4)); //  7