// Solution for: https://leetcode.com/problems/maximum-frequency-stack/
class FreqStack {
    frequencyMap: Map<number, number>
    stack: number[][]

    constructor() {
        this.frequencyMap = new Map();
        this.stack = [];
    }

    push(val: number): void {
        const freq = this.frequencyMap.has(val) ? this.frequencyMap.get(val) + 1 : 1;
        this.frequencyMap.set(val, freq);
        
        if (!this.stack[freq]) this.stack[freq] = [val];
        else this.stack[freq].push(val);
    }

    pop(): number {
        const top = this.stack[this.stack.length - 1];
        const val = top.pop();
        if (!top.length) this.stack.pop();
        this.frequencyMap.set(val, this.frequencyMap.get(val) - 1);
        
        return val;
    }
}

/**
 * Your FreqStack object will be instantiated and called as such:
 * var obj = new FreqStack()
 * obj.push(val)
 * var param_2 = obj.pop()
 */



// some test cases
console.log(["FreqStack", "push", "push", "push", "push", "push", "push", "pop", "pop", "pop", "pop"]); // 