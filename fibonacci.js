function fibonacciIterative(n) {
  let fib = [0, 1];
  for (let i = 2; i < n + 1; i++) {
    fib.push(fib[i - 2] + fib[i - 1]);
  }
  return fib[n];
}

console.log(fibonacciIterative(5));
function fibonaccRecursive(n) {
  if (n < 2) {
    return n;
  }

  return fibonaccRecursive(n - 1) + fibonaccRecursive(n - 2);
}
//0 1 1 2 3 5 8
console.log(fibonaccRecursive(5));
