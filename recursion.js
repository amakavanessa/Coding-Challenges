function findFactorialRecursive(number) {
  let answer;

  if (number === 0) {
    return 1;
  }

  answer = number * findFactorialRecursive(number - 1);

  return answer;
}

function findFactorialIterative(number) {
  let answer = 1;
  for (let i = number; i > 0; i--) {
    answer *= i;
  }
  return answer;
}

console.log(findFactorialRecursive(5));
console.log(findFactorialIterative(5));
