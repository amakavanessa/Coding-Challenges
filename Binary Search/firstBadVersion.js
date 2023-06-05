//Binary Search
function Search(nums, target) {
  let left = 0;
  let right = nums.length - 1;
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (nums[mid] === target) {
      return mid;
    } else if (target < nums[mid]) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return -1;
}
let numbers = [-1, 0, 5, 9, 12];
console.log(Search(numbers, 5));

//First Bad version

var solution = function (isBadVersion) {
  /**
   * @param {integer} n Total versions
   * @return {integer} The first bad version
   */

  return function (n) {
    var left = 1;
    var right = n;
    var result = n;

    while (left <= right) {
      const mid = Math.floor((left + right) / 2);
      if (isBadVersion(mid)) {
        result = mid;
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    }
    return result;
  };
};
