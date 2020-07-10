/**
 * Loops through a nested object to set the last objects param or value
 *
 * @param obj
 * @param newValue
 * @param isKey
 */
export function walkObject(
  obj: object,
  newValue: string,
  isKey: boolean = false
) {
  const keys = Object.keys(obj);

  // If it's the top level, create first param
  if (keys.length === 0) {
    obj[newValue] = {};
  }

  // Loop through objects parameters
  keys.forEach(function (key, i) {
    // Only do the first for perf reasons
    if (i === 0) {
      let value = obj[key];

      // If it's an object, recursively run again
      if (typeof value === "object") {
        walkObject(value, newValue, isKey);
      }

      // Set param or value of nested object
      if (isKey) {
        value[newValue] = {};
      } else {
        value = newValue;
      }
    }
  });

  return obj;
}
