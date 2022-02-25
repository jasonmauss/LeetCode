// Solution for: https://leetcode.com/problems/describe-the-painting/

const splitPainting = (segments: number[][]): number[][] => {

    const [m1, m2] = segments.reduce(([m1, m2], [s,e,c]) => {
        m1.set(s, m1.has(s) ? m1.get(s) + c : c);
        m2.set(e, m2.has(e) ? m2.get(e) - c : -c);
        return [m1, m2];
    }, [new Map(), new Map()]);
    
    const points = [...new Set(segments.flatMap(([s,e,c]) => {
        return [s, e];
    }))].sort((a, b) => a - b);
    
    let sum:number = 0;

    return points.map((p,i) => {
        if(i === 0) {
            sum += (m1.has(p) ? m1.get(p) : 0) + (m2.has(p) ? m2.get(p) : 0);
            return [null, p, 0];
        }
        
        const res = [points[i-1], p, sum];
        sum += (m1.has(p) ? m1.get(p) : 0) + (m2.has(p) ? m2.get(p) : 0);
        return res;
        
    }).filter(([a,b,c]) => c > 0);

};



// some test cases
console.log(splitPainting([[1,4,5],[4,7,7],[1,7,9]])); // [[1,4,14],[4,7,16]]
console.log(splitPainting([[1,7,9],[6,8,15],[8,10,7]])); // [[1,6,9],[6,7,24],[7,8,15],[8,10,7]]
console.log(splitPainting([[1,4,5],[1,4,7],[4,7,1],[4,7,11]])); // [[1,4,12],[4,7,12]]