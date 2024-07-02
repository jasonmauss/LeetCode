// Solution for: https://leetcode.com/problems/simplify-path/

const simplifyPath = (path: string): string => {
    
    return '';

};




// some test cases
console.log(simplifyPath("/home/")); // "/home"
console.log(simplifyPath("/home//foo/")); // "/home/foo"
console.log(simplifyPath("/home/user/Documents/../Pictures")); // "/home/user/Pictures"
console.log(simplifyPath("/../")); // "/"
console.log(simplifyPath("/.../a/../b/c/../d/./")); // "/.../b/d"