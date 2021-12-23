// Solution for: https://leetcode.com/problems/find-winner-on-a-tic-tac-toe-game/
const tictactoe = (moves: number[][]): string =>{

    const boardRowsAndCols = 3;

    // Create two arrays; 1 for row value totals
    // and 1 for col value totals, initialize all to zero.
    // Will add 1 (player A) or subtract -1 (player B) from these values
    // depending on the moves we see in the moves array arg
    let rows:Array<any> = new Array(boardRowsAndCols).fill(0),
        cols:Array<any> = new Array(boardRowsAndCols).fill(0);

    let isPlayerATurn:boolean = true;
    let diag1:number = 0, // the diagonal from top left to bottom right
        diag2:number = 0; // the diagonal from bottom left to top right
    

    for (let i = 0; i < moves.length; i++) {
        let increment:number = isPlayerATurn? 1 : -1; 
        isPlayerATurn = !isPlayerATurn;
        let row = moves[i][0],
            col = moves[i][1];
        rows[row] += increment;
        cols[col] += increment;
        if (row === col) diag1 += increment;
        if (row === (boardRowsAndCols - 1) - col) diag2 += increment;
        
        // if a particular row or col has accumulated a value of 3 or -3 then the game
        // has been won by one of the players (3 = Player A, -3 = Player B)
        if (cols[col] === boardRowsAndCols ||
            rows[row] === boardRowsAndCols ||
            diag1 === boardRowsAndCols ||
            diag2 === boardRowsAndCols) {
            return "A";
        } else if (cols[col] === boardRowsAndCols * -1 ||
                   rows[row] === boardRowsAndCols * -1 ||
                   diag1 === boardRowsAndCols * -1 ||
                   diag2 === boardRowsAndCols * -1) {
            return "B";
        }
    }
    
    // If the game has not been won, it's either a draw
    // or pending
    return moves.length === boardRowsAndCols * boardRowsAndCols ? "Draw" : "Pending";

};

// some test cases
console.log(tictactoe([[0,0],[2,0],[1,1],[2,1],[2,2]])); //  A
console.log(tictactoe([[0,0],[1,1],[0,1],[0,2],[1,0],[2,0]])); //  B
console.log(tictactoe([[0,0],[1,1],[2,0],[1,0],[1,2],[2,1],[0,1],[0,2],[2,2]])); //  Draw
console.log(tictactoe([[0,0],[1,1]])); //  Pending