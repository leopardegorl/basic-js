module.exports = function createDreamTeam(members) {
  let wordArr = [];
  let k = 0;
  if (members !== null && members !== undefined) {
    let l = members.length;
    for (let i = 0; i < l; i++) {
      if (typeof members[i] === "string") {
        wordArr[k] = members[i].match(/[\w]/)[0].toUpperCase();
      }
      k++;
    }

    return wordArr.sort().join("");
  } else return false;
};
