const nemo = ["nemo"];
const everyone = [
  "dory",
  "bruce",
  "gill",
  "nemo",
  "marlin",
  "bloat",
  "nigel",
  "squirt",
  "darla",
  "hank",
];

// const large = new Array(10).fill("nemo");

function findNemo(array) {
  let t0 = performance.now();
  for (i = 0; i < array.length; i++) {
    if (array[i] === "nemo") {
      console.log("Found Nemo!");
    }
  }
  let t1 = performance.now();

  console.log("call to find Nemo took " + (t1 - t0) + " millisecond");
}

findNemo(everyone); // has a big 0 notation of O(n)

function findNemo2(arr) {
  arr.map((arrs) => {
    if (arrs === "nemo") {
      console.log("FOUND NEMO!");
    }
  });
}
findNemo2(everyone);

function funChallenge(input) {
  let a = 10; //O(1)
  a = 50 + 3; //O(1)

  for (let i = 0; i < input.length; i++) {
    //O(n)
    anotherFunction(); //O(n)
    let stranger = true; //O(n)
    a++; //O(n)
  }
  return a; //O(1)
}

//big O notation of funchallenge is 3 + 4n when you calculate the individual big Os

const arr = [1, 3, 4, 5];

function logAllPairsOfArray(arr) {
  for (i = 0; i < arr.length; i++) {
    for (j = 0; j < arr.length; j++) {
      console.log(arr[i], arr[j]);
    }
  }
}

logAllPairsOfArray(arr);
