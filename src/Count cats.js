module.exports = function countCats(Array) {
  let l = Array.length;
  let find = 0;
  let arrayString = [];
  let l2 = arrayString.length;
  for (let i = 0; i < l; i++) {
    arrayString = Array[i];
    for (let j = 0; j < l2; j++) {
      if ("^^" in arrayString[j]) {
        find++;
        continue;
      }
    }
  }
  return find;
};
