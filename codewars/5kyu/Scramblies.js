const isArrAllZero = arr => {
  return !arr.some(el => el > 0);
};

function scramble(str1, str2) {
  let arr = [];
  for (let i = 0; i < 26; i += 1) {
    arr[i] = 0;
  }
  for (let c of str2) {
    const idx = c.charCodeAt() - "a".charCodeAt();
    arr[idx] += 1;
  }
  for (let c of str1) {
    const idx = c.charCodeAt() - "a".charCodeAt();
    arr[idx] -= 1;
    if (isArrAllZero(arr)) return true;
  }
  return false;
}

console.log(scramble("rkqodlw", "world")); //true);
console.log(scramble("cedewaraaossoqqyt", "codewars")); //true);
console.log(scramble("katas", "steak")); //false);
console.log(scramble("scriptjava", "javascript")); //true);
console.log(scramble("scriptingjava", "javascript")); //true);
console.log(scramble("scriptsjava", "javascripts")); //true);
console.log(scramble("jscripts", "javascript")); //false);
console.log(scramble("aabbcamaomsccdd", "commas")); //true);
