function solution(n, lost, reserve) {
  var answer = 0;
  var lostLen = lost.length;
  var reserveLen = reserve.length;
  for(var i=0; i<lostLen; i+=1) {
    for(var j=0; j<reserveLen; j+=1) {
      if(lost[i] === reserve[j]) {
        lost[i] = -1;
        reserve[j] = -1;
        break;
      }
    }
  }

  lost = lost.filter((el) => {if(el !== -1) return el});
  reserve = reserve.filter((el) => {if(el !== -1) return el});
  console.log(reserve);

  lostLen = lost.length;
  reserveLen = reserve.length;
  for(var i=0; i<lostLen; i+=1) {
    for(var j=0; j<reserveLen; j+=1) {
      if(lost[i]-1 === reserve[j] || lost[i]+1 === reserve[j]) {
        lost[i] = -1;
        reserve[j] = -1;
        break;
      }
    }
  }
  lost = lost.filter((el) => {if(el !== -1) return el});
  reserve = reserve.filter((el) => {if(el !== -1) return el});
  console.log(lost);

  answer = n - lost.length;
  return answer;
}

function main() {
  var ans, n, lost, reserve;

  n = 5;
  lost = [2,4];
  reserve = [1,3,5];
  ans = solution(n, lost, reserve);
  console.log(ans);   //5

  n = 5;
  lost = [2,4];
  reserve = [3];
  ans = solution(n, lost, reserve);
  console.log(ans);   //4

  n = 3;
  lost = [3];
  reserve = [1];
  ans = solution(n, lost, reserve);
  console.log(ans);   //2

  n = 6;
  lost = [1,2,3];
  reserve = [3,4,5];
  ans = solution(n, lost, reserve);
  console.log(ans);   //5

}

main();