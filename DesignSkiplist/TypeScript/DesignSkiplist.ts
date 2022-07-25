// Solution for: https://leetcode.com/problems/design-skiplist/
class Skiplist {
    constructor() {

    }

    search(target: number): boolean {
        
        return false;

    }

    add(num: number): void {

    }

    erase(num: number): boolean {

        return false;

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