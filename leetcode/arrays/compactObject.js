// Given an object or array obj, return a compact object.

// A compact object is the same as the original object, except with keys containing falsy values removed. This operation applies to the object and any nested objects. Arrays are considered objects where the indices are keys. A value is considered falsy when Boolean(value) returns false.

// You may assume the obj is the output of JSON.parse. In other words, it is valid JSON.

// Example 1:

// Input: obj = [null, 0, false, 1]
// Output: [1]
// Explanation: All falsy values have been removed from the array.
// Example 2:

// Input: obj = {"a": null, "b": [false, 1]}
// Output: {"b": [1]}
// Explanation: obj["a"] and obj["b"][0] had falsy values and were removed.
// Example 3:

// Input: obj = [null, 0, 5, [0], [false, 16]]
// Output: [5, [], [16]]
// Explanation: obj[0], obj[1], obj[3][0], and obj[4][0] were falsy and removed.

// Constraints:

// obj is a valid JSON object
// 2 <= JSON.stringify(obj).length <= 106

var compactObject = function (obj) {
  // 1. Base case: if obj is null or not an object, return it as it is
  if (typeof obj !== "object"  || obj === null) {
    return obj;
  }
  // 2. Decide result type (array or object)
 let result = Array.isArray(obj) ? []: {}

 // 3. Loop through keys (or indices for arrays)
  for (let key in obj) {
     // 4. Recursively clean the value
    let cleanedValue = compactObject(obj[key]);

    // 5. Keep only truthy values
    if (Boolean(cleanedValue)) {
        // For arrays, push the value
      if (Array.isArray(result)){
        result.push(cleanedValue)
      } else 
        // For objects, keep the same key
        result[key] = cleanedValue
    }
  }


  // or with basic for loop
  // const keys = Object.keys(obj);

// for (let i = 0; i < keys.length; i++) {
//     const key = keys[i];

//     // Recursively clean the value
//     let cleanedValue = compactObject(obj[key]);

//     // Keep only truthy values
//     if (Boolean(cleanedValue)) {
//         if (Array.isArray(result)) {
//             result.push(cleanedValue);
//         } else {
//             result[key] = cleanedValue;
//         }
//     }
// }


  
  return result;
};

console.log(compactObject({"a": null, "b": [false, 1]}))

