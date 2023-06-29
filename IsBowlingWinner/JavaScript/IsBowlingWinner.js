// Solution for: https://leetcode.com/problems/determine-the-winner-of-a-bowling-game/
const isWinner = (player1, player2) => {
    let player1Score = 0;
    let player2Score = 0;
    const getScoreFromNumbers = (numbers) => {
        let score = 0;
        for (let i = 0; i < numbers.length; i++) {
            if (numbers[i - 1] === 10 || numbers[i - 2] === 10) {
                score += numbers[i] * 2;
            }
            else {
                score += numbers[i];
            }
        }
        return score;
    };
    player1Score = getScoreFromNumbers(player1);
    player2Score = getScoreFromNumbers(player2);
    if (player1Score === player2Score)
        return 0;
    return player1Score > player2Score ? 1 : 2;
};
// some test cases
console.log(isWinner([4, 10, 7, 9], [6, 5, 2, 3])); // 1
console.log(isWinner([3, 5, 7, 6], [8, 10, 10, 2])); // 2
console.log(isWinner([2, 3], [4, 1])); // 0
