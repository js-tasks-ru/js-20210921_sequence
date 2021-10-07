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
    function traverse(index) {
      if (index == traverseDepth || objQuery === undefined) {
        return objQuery;
      }
      objQuery = objQuery[split[index]];
      return traverse(++index);
    }
    return traverse(0);
  }
}
