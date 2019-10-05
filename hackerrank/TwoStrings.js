/**
 * https://www.hackerrank.com/challenges/two-strings/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=dictionaries-hashmaps
 * Dictionaries and Hashmaps
 */

function twoStrings(s1, s2) {
  const m = new Map();
  for(let c of s1) {
    m.set(c, null);
  }

  for(let c of s2) {
    if(m.has(c)) return "YES";
  }
  return "NO";
}

let s1, s2;
s1 = "hello";
s2 = "world";
twoStrings(s1, s2); //YES
s1 = "hi";
s2 = "world";
twoStrings(s1, s2); //NO