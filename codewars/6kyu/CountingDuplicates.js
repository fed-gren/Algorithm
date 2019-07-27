const alphabet = {
  a: 0,
  b: 0,
  c: 0,
  d: 0,
  e: 0,
  f: 0,
  g: 0,
  h: 0,
  i: 0,
  j: 0,
  k: 0,
  l: 0,
  m: 0,
  n: 0,
  o: 0,
  p: 0,
  q: 0,
  r: 0,
  s: 0,
  t: 0,
  u: 0,
  v: 0,
  w: 0,
  x: 0,
  y: 0,
  z: 0
};

function duplicateCount(text) {
  const newAlpha = { ...alphabet };
  text
    .toLowerCase()
    .split("")
    .forEach(c => (newAlpha[c] += 1));
  let cnt = 0;
  for (let key in newAlpha) {
    if (newAlpha[key] > 1) cnt += 1;
  }
  return cnt;
}

console.log(duplicateCount("")); // 0);
console.log(duplicateCount("abcde")); // 0);
console.log(duplicateCount("aabbcde")); // 2);
console.log(duplicateCount("aabBcde")); // 2,"should ignore case");
console.log(duplicateCount("Indivisibility")); // 1)
console.log(duplicateCount("Indivisibilities")); // 2, "characters may not be adjacent")

//Best practice
// function duplicateCount(text) {
//   return text
//     .toLowerCase()
//     .split("")
//     .filter(
//       (val, i, arr) => arr.indexOf(val) !== i && arr.lastIndexOf(val) === i
//     ).length;
// }
