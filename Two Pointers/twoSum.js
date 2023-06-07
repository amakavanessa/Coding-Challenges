function twosum(nums, target) {
  let left = 0;
  let right = nums.length - 1;
  let arr = [];
  while (left < right) {
    for (let i = 0; i <= right; i++) {
      if (nums[i] + nums[right] === target) {
        arr.push(i + 1, right + 1);
        return arr;
      }
    }
    right--;
  }
}
numbers = [2, 3, 4, 7, 7, 8];
console.log(twosum(numbers, 6));

//optimized version
function twoSums(numbers, target) {
  let left = 0;
  let right = numbers.length - 1;

  while (left < right) {
    const sum = numbers[left] + numbers[right];

    if (sum === target) return [left + 1, right + 1];
    if (sum < target) left += 1;
    if (sum > target) right -= 1;
  }
}
