/**
 * trimSymbols - removes consecutive identical symbols if they quantity bigger that size
 * @param {string} string - the initial string
 * @param {number} size - the allowed size of consecutive identical symbols
 * @returns {string} - the new string without extra symbols according passed size
 */
export function trimSymbols(string, size) {
  if (size === 0) return "";
  let counter = 0;
  let seq = 0;
  let symbs = {};
  let currentSymb = string[0];
  for (let i = 0; i < string.length; i++) {
    if (string[i] != currentSymb) {
      counter = 0;
      seq++;
    }
    if (symbs[string[i] + seq] >= size) continue;
    else symbs[string[i] + seq] = ++counter;
    currentSymb = string[i];
  }
  let resultStr = "";
  for (let [letter, times] of Object.entries(symbs)) {
    resultStr += letter[0].repeat(times);
  }
  return resultStr;
}
