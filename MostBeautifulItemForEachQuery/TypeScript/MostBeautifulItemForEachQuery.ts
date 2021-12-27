// Solution for: https://leetcode.com/problems/most-beautiful-item-for-each-query/
function maximumBeauty(items: number[][], queries: number[]): number[] {
    
    let result:number[] = new Array(queries.length).fill(0);

    // since there could be a huge range of items, let's sort them
    // and then we can perform a binary search on the items
    items.sort((a, b) => (a[0] - b[0]) || (a[1] - b[1]));
    
    let beautyMap:Map<number, number> = new Map();
    let max:number = 0;

    for(let [price, beauty] of items) {
        max = Math.max(max, beauty);
        beautyMap.set(price, max);
    }

    let beautyKeys = Array.from(beautyMap.keys());
    for(let [index, query] of queries.entries()) {
        let min:number = 0;
        let max = beautyKeys.length - 1;
        while(min < max) {
            let mid:number = min + Math.ceil((max - min + 1) / 2);
            if(beautyKeys[mid] <= query) {
                min = mid;
            } else {
                max = mid - 1;
            }
        }

        if(beautyKeys[min] <= query) {
            result[index] = beautyMap.get(beautyKeys[min]);
        }
    }

    return result;
};

// some test cases
console.log(maximumBeauty([[1,2],[3,2],[2,4],[7,6],[7,5]], [1,2,3,4,5,6])); // [2,4,4,4,4,4]
console.log(maximumBeauty([[1,2],[3,2],[2,4],[5,6],[3,5]], [1,2,3,4,5,6])); // [2,4,5,5,6,6]
console.log(maximumBeauty([[1,2],[1,2],[1,3],[1,4]], [1])); // [4]
console.log(maximumBeauty([[10,1000]], [5])); // [0]