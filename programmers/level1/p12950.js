function solution(arr1, arr2) {
  var answer = [];
  var temp = [];
  const len = arr1.length;
  for(let i=0; i<len; i+=1) {
    for(let j=0; j<arr1[i].length; j+=1) {
      temp.push(arr1[i][j] + arr2[i][j]);
    }
    answer.push(temp);
    temp = [];
  }
  return answer;
}

function main() {
  let arr1 = [[1,2],[2,3]];
  let arr2 = [[3,4],[5,6]];
  let ans = solution(arr1, arr2);
  console.log(ans);
  arr1 = [[1], [2]];
  arr2 = [[3], [4]];
  ans = solution(arr1, arr2);
  console.log(ans);
}

main();