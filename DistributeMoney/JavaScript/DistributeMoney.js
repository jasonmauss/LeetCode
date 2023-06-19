// Solution for: https://leetcode.com/problems/distribute-money-to-maximum-children/
const distMoney = (money, children) => {
    if (money < children)
        return -1;
    const drawback = children * 8 - money;
    if (!drawback)
        return Number(children);
    if (drawback === 4)
        return children - 2;
    if (drawback < 0)
        return children - 1;
    return Number(children - Math.ceil(drawback / 7));
};
// some test cases
console.log(distMoney(20, 3)); // 1
console.log(distMoney(16, 2)); // 2
