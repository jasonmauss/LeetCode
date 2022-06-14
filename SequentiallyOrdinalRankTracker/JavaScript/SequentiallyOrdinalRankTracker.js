// Solution for: https://leetcode.com/problems/sequentially-ordinal-rank-tracker/
class SORTracker {
    count;
    locations;
    constructor() {
        this.count = 0;
        this.locations = [];
    }
    add(name, score) {
        if (!this.locations[score]) {
            this.locations[score] = [name];
        }
        else {
            this.locations[score].push(name);
            this.locations[score].sort();
        }
    }
    get() {
        let copyCount = this.count;
        let result;
        for (let i = this.locations.length - 1;; i--) {
            if (!this.locations[i])
                continue;
            if (this.locations[i].length - 1 >= copyCount) {
                result = this.locations[i][copyCount];
                break;
            }
            copyCount = copyCount - this.locations[i].length;
        }
        this.count++;
        return result;
    }
}
/**
 * Your SORTracker object will be instantiated and called as such:
 * var obj = new SORTracker()
 * obj.add(name,score)
 * var param_2 = obj.get()
 */ 
