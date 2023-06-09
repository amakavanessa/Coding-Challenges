var sortedSquares = function (nums) {
  var squared = [];

  for (let i = 0; i < nums.length; i++) {
    squared.push(nums[i] * nums[i]);
  }
  let left = 0;
  let right = nums.length - 1;

  while (right > 0) {
    console.log(left);
    console.log(right);
    console.log(squared[left]);
    console.log(squared[right]);
    if (nums[left] ** 2 > nums[right] ** 2) {
      let temp = squared[left];
      squared[left] = squared[right];
      squared[right] = temp;
    }
    if (left < right) {
      left++;
    } else {
      left = 0;
      right--;
    }
  }
  return squared;
};
var sortedSquares = function (nums) {
  return nums.map((num) => num ** 2).sort((a, b) => a - b);
};

// if left < right keep right steady and be incrementing left until left=>right then you decrease right,you keep doing this till right < 0
//   i will go
const nums = [5, 3, 0, 2, 1];
// [25, 9,0,4,1]:[0,1,4,9,25]:[1, 9,0,4,25], [5,3,0,2,1] [25,9,1,4,0]
console.log(sortedSquares(nums));

var reverseWords = function (sarr) {
  s.map((word) => {
    word.split("");
    while (left < right) {
      [word[left], word[rigth]] = [word[right], word[left]];
      left++;
      right--;
    }
    console.log(s);
  });
};
