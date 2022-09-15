// Solution for: https://leetcode.com/problems/cracking-the-safe/
const dfs = (prefix, seq, visited, k) => {

    for (let i = 0; i < k; i++) {
      // Generate a combination from 0 to k - 1 to get
      // all the edges that are adjacent to the previous combination
      const combination = prefix + i.toString();
      
      // If the current combination has been visited, just skip it
      if (visited.has(combination)) continue;
      
      // If the combination hasn't been visited add it to the visited set
      visited.add(combination);
      
      // Create a new prefix using the current combination
      // and continue the depth first search
      dfs(combination.slice(1), seq, visited, k);
      
      // Add the last element of visited combinations to the sequence
      seq.push(i);
    }
}

const crackSafe = (n: number, k: number): string => {

    // If k and n both equal 1 the only possible combination is 0.
    if (n === 1 && k === 1) return '0';
  
    // Keep track of all visited edges.
    const visited = new Set();
    
    // This array will store the De Bruijn sequence that will be the 
    // output of the dfs function. See: http://debruijnsequence.org/db/home
    const debruijnSequence = [];
    
    // To generate a De Bruijn sequence we must traverse every combination of size n
    // containing the number from 0 to k - 1. We will start with the prefix of the 
    // combination with all 0s. If n equals 3 and k is greater than 1 our prefix would be
    // 00 and the first combination, our starting edge would be 000.
    const prefix = '0'.repeat(n - 1);
    
    // Do a depth first search until every combination
    // Add the last element of the combination to the sequence
    dfs(prefix, debruijnSequence, visited, k);
  
    // A De Bruijn sequence ends with the first combination, so append the original prefix to it
    // If we reverse the sequence it would still be valid. In that case we would start with the first combination instead
    debruijnSequence.push(prefix);
  
    // Convert/Return the sequence as a string.
    return debruijnSequence.join('');

};




// some test cases
console.log(crackSafe(1, 2)); //  10
console.log(crackSafe(2, 2)); //  01100