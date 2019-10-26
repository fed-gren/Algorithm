const { Test } = require("../kata");

function arrSum(arr) {
  return arr.reduce((acc, cur) => acc + cur, 0);
}

function findEvenIndex(arr) {
  //Code goes here!
  //특정 인덱스를 기준으로 왼쪽 배열의 합과 오른쪽 배열의 합이 같으면 그 인덱스는 해당하는 거임.
  //이 인덱스가 적은것이 답이므로 처음 인덱스에서 부터 찾아나간다.
  //일단 왼쪽 배열, 오른쪽배열을 나누는 방법은 slice를 사용한다.
  //현재 인덱스가 i일때, 왼쪽배열은 array.slice(0, i-1), 오른쪽 배열은 array.slice(i + 1, arrLen).
  let len = arr.length;
  let tempLen = len;
  let ans = -1;
  let curIdx = 0;
  while(tempLen--) {
    const leftArr = arr.slice(0, curIdx);
    const rightArr = arr.slice(curIdx + 1, len);
    const leftSum = arrSum(leftArr);
    const rightSum = arrSum(rightArr);
    if(leftSum === rightSum) {
      ans = curIdx;
      break;
    } else {
      curIdx += 1;
    }
  }

  return ans;
}

Test.describe("FindEvenIndex", function () {
  Test.it("Tests", function () {
    Test.assertEquals(findEvenIndex([1, 2, 3, 4, 3, 2, 1]), 3, "The array was: [1,2,3,4,3,2,1] \n");
    Test.assertEquals(findEvenIndex([1, 100, 50, -51, 1, 1]), 1, "The array was: [1,100,50,-51,1,1] \n");
    Test.assertEquals(findEvenIndex([1, 2, 3, 4, 5, 6]), -1, "The array was: [1,2,3,4,5,6] \n");
    Test.assertEquals(findEvenIndex([20, 10, 30, 10, 10, 15, 35]), 3, "The array was: [20,10,30,10,10,15,35] \n");
  });
});