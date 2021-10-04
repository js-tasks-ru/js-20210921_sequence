/**
 * sortStrings - sorts array of string by two criteria "asc" or "desc"
 * @param {string[]} arr - the array of strings
 * @param {string} [param="asc"] param - the sorting type "asc" or "desc"
 * @returns {string[]}
 */

let engAlphabetOrder = ["A", "a", "B", "b", "C", "c", "D", "d", "E", "e", "F", "f", "G",
  "g", "H", "h", "I", "i", "J", "j", "K", "k", "L", "l", "M", "m", "N", "n", "O", "o", "P",
  "Q", "q", "R", "r", "S", "s", "T", "t", "U", "u", "V", "v", "W", "w", "X", "x", "Y", "y",
  "Z", "z"];

let rusAlphabetOrder = ["А", "а", "Б", "б", "В", "в", "Г", "г", "Д", "д", "Е", "е", "Ё", "ё",
  "Ж", "ж", "З", "з", "И", "и", "Й", "й", "К", "к", "Л", "л", "М", "м", "Н", "н", "О", "о", "П",
  "п", "Р", "р", "С", "с", "Т", "т", "У", "у", "Ф", "ф", "Х", "х", "Ц", "ц", "Ч", "ч", "Ш", "ш", "Щ",
  "щ", "Э", "э", "Ю", "ю", "Я", "я"];

let bothAlphabets = [].concat(rusAlphabetOrder, engAlphabetOrder);

function compareStrings(a, b, param = "asc", i = 0) {
  if (param == "desc") {
    if (bothAlphabets.indexOf(a[i]) < bothAlphabets.indexOf(b[i])) return 1;
    if (bothAlphabets.indexOf(a[i]) == bothAlphabets.indexOf(b[i])) {
      return compareStrings(a.slice(i), b.slice(i), param, ++i);
    }
    else return -1;
  }

  if (bothAlphabets.indexOf(a[i]) > bothAlphabets.indexOf(b[i])) return 1;
  if (bothAlphabets.indexOf(a[i]) == bothAlphabets.indexOf(b[i])) {
    return compareStrings(a.slice(i), b.slice(i), param, ++i);
  }
  else return -1;
}

export function sortStrings(arr, param = "asc") {
  return arr.slice().sort((a, b) => compareStrings(a, b, param, 0));
}
