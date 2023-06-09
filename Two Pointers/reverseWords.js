//Method 1
function reverseWord(s) {
  let sarr = s.split(" ");
  let l = 0;
  let r = sarr.length - 1;
  while (l <= r) {
    sarr[l] = sarr[l].split("").reverse().join("");
    l++;
  }
  return sarr.join(" ");
}

const reverseWords2 = (s) =>
  s
    .split(" ")
    .map((word) => word.split("").reverse().join(""))
    .join(" ");
s = "Let's take LeetCode contest";
console.log(reverseWord(s));
