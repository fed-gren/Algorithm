const checkSpelling = word => {
  const obj = {};
  const wordArr = word.split("");
  wordArr.forEach(c => {
    if (obj.hasOwnProperty(c)) {
      obj[c] += 1;
    } else {
      obj[c] = 1;
    }
  });

  return obj;
};

function anagrams(word, words) {
  const wordObj = checkSpelling(word);
  const ans = [];
  words.forEach(w => {
    const tempObj = checkSpelling(w);
    let flag = true;
    for (let key in tempObj) {
      if (tempObj[key] !== wordObj[key]) {
        flag = false;
      }
    }
    if (flag) ans.push(w);
  });
  return ans;
}

console.log(anagrams("abba", ["aabb", "abcd", "bbaa", "dada"])); //["aabb","bbaa"]
console.log(anagrams("racer", ["crazer", "carer", "racar", "caers", "racer"])); //["carer", "racer"]
console.log(anagrams("laser", ["lazing", "lazy", "lacer"])); // []
