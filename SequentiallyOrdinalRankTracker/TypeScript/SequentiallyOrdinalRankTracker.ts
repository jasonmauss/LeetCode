// Solution for: https://leetcode.com/problems/sequentially-ordinal-rank-tracker/
import {
    MinPriorityQueue,
    MaxPriorityQueue,
    ICompare,
    IGetCompareValue
  } from '@datastructures-js/priority-queue';

interface Item{
    name:string
    score:number
}

class SORTracker {

    count:number;
    min:MinPriorityQueue<Item>;
    max:MaxPriorityQueue<Item>;

    constructor() {
        this.count = 0;
        const minCompareItems: IGetCompareValue<Item> = (a:Item, b:Item) => {
            return a.score - b.score || b.name.localeCompare(a.name);
        };

        this.min = new MinPriorityQueue<Item>( getCompareValue: minCompareItems);
        this.max = new MaxPriorityQueue({ compare: (a, b) => b[0] - a[0] || a[1].localeCompare(b[1]) })
    }

    add(name: string, score: number): void {
        this.min.enqueue([score, name]);
        this.max.enqueue(this.min.dequeue());
    };

    get():string {
        let maxElement = this.max.dequeue();
        this.min.enqueue(maxElement);

        return maxElement[1];
    };
}

/**
 * Your SORTracker object will be instantiated and called as such:
 * var obj = new SORTracker()
 * obj.add(name,score)
 * var param_2 = obj.get()
 */