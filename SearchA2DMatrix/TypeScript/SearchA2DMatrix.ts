// Solution for: https://leetcode.com/problems/search-a-2d-matrix/
const searchMatrix = (matrix: number[][], target: number): boolean => {

    const height = matrix.length;
    const width = height > 0 ? matrix[0].length : 0;
    if (height === 0 || width === 0) { return false; }  

  // This function can be implemented using binary search as well (maybe next time)
  const getArrayTarget = (): number[] => {
    for (let i = 0; i < height; i++) {
      let arrayItem = matrix[i];
      if (arrayItem[0] <= target && target <= arrayItem[arrayItem.length - 1]) {
        return arrayItem;
      }
    }
    return null;
  }

  const binarySearch = (arrayToSearch, targetValue): number => {

    let left = 0;
    let right = arrayToSearch.length - 1;
   
    while (left <= right) {
      if (arrayToSearch[left] === targetValue) {
        return left;
      }

      if (arrayToSearch[right] === targetValue) {
        return right;
      }

      let mid = Math.floor((left + right) / 2);
      if (arrayToSearch[mid] === targetValue) {
        return mid;
      }
      if (arrayToSearch[mid] < targetValue) {
        left = mid + 1;
      }
      else if (arrayToSearch[mid] > targetValue) {
        right = mid - 1;
      }
    }

    return null;
    
  }

  const arrayItem = getArrayTarget();
    if (!arrayItem) { return false; }
    return binarySearch(arrayItem, target) !== null;

};




// some test cases
console.log(searchMatrix([[1,3,5,7],[10,11,16,20],[23,30,34,60]], 3)); // true
console.log(searchMatrix([[1,3,5,7],[10,11,16,20],[23,30,34,60]], 13)); // false