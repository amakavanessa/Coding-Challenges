function findCombinationsFromText(itemName) {
  const tagHierarchy = [
    "Group",
    "Category",
    "Subcategory",
    "Make",
    "Model",
    "Diagram",
  ];

  //cleans up the itemName incase there are unwanted characters
  const cleanText = itemName
    .replace(/[^a-zA-Z0-9\-_,]/g, "")
    .replace(/([-_,])\1+/g, "$1");

  //regex pattern based on the tagHierarchy array
  const patternRegex = new RegExp(`(${tagHierarchy.join("|")})`, "g");

  // Extract occurrences of each tag from the cleaned text
  const tags = tagHierarchy.reduce((acc, tag) => {
    const regex = new RegExp(tag, "g");
    const matches = cleanText.match(regex);
    if (matches) {
      acc.push(matches);
    }
    return acc;
  }, []);

  // Check if any tag occurs more than once, if so, return an empty array
  if (tags.some((arr) => arr.length > 1)) {
    return [];
  }

  //a pattern to capture values between commas(,) or dashes(-) followed by an underscore
  const pattern = /[,|-]([^_,|-]+)_/g;

  // Extract matches based on the defined pattern and store them in the 'matches' array
  let match;
  const matches = [];

  while ((match = pattern.exec(cleanText)) !== null) {
    matches.push(match[1]);
  }
  // Check if any extracted match is not part of the tagHierarchy array, if so, return an empty array
  if (matches.some((arr) => !tagHierarchy.includes(arr))) {
    return [];
  }

  // Split the cleaned text using the patternRegex
  let result = cleanText.split(patternRegex);

  // Combine adjacent segments in the 'result' array if they start with an underscore
  for (let i = result.length - 1; i > 0; i--) {
    if (result[i].startsWith("_")) {
      result[i - 1] += result[i].replace(/[,_-]+$/g, "").trim();
      result.splice(i, 1);
    }
  }

  // Create a map that associates each tag with its index in the tag hierarchy
  const hierarchyIndexMap = Object.fromEntries(
    tagHierarchy.map((tag, index) => [tag, index])
  );

  // Rearrange and group the 'result' array based on the tag hierarchy and return the result
  result = tags.map((_, index) =>
    result
      .filter((element) => /[a-zA-Z0-9]/.test(element))
      .sort(
        (a, b) =>
          hierarchyIndexMap[a.split("_")[0]] -
          hierarchyIndexMap[b.split("_")[0]]
      )
      .slice(0, tags.length - index)
  );
  console.log(result);
  return result;
}

// const case1 = findCombinationsFromText(
//   "Group_Electric-Pallet-Jack-Parts-Make_BT-Prime-Mover"
// );

// const case2 = findCombinationsFromText(
//   "Group_Electric-Pallet-Jack-Parts-Category_Switches-Subcategory_Ignition-Switch"
// );
// const case3 = findCombinationsFromText(
//   "Group_Electric-Pallet-Jack-Parts, Category_Switches,Subcategory_Ignition-Switch"
// );
// const case4 = findCombinationsFromText(
//   "--Group_Electric-Pallet-Jack-Parts, Category_Switche@%s-!!Subcategory_Ignition-Switch))@!%"
// );
// const case5 = findCombinationsFromText(
//   "Category_Switches-Group_Electric-Pallet-Jack-Parts-Subcategory_Ignition-Switch"
// );
// const case6 = findCombinationsFromText(
//   "Group_Tools-Hardware-Category_Roll-Pin-Make_Atlas"
// );
// const case7 = findCombinationsFromText(
//   "Group_Tools-Hardware-Category_Roll-Pin-Make_Atlas-Group_Test"
// );

// const case8 = findCombinationsFromText(
//   "Group_Tools-Hardware-Category_Roll-Pin-Make_Atlas-WrongPrefix_Test"
// );
// const case9 = findCombinationsFromText(
//   "Group_Tools-Hardware-Category_Roll-Pin-Make_U-Line-Model_H-1193"
// );

// const case10 = findCombinationsFromText(
//   "Group_Tools-Hardware-Category_Roll-Pin-Make_Multiton-Model_J"
// );

// const case11 = findCombinationsFromText(
//   "Make_Atlas-Model_Zenith-Type9-Diagram_Frame"
// );

// const case12 = findCombinationsFromText("Group_Tools-&-Hardware");
const case13 = findCombinationsFromText(
  "Groupes_Electric-Pallet-Jack-Parts-Categorys_Battery-Subcategory_Battery-Charger-Make_Hyster-Model_B218N26949L-UP"
);

// const case14 = findCombinationsFromText(
//   "Group_Electric-Pallet-Jack-Parts-Category_Electric-Pallet-Jack-Lift-Parts-Subcategory_Yoke"
// );

// const case15 = findCombinationsFromText(
//   "Group_Industrial-Seal-Kits-Make_Yutani"
// );

// const case16 = findCombinationsFromText("Make_Atlas-Model_Zenith-Type9");

// const case17 = findCombinationsFromText(
//   "Group_Wheel-Bearings-Category_Bearing-Wiper"
// );
