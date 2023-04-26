// Solution for: https://leetcode.com/problems/sleep/
async function sleep(millis: number): Promise<void> {

    let myPromise:Promise<void> = new Promise(function(resolve, reject) {
        setTimeout(() => {
            resolve();
        }, millis);
    });

    return myPromise;
}


/** 
 * let t = Date.now()
 * sleep(100).then(() => console.log(Date.now() - t)) // 100
 */


// some test cases
let t = Date.now();
sleep(100).then(() => console.log(Date.now() - t)) // 100