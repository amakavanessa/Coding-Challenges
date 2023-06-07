var reverseString = function (s) {
  let left = 0;
  let right = s.length - 1;
  while (left < right) {
    //destructuring for swappin array elements instead of assigning a temporary variable
    [s[left], s[right]] = [s[right], s[left]];
    right--;
    left++;
  }
  return s;
};

var str = ["H", "a", "n", "n", "a", "h"];
console.log(reverseString(str));
