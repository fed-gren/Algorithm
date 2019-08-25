function longest(s1, s2) {
  let s = "a".charCodeAt();
  let e = "z".charCodeAt();
  let arr = [];
  for (let i = s; i <= e; i += 1) {
    arr.push(String.fromCharCode(i));
  }
  s1 = s1.split("").sort();
  s2 = s2.split("").sort();
  return arr.filter(a => s1.includes(a) || s2.includes(a)).join("");
}

console.log(longest("aretheyhere", "yestheyarehere")); // "aehrsty")
console.log(longest("loopingisfunbutdangerous", "lessdangerousthancoding")); // "abcdefghilnoprstu")
console.log(longest("inmanylanguages", "theresapairoffunctions")); // "acefghilmnoprstuy")
