// Solution for: https://leetcode.com/problems/cheapest-flights-within-k-stops/
const findCheapestPrice = (n: number, flights: number[][], src: number, dst: number, k: number): number => {

    let mn:number[] = new Array(n + 1).fill(Infinity);
    mn[src] = 0;

    for(let j:number = 0; j < k + 1; j++){
        
        let newmn:number[] = [].concat(mn);

        for(let i:number = 0; i < flights.length; i++) {
            let f:number[] = flights[i], a:number = f[0], b:number = f[1], c:number = f[2];
            newmn[b] = Math.min(newmn[b], mn[a] + c);
        }
        
        mn = [].concat(newmn);

    }

    return mn[dst] != Infinity ? mn[dst] : -1

};

// some test cases
console.log(findCheapestPrice(3, [[0,1,100],[1,2,100],[0,2,500]], 0, 2, 1)); // 200
console.log(findCheapestPrice(3, [[0,1,100],[1,2,100],[0,2,500]], 0, 2, 0)); // 500