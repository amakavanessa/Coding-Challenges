var rotate = function (nums, k) {
  for (i = 0; i < k; i++) {
    var popped = nums.pop();
    nums.unshift(popped);
  }
  return nums;
};

var nums = [1, 2, 3, 4, 5, 6, 7];
console.log(rotate(nums, 3));

var fruits = ["apple", "banana", "cherry", "date", "elderberry"];
console.log(rotate(fruits, 3));
