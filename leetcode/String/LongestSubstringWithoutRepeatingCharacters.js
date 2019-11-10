/**
 * @url https://leetcode.com/problems/longest-substring-without-repeating-characters/
 *
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  //n^2으로 일단 풀어보자. 완전탐색이고, 제외가능한 경우 반복문을 종료 시킨다.
  //문자열을 배열로 만들고 이 배열을 순회하면서 최대 길이를 저장한다.
  let maxLen = 0;
  let tempLen = 0;
  let arr = [...s];
  let arrLen = arr.length;
  let obj = {};
  for(let i=0; i<arrLen; i++) {
    obj = {};
    tempLen = 0;
    for(let j=i; j<arrLen; j++) {
      if(obj[arr[j]]) break;
      else {
        tempLen += 1;
        obj[arr[j]] = true;
      }
    }
    maxLen = Math.max(maxLen, tempLen);
  }
  return maxLen;
};

let s, ans;

s = 'bbbbb';
ans = lengthOfLongestSubstring(s);
console.log(ans); //1

s = 'abcabcbb';
ans = lengthOfLongestSubstring(s);
console.log(ans); //3

s = 'pwwkew';
ans = lengthOfLongestSubstring(s);
console.log(ans); //3

s = 'aab';
ans = lengthOfLongestSubstring(s);
console.log(ans); //2

s = 'dvdf';
ans = lengthOfLongestSubstring(s);
console.log(ans); //3


function lengthOfLongestSubstringBest(s) {
  //반복을 파악하기 위해 map에 마지막으로 나타난 인덱스 저장
  const map = {};
  //중복되는 문자열이 시작되는 곳을 저장해서 빼기 위한 변수
  var left = 0;

  return s.split('').reduce((max, v, i) => {
    //중복이 있다면 해당 인덱스 부터, 없다면 이전 left
    left = map[v] >= left ? map[v] + 1 : left;
    map[v] = i;
    return Math.max(max, i - left + 1);
  }, 0);
}