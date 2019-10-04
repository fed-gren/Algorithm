/**
 * https://www.hackerrank.com/challenges/ctci-ransom-note/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=dictionaries-hashmaps
 * Dictionaries and Hashmaps
 */

function checkMagazine(magazine, note) {
  const m = new Map();
  const len = note.length;
  let noteWord;
  magazine.forEach(word => {
    if (m.has(word)) m.set(word, m.get(word) + 1);
    else m.set(word, 1);
  });

  for (let i = 0; i < len; i += 1) {
    noteWord = note[i];
    if (m.has(noteWord) && m.get(noteWord) > 0) m.set(noteWord, m.get(noteWord) - 1);
    else {
      console.log("No");
      return;
    }
  }
  console.log("Yes");
}

let m, n, ans;
m = ['give', 'me', 'one', 'grand', 'today', 'night'];
n = ['give', 'one', 'grand', 'today'];
// ans = checkMagazine(m, n);  //Yes

m = ['two', 'times', 'three', 'is', 'not', 'four'];
n = ['two', 'times', 'two', 'is', 'four'];
ans = checkMagazine(m, n);  //No

m = ['ive', 'got', 'a', 'lovely', 'bunch', 'of', 'coconuts'];
n = ['ive', 'got', 'some', 'coconuts'];
// ans = checkMagazine(m, n);  //No