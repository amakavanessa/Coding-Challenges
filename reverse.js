function reverseString(str) {
  if (!str || str.length < 2 || typeof str !== "string") {
    return "Invalid input";
  }

  return str.split("").reverse().join("");
}

const reverse2 = (str) => [...str].reverse().join("");

console.log(reverseString("amaka"));
console.log(reverse2("Precious"));

const mergeSortedArrays = (arr1, arr2) => {
  return arr1.concat(arr2).sort();
};
console.log(mergeSortedArrays([0, 3, 4, 5, 6], [2]));

const mergeSortedArrays2 = (arr1, arr2) => {
  const mergedArr = [];
  let array1Index = 0;
  let array2Index = 0;

  while (arr1[array1Index] || arr2[array2Index]) {
    if (!arr2[array2Index] || arr1[array1Index] < arr2[array2Index]) {
      mergedArr.push(arr1[array1Index]);
      array1Index++;
    } else {
      mergedArr.push(arr2[array2Index]);
      array2Index++;
    }
  }
  return mergedArr;
};

console.log(mergeSortedArrays2([0, 3, 4, 5, 6], [1, 2, 7, 9]));
