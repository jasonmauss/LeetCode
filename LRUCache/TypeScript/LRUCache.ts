// Solution for: https://leetcode.com/problems/lru-cache/
class LRUCache {
    
    // private members to keep track of capacity,
    // LRUCache and key/value pairs
    private capacity:number = 0;
    private valueMap:Map<number, number>;

    // in the ctor, set the capacity and initialize
    // the cache and key/value map
    constructor(capacity: number) {
        this.capacity = capacity;
        this.valueMap = new Map<number, number>();
    }

    get(key: number): number {

        // initialize to -1 which is what gets returned if
        // we don't find the value in our key/value map
        let returnValue = -1;

        // if the value exists in our map, get the value
        if(this.valueMap.has(key)) {
            returnValue = this.valueMap.get(key);

            this.valueMap.delete(key);
            this.valueMap.set(key, returnValue);
        }

        return returnValue;
    }

    put(key: number, value: number): void {
        
        if(this.valueMap.size >= this.capacity && !this.valueMap.has(key)) {
            const recentKey = this.valueMap.keys().next().value;
            this.valueMap.delete(recentKey);
        }

        this.valueMap.delete(key);
        this.valueMap.set(key, value);
    }
}

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */

let lRUCache = new LRUCache(2);
lRUCache.put(1, 1); // cache is {1=1}
lRUCache.put(2, 2); // cache is {1=1, 2=2}
console.log(lRUCache.get(1));    // return 1
lRUCache.put(3, 3); // LRU key was 2, evicts key 2, cache is {1=1, 3=3}
console.log(lRUCache.get(2));    // returns -1 (not found)
lRUCache.put(4, 4); // LRU key was 1, evicts key 1, cache is {4=4, 3=3}
console.log(lRUCache.get(1));    // return -1 (not found)
console.log(lRUCache.get(3));    // return 3
console.log(lRUCache.get(4));    // return 4