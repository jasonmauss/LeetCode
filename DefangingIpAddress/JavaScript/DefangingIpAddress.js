// Solution for: https://leetcode.com/problems/defanging-an-ip-address/
const defangIPaddr = (address) => {
    return address.split('.').join('[.]');
};
// some test case
console.log(defangIPaddr("1.1.1.1")); // "1[.]1[.]1[.]1"
console.log(defangIPaddr("255.100.50.0")); // "255[.]100[.]50[.]0"
