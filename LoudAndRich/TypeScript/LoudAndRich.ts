// Solution for: https://leetcode.com/problems/loud-and-rich/
class LoudAndRichNode
{
    position:number;
    quiet:number;
    richerNodes:LoudAndRichNode[];
    quietestNode:LoudAndRichNode;

    constructor(position:number, quiet:number) {
        this.position = position;
        this.quiet = quiet;
        this.quietestNode = null;
        this.richerNodes = [];
    }

    getLeastQuietNode(): LoudAndRichNode {
        if(!this.quietestNode) {
            this.quietestNode = this;
            for(const n of this.richerNodes) {
                const lqn = n.getLeastQuietNode();
                if(lqn.quiet < this.quietestNode.quiet)
                    this.quietestNode = lqn;
            }
        }
        return this.quietestNode;
    }
}

const loudAndRich = (richer: number[][], quiet: number[]): number[] => {

    const n = quiet.length;
    const lrNodes = new Array<LoudAndRichNode>(n);
    for(let i:number = 0; i < n; i++) {
        lrNodes[i] = new LoudAndRichNode(i, quiet[i]);
    }

    richer.forEach(([x, y]) => {
        lrNodes[y].richerNodes.push(lrNodes[x]);
    });
    
    return lrNodes.map(n => n.getLeastQuietNode().position);
};

// some test cases
console.log(loudAndRich([[1,0],[2,1],[3,1],[3,7],[4,3],[5,3],[6,3]], [3,2,5,4,6,1,7,0])); // [5,5,2,5,4,5,6,7]
console.log(loudAndRich([], [0])); // [0]