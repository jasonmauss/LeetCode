// Solution for: https://leetcode.com/problems/burst-balloons/
const maxCoins = (nums: number[]): number => {

    if (!nums.length) {
        return 0;
    }

    let coins: number[][] = new Array(nums.length).fill(0).map(() => new Array(nums.length).fill(0))

    function recurse(length: number) {
        if (length > nums.length) {
            return;
        }

        let i = 0;
        let j = length;

        while (j <= nums.length) {

            let max = 0;

            for (let k = i; k < j; k++) {
                
                let totalBefore = 0;
                if (k - 1 >= i) {
                    totalBefore += coins[i][k-1];
                }

                if (k + 1 <= j -1) {
                    totalBefore += coins[k+1][j-1];
                }
                let left = nums[i-1] || 1;
                let right = nums[j] || 1;

                max = Math.max(max,totalBefore + (left * nums[k] * right));
            }

            coins[i][j-1] = max;
            i++;
            j++;
        }

        recurse(length + 1);
    }

    recurse(1);

    return coins[0][nums.length -1];

};




// some test cases
console.log(maxCoins([3,1,5,8])); // 167
console.log(maxCoins([1,5])); // 10