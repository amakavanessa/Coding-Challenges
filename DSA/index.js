//code for fibonacci series

const fibo = (no) => {
  let arr = [];
  for (let n = 0; n <= no; n++) {
    if (n <= 1) {
      arr.push(n);
    } else {
      arr.push(arr[n - 1] + arr[n - 2]);
    }
  }
  return arr;
};

console.log(fibo(12));

const fibonacciRecursive = (n) => {
  if (n <= 1) {
    return n;
  }
  return fibonacciRecursive(n - 1) + fibonacciRecursive(n - 2);
};

console.log(fibonacciRecursive(10));

//Build Array from Permutation
const BuildArr = (nums) => {
  let ans = [];
  for (let i = 0; i < nums.length; i++) {
    ans[i] = nums[nums[i]];
  }
  return ans;
};

let nums = [5, 0, 1, 2, 3, 4];
console.log(BuildArr(nums));

// Given an integer array nums of length n, you want to create an array ans of length 2n where ans[i] == nums[i] and ans[i + n] == nums[i] for 0 <= i < n (0-indexed).
// Specifically, ans is the concatenation of two nums arrays.
const getConcatenation = (nums) => {
  let ans = nums;
  const n = nums.length;
  for (let i = 0; i < n; i++) {
    ans.push(nums[i]);
  }
  return ans;
};

const getConcatenation1 = function (nums) {
  nums.push(...nums);
  return nums;
};

conxsole.log(getConcatenation(nums));
