// in the JavaScript file, you have a program that performs a GET request on the route https://coderbyte.com/api/challenges/json/wizard-list and then sort the object keys alphabetically. However, the sorting should be case-insensitive, and the original data structure should be preserved (e.g., arrays should remain arrays, objects should remain objects).

// Next, remove any duplicate objects from arrays. Two objects are considered duplicates if they have the same keys and values in the same order. Only the first occurrence should be preserved when an array contains duplicate objects. Finally, remove any object properties with all values set to an empty string, null, or undefined, and console log an array of the modified objects as a string.

const https = require("https");

// Send HTTP request to the specified URL
https
  .get("https://coderbyte.com/api/challenges/json/wizard-list", (res) => {
    let data = "";

    // Collect the response data
    res.on("data", (chunk) => {
      data += chunk;
    });

    // Process the received data
    res.on("end", () => {
      try {
        // Parse the JSON object
        const jsonObject = JSON.parse(data);

        // Sort object keys alphabetically (case-insensitive)
        const sortedObject = sortObjectKeys(jsonObject);

        // Remove duplicate objects from arrays and sub-arrays
        const uniqueObject = removeDuplicateObjects(sortedObject);

        // Remove properties with empty values, empty arrays, and empty objects
        const modifiedObject = removeEmptyProperties(uniqueObject);

        // Log the modified object as a string with proper formatting
        console.log(JSON.stringify(modifiedObject));
      } catch (error) {
        console.error(
          "An error occurred while processing the response:",
          error
        );
      }
    });
  })
  .on("error", (error) => {
    console.error("An error occurred while sending the HTTP request:", error);
  });

// Sort object keys alphabetically (case-insensitive)
function sortObjectKeys(object) {
  if (typeof object !== "object" || object === null) {
    return object;
  }

  if (Array.isArray(object)) {
    return object.map(sortObjectKeys);
  }

  const sortedKeys = Object.keys(object).sort((a, b) =>
    a.toLowerCase().localeCompare(b.toLowerCase())
  );
  const sortedObject = {};

  sortedKeys.forEach((key) => {
    sortedObject[key] = sortObjectKeys(object[key]);
  });

  return sortedObject;
}

// Remove duplicate objects from arrays and sub-arrays
function removeDuplicateObjects(object) {
  if (typeof object !== "object" || object === null) {
    return object;
  }

  if (Array.isArray(object)) {
    const uniqueArray = [];

    object.forEach((item) => {
      const stringifiedItem = JSON.stringify(item);
      if (
        !uniqueArray.some(
          (uniqueItem) => JSON.stringify(uniqueItem) === stringifiedItem
        )
      ) {
        uniqueArray.push(item);
      }
    });

    return uniqueArray.map(removeDuplicateObjects);
  }

  const uniqueObject = {};

  Object.keys(object).forEach((key) => {
    uniqueObject[key] = removeDuplicateObjects(object[key]);
  });

  return uniqueObject;
}

// Remove properties with empty values, empty arrays, and empty objects
function removeEmptyProperties(object) {
  if (typeof object !== "object" || object === null) {
    return object;
  }

  if (Array.isArray(object)) {
    const nonEmptyArray = object.map(removeEmptyProperties).filter(Boolean);
    return nonEmptyArray.length > 0 ? nonEmptyArray : undefined;
  }

  const modifiedObject = {};

  Object.keys(object).forEach((key) => {
    const value = removeEmptyProperties(object[key]);
    if (value !== "" && value !== null && value !== undefined) {
      modifiedObject[key] = value;
    }
  });

  return Object.keys(modifiedObject).length > 0 ? modifiedObject : undefined;
}
