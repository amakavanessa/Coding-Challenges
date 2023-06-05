function moveZeroes(nums) {
  let left = 0;
  let right = nums.length - 1;
  while (left <= right) {
    if (nums[left] === 0) {
      nums.push(0);
      nums.splice(left, 1);
      right--;
    } else {
      left++;
    }
  }
  console.log(nums);
}

var num = [0, 3, 0, 4, 0, 6, 0, 0, 1, 0, 0, 3, 2, 0]; //[010320]

moveZeroes(num);
