// Solution for: https://leetcode.com/problems/target-sum/

const findTargetSumWays = (nums: number[], target: number): number => {
    
    const sumKeys = new Map<string, number>();

	const traverseOptions = (precedingSum: number, index: number) => {

		const memoKey = `${precedingSum}-${index}`;

		if (sumKeys.has(memoKey)) {
			return sumKeys.get(memoKey);
		}

		if (index === nums.length) {
			return precedingSum === target ? 1 : 0;
		}

		const optionsSum =
			traverseOptions(precedingSum + nums[index], index + 1) +
			traverseOptions(precedingSum - nums[index], index + 1);

            sumKeys.set(memoKey, optionsSum);

		return optionsSum;
	};

	return traverseOptions(0, 0);

};


// some test cases
console.log(findTargetSumWays([1,1,1,1,1], 3)); // 5
console.log(findTargetSumWays([1], 1)); // 1
