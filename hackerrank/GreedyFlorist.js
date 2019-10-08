/**
 * https://www.hackerrank.com/challenges/greedy-florist/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=greedy-algorithms
 * greedy
 */
function compare(a, b) {
  return b - a;
}

function getMinimumCost(k, c) {
  let ans = 0;
  const arr = [...c];
  //최소값으로 하기 위해 내림차순 정렬을 해준다.
  arr.sort(compare);
  //가장 작은 수가 연속된곳 뒤에 배치되어야 함.
  //가장 큰 수가 연속된 곳 제일 앞에 배치
  //c의 length와 k가 같으면 그냥 c를 모두 더한 것이 답.
  const len = c.length;
  if(len === k) return c.reduce((acc, cur) => acc + cur, 0);
  //arr 갯수가 0 될때까지 싸이클을 돈다.
  //k개가 한번의 싸이클이고, 이 싸이클이 끝날때마다 가격을 1씩더해서 더한다.
  let originalPrice;
  for(let price=1; price<=len; price+=1) {
    for(let i=0; i<k; i+=1) {
      originalPrice = arr.shift();
      ans += (price * originalPrice);
      if(arr.length === 0) break;
    }
    if (arr.length === 0) break;
  }
  return ans;
}

let k, c, ans;
k = 3;
c = [2,5,6];
ans = getMinimumCost(k, c);
console.log(ans); //13
k = 2;
c = [2,5,6];
ans = getMinimumCost(k, c);
console.log(ans); //15
k = 3;
c = [1,3,5,7,9];
ans = getMinimumCost(k, c);
console.log(ans); //29