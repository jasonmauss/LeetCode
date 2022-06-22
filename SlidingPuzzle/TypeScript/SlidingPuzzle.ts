// Solution for: https://leetcode.com/problems/sliding-puzzle/
const slidingPuzzle = (board: number[][]): number => {
    
    // movesMap is basically a hashtable of possible moves that can be made
    // based on where the 0 puzzle piece is for example if the pieces were laid
    // out like this:
    // 0 1 2 
    // 3 4 5
    // we know we can swap the first piece (which is at index 0) with only 
    // indices 1 and 3 in the original board

    const movesMap = {
        0: [1,3],
        1: [0,2,4],
        2: [1,5],
        3: [0,4],
        4: [1,3,5],
        5: [2,4]
    }
  
    // a simple function to swap values, converts a string to an array, then does the swap
    const swap = (state, pos, next) => {
        const array = state.split('');
        [array[pos], array[next]] = [array[next], array[pos]];
        return array.join('');
    }

    // convert the board to string of numbers e.g. '123540'
    let state:string = '';
    board.forEach(row => state += row.join(''));
  
    const visited = new Set(state);
  
    // a queue to keep track for state, position of 0 and moves so far
    const q = [[state, state.indexOf('0'), 0]];
  
    while(q.length) {
    
        const [state, pos, moves] = q.shift();
    
        if(state == '123450') return Number(moves);
     
    // move 0 to each possible direction (next) in movesMap 
    for(let next of movesMap[pos]){
      const newState = swap(state, pos, next);
      
      if(visited.has(newState))
        continue;
      
      visited.add(newState);
      q.push([newState, next, Number(moves) + 1]);
    }
  }

  return -1;

};




// some test cases
console.log(slidingPuzzle([[1,2,3],[4,0,5]])); // 1
console.log(slidingPuzzle([[1,2,3],[5,4,0]])); // -1
console.log(slidingPuzzle([[4,1,2],[5,0,3]])); // 5