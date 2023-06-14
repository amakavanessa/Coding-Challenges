const isPalindrome = (x) => {
  revX = parseInt(x.toString().split("").reverse().join(""));
  return revX == x;
};

var x = -505;
console.log(isPalindrome(x));
