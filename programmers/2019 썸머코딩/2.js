// 문제 설명
// 올바른 괄호란 (())나 ()와 같이 올바르게 모두 닫힌 괄호를 의미합니다. )(나 ())() 와 같은 괄호는 올바르지 않은 괄호가 됩니다. 괄호 쌍의 개수 N이 주어질 때, N개의 괄호 쌍으로 만들 수 있는 모든 가능한 괄호 문자열을 배열형태로 반환하는 함수 solution을 완성해 주세요. 반환되는 문자열 배열은 오름차순으로 정렬되어 있어야 합니다.

// 제한사항
// 괄호 쌍의 개수 N : 1 ≤ N ≤ 12, N은 정수
// 입출력 예
// N	result
// 2	[ (()), ()() ]
// 3	[ ((())), (()()), (())(), ()(()), ()()() ]
// 입출력 예 설명
// 입출력 예 #1
// 2개의 괄호쌍으로 [ (()), ()() ]의 2가지를 만들 수 있습니다.
// 입출력 예 #2
// 3개의 괄호쌍으로 [ ((())), (()()), (())(), ()(()), ()()() ]의 5가지를 만들 수 있습니다.

var stack = {
  s : [],
  push(data) {
    this.s.push(data);
  },
  pop() {
    if(this.s.length <= 0) return -1;
    else {
      return this.s.pop();
    }
  },

  empty() {
    return this.s.length === 0;
  },

  clear() {
    this.s.length = 0;
  }
}

function setLen(n, bin) {
  var maxLen = 2 * n;
  while(true) {
    if(bin.length >= maxLen) break;
    bin = "0" + bin;
  }
  return bin;
}

function checkCorrectPair(bin) {
  var len = bin.length;
  stack.clear();
  for(var i=0; i<len; i+=1) {
    if(bin[i] === "0") {
      stack.push("0");
    } else {
      if(stack.pop() === -1) {
        return false;
      }
    }
  }
  if(stack.empty()) return true;
  else return false;
}

function convertToBracket(bin) {
  var bracket = "";
  for(var i=0; i<bin.length; i+=1) {
    if(bin[i] === "0") bracket += "(";
    else bracket += ")";
  }
  return bracket;
}

function solution(N) {
  var answer = [];
  var endNum = Math.pow(2, (2 * N));
  var bin;
  for(var i=0; i<endNum; i+=1) {
    bin = i.toString(2);
    bin = setLen(N, bin);
    // console.log(i, ": " + bin);
    if(checkCorrectPair(bin)) {
      // console.log(i, ": " + bin);
      answer.push(convertToBracket(bin));
    }
  }
  return answer;
}

function main() {
  var input = 2;
  var ans = solution(input);
  // console.log(ans);   //[ (()), ()() ]

  input = 3;
  ans = solution(input);
  // console.log(ans);   //[ ((())), (()()), (())(), ()(()), ()()() ]

  input = 4;
  ans = solution(input);
  console.log(ans);
}

main();