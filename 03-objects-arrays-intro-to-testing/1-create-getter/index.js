/**
 * createGetter - creates function getter which allows select value from object
 * @param {string} path - the strings path separated by dot
 * @returns {function} - function-getter which allow get value from object by set path
 */
export function createGetter(path) {
  let split = path.split(".");
  let traverseDepth = split.length;
  return function(obj) {
    let objQuery = obj;
    function traverse(obj, index) {
      if (index == traverseDepth || obj === undefined) {
        return obj;
      }
      obj = obj[split[index]];
      return traverse(obj, ++index);
    }
    return traverse(objQuery, 0);
  }
}
