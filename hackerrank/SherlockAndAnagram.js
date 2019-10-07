/**
 * https://www.hackerrank.com/challenges/sherlock-and-anagrams/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=dictionaries-hashmaps
 * Dictionaries and Hashmaps
 */
function isAnagram(s1, s2) {
  const s1Spellings = [];
  const s2Spellings = [];
  for (let i = 0; i < 26; i += 1) {
    s1Spellings[i] = 0;
    s2Spellings[i] = 0;
  }
  const s1Arr = s1.split("");
  const s2Arr = s2.split("");
  const aCharCode = 'a'.charCodeAt();
  s1Arr.forEach(c => {
    s1Spellings[c.charCodeAt() - aCharCode] += 1;
  })
  s2Arr.forEach(c => {
    s2Spellings[c.charCodeAt() - aCharCode] += 1;
  })

  for (let i = 0; i < 26; i += 1) {
    if (s1Spellings[i] !== s2Spellings[i]) return false;
  }
  return true;
}

function sherlockAndAnagrams(s) {
  let ans = 0;
  //s 문자열에서 나올 수 있는 substring을 모두 모은 배열을 만든다.
  //이 substring의 최대 길이는 s.length - 1
  const substrings = [];
  const maxLen = s.length;
  for (let i = 1; i < maxLen; i += 1) {
    for (let j = 0; j <= maxLen - i; j += 1) {
      substrings.push({ text: s.substring(j, j + i), isAnagram: false });
    }
  }

  //이 배열을 이중 반복문을 돌리면서 anagram인지 확인한다.
  const subLen = substrings.length;
  for (let i = 0; i < subLen; i += 1) {
    for (let j = 0; j < subLen; j += 1) {
      if (j > i) break;
      if (i === j || substrings[i].text.length !== substrings[j].text.length) continue;
      if (isAnagram(substrings[i].text, substrings[j].text)) {
        ans += 1;
        substrings[i].isAnagram = true;
        substrings[j].isAnagram = true;
      }
    }
  }

  //anagram인지 확인하는 방법은 해당 문자열의 스펠링 갯수가 일치하면 된다.
  //객체로 원소로 만들어서 anagram으로 체크했으면 넘어간다.
  //[{text: "a", isAnagram: true}]
  return ans;
}

let s, ans;
s = "abba";
ans = sherlockAndAnagrams(s);
console.log(ans); //4

s = "abcd";
ans = sherlockAndAnagrams(s);
console.log(ans); //0

s = "kkkk";
ans = sherlockAndAnagrams(s);
console.log(ans); //10

s = "ifailuhkqq";
ans = sherlockAndAnagrams(s);
console.log(ans); //3
