// Solution for: https://leetcode.com/problems/online-election/
class TopVotedCandidate {
    
    private _persons:number[];
    private _times:number[];

    constructor(persons: number[], times: number[]) {
        this._persons = persons;
        this._times = times;    
    }

    q(t: number): number {
        return 0;
    }
}

/**
 * Your TopVotedCandidate object will be instantiated and called as such:
 * var obj = new TopVotedCandidate(persons, times)
 * var param_1 = obj.q(t)
 */

// some test cases
let tvc:TopVotedCandidate = new TopVotedCandidate([0, 1, 1, 0, 0, 1, 0], [0, 5, 10, 15, 20, 25, 30]);
tvc.q(3); // 0
tvc.q(12); // 1
tvc.q(25); // 1
tvc.q(15); // 0
tvc.q(24); // 0
tvc.q(8); // 1