// Solution for: https://leetcode.com/problems/sort-an-array/

const sortArray = (nums: number[]): number[] => {
    
    let temp:number[] = new Array(nums.length);
    mergeSort(nums, temp, 0, nums.length - 1);
    return nums;

};

const mergeSort = (nums: number[], temp:number[], left:number, right:number): void => {

    if(left < right) {
        let mid: number = Math.floor((left + right) / 2);
        mergeSort(nums, temp, left, mid);
        mergeSort(nums, temp, mid + 1, right);
        merge(nums, temp, left, mid, right);
    }

}

const merge = (nums: number[], temp: number[], left:number, mid:number, right: number): void => {

    let i: number = left;
    let j: number = mid + 1;
    let k: number = left;

    while(i <= mid && j <= right) {
        if(nums[i] <= nums[j]) {
            temp[k++] = nums[i++];
        } else {
            temp[k++] = nums[j++];
        }
    }

    while(i <= mid) {
        temp[k++] = nums[i++];
    }

    while(j <= right) {
        temp[k++] = nums[j++];
    }

    for(let m:number = left; m <= right; m++) {
        nums[m] = temp[m];
    }

}

// some tests
console.log(sortArray([5, 2, 3, 1])); // [1, 2, 3, 5]
console.log(sortArray([5, 1, 1, 2, 0, 0])); // [0, 0, 1, 1, 2, 5]