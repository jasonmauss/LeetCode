// Solution for: https://leetcode.com/problems/sleep/
async function sleep(millis) {
}
/**
 * let t = Date.now()
 * sleep(100).then(() => console.log(Date.now() - t)) // 100
 */
// some test cases
let t = Date.now();
sleep(100).then(() => console.log(Date.now() - t)); // 100
