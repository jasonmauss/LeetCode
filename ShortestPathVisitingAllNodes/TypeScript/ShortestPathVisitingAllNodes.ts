// Solution for: https://leetcode.com/problems/number-of-ways-to-paint-n-3-grid/
const shortestPathLength = (graph: number[][]): number => {

    let graphLength = graph.length;

    let queue = [];
    let set = new Set();
    let finish = (1 << graphLength) - 1;

    for (let i = 0; i < graphLength; i++){
        let tempMask = (1 << i);
        set.add(tempMask | (1 << (i + 16)));
        queue.push({ mask: tempMask, node: i, cost: 0 });
    }

    let curr, neighbors, key, bitMask, cost;

    while (queue.length) {

        curr = queue.shift();

        if (curr.mask === finish) {
            return curr.cost;
        } else {
            neighbors = graph[curr.node];
            cost = curr.cost + 1;
            for (let neighbor of neighbors){
                bitMask = curr.mask | (1 << neighbor);
                key = bitMask | (1 << (neighbor + 16));
                if (!set.has(key)){
                    queue.push({ mask: bitMask, node: neighbor, cost: cost });
                    set.add(key);
                }         
            }
        }
    }
    
    return -1;

};



console.log(shortestPathLength([[1,2,3],[0],[0],[0]])); // 4
console.log(shortestPathLength([[1],[0,2,4],[1,3,4],[2],[1,2]])); // 4