// Solution for: https://leetcode.com/problems/simplify-path/

const simplifyPath = (path: string): string => {
    
    // remove any double foward slashes until none exist
    while(path.indexOf('//') > -1) path = path.replace('//','/');

    if(path.startsWith('/')) path = path.substring(1, path.length);
    if(path.endsWith('/')) path = path.substring(0, path.length - 1);

    const pathSegments:string[] = path.split('/');

    for(let i = 0; i < pathSegments.length; i++) {
        if(pathSegments[i] === '..') {
            if(i === 0) {
                pathSegments.splice(i, 1);
                i--;
            } else {
                pathSegments.splice(i - 1, 2);
                i = i - 2;
            }
        } else if(pathSegments[i] === '.') {
            pathSegments.splice(i, 1);
            i--;
        } 
    }

    return '/' + pathSegments.join('/');

};




// some test cases
console.log(simplifyPath("/home/")); // "/home"
console.log(simplifyPath("/home//foo/")); // "/home/foo"
console.log(simplifyPath("/home/user/Documents/../Pictures")); // "/home/user/Pictures"
console.log(simplifyPath("/../")); // "/"
console.log(simplifyPath("/.../a/../b/c/../d/./")); // "/.../b/d"
console.log(simplifyPath("/a/./b/../../c/")); // "/c"
console.log(simplifyPath("/a/../../b/../c//.//")); // "/c"