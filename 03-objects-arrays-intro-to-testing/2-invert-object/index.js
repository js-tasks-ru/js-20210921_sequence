/**
 * invertObj - should swap object keys and values
 * @param {object} obj - the initial object
 * @returns {object | undefined} - returns new object or undefined if nothing did't pass
 */
export function invertObj(obj) {
  if (!obj) return;
  let keys = Object.keys(obj);
  let values = Object.values(obj);
  let newObj = {};
  for (let i = 0; i < keys.length; i++) {
    newObj[values[i]] = keys[i];
  }
  return newObj;
}
