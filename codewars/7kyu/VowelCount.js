function getCount(str) {
  var vowelsCount = 0;
  for(let ch of str) {
    if((ch === "a") || (ch === "e") || (ch === "i") || (ch === "o") || (ch === "u")) vowelsCount += 1;
  }
  return vowelsCount;
}

console.log(getCount("abracadabra"));    //5