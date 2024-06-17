// Solution for: https://leetcode.com/problems/number-of-provinces/

const findCircleNum = (isConnected: number[][]): number => {

    let provinceCount:number = 0;

    const cityNumbers:Set<number> = new Set<number>();

    const findCitiesConnectedTo = (cityNumber:number): void => {

        for(let j = 0; j < isConnected.length; j++) {
            if(isConnected[cityNumber][j] === 1 && !cityNumbers.has(j)) {
                cityNumbers.add(j);
                findCitiesConnectedTo(j);
            }
        }
    }

    for(let i = 0; i < isConnected.length; i++) {
        if(!cityNumbers.has(i)) {
            provinceCount++;
            findCitiesConnectedTo(i);
        }
    }

    return provinceCount;
    
};


// some test cases
console.log(findCircleNum([[1,1,0],[1,1,0],[0,0,1]])); // 2
console.log(findCircleNum([[1,0,0],[0,1,0],[0,0,1]])); // 3