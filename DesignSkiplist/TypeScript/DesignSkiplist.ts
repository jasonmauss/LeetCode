// Solution for: https://leetcode.com/problems/design-skiplist/
class NodeItem {

    val:number;
    next:NodeItem;
    down:NodeItem;

    constructor(val:number) {
        this.val = val;
    }
}

class Skiplist {

    maxLevel:number;
    levels:NodeItem[];
    head:NodeItem;

    constructor() {
        this.maxLevel = ~~Math.log2(20000);
        this.levels = [...Array(this.maxLevel)].map(() => new NodeItem(-1));
        for(let i:number = this.maxLevel - 1; i > 0; i--) {
            this.levels[i].down = this.levels[i -1];
        }
        this.head = this.levels[this.maxLevel - 1];
    }

    decideLevels = (max:number):number => {
        let answer = 1;
        while (Math.random() > 0.5 && answer < max) answer++;
        return answer;
    };

    iter = (target:number):NodeItem[] => {
        let current = this.head;
        const pre = [];
        for(let i = this.maxLevel - 1; i >= 0; i--) {
            while(current.next && current.next.val < target) current = current.next;
            pre[i] = current;
            current = current.down;
        }
        return pre;
    }

    search(target: number): boolean {
        
        const pre = this.iter(target);
        return !pre[0].next ? false : pre[0].next.val === target;

    }

    add(num: number): void {
        const pre = this.iter(num);
        const lvls = this.decideLevels(this.maxLevel);
        for(let i:number = 0; i < lvls; i++) {
            const next = pre[i].next;
            pre[i].next = new NodeItem(num);
            pre[i].next.next = next;
            if(i > 0) pre[i].next.down = pre[i - 1].next;
        }
    }

    erase(num: number): boolean {

        const pre = this.iter(num);
        if(!pre[0].next || pre[0].next.val !== num) return false;
        for(let i:number = this.maxLevel - 1; i >= 0; i--) {
            if(pre[i].next && pre[i].next.val === num) {
                const targetedForDeletion = pre[i].next;
                pre[i].next = targetedForDeletion.next;
                targetedForDeletion.next = null;
                targetedForDeletion.down = null;
            }
        }
        return true;

    }
}

/**
 * Your Skiplist object will be instantiated and called as such:
 * var obj = new Skiplist()
 * var param_1 = obj.search(target)
 * obj.add(num)
 * var param_3 = obj.erase(num)
 */



// some test cases
let skiplist = new Skiplist();
skiplist.add(1);
skiplist.add(2);
skiplist.add(3);
skiplist.search(0); // return False
skiplist.add(4);
skiplist.search(1); // return True
skiplist.erase(0);  // return False, 0 is not in skiplist.
skiplist.erase(1);  // return True
skiplist.search(1); // return False, 1 has already been erased.