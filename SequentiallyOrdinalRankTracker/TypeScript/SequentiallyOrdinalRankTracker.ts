// Solution for: https://leetcode.com/problems/sequentially-ordinal-rank-tracker/
class Item {
    name:string
    score:number
}

class SORTracker {

    minQ
    maxQ
    count

    constructor() {
        this.count = 0
        this.minQ = new MinPriorityQueue<Item>((item) => item.score);
        this.maxQ = new MaxPriorityQueue<Item>((item) => item.score);
    }

    add = (name:string, score:number): void => {
        this.minQ.enqueue([score, name])
        this.maxQ.enqueue(this.minQ.dequeue())
    };

    get = ():string => {
        let maxElement = this.maxQ.dequeue()
        this.minQ.enqueue(maxElement)
        
        return maxElement[1]
    };

}

/**
 * Your SORTracker object will be instantiated and called as such:
 * var obj = new SORTracker()
 * obj.add(name,score)
 * var param_2 = obj.get()
 */