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
