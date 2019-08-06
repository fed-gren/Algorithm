const opposite = {
  NORTH: "SOUTH",
  SOUTH: "NORTH",
  WEST: "EAST",
  EAST: "WEST"
};

function dirReduc(arr) {
  //붙어있는 애들끼리 반대방향이면 둘다 지운다.
  //반대방향인지 보는 법 -> 다음 인자가 반대방향인지 파악..
  //opposite 객체를 만들어서 파악한다.
  //그리고 지운 흔적이 있으면 flag를 true로 만든다.
  //flag가 true이면 계속 반복한다.
  //flag가 false일 때 멈춘다.
  //남은 배열 반환
  let flag = true;
  while (flag) {
    flag = false;
    arr = arr.filter((cur, idx, arr) => {
      if (cur === "REMOVE") {
        flag = true;
        return false;
      } else if (opposite[cur] === arr[idx + 1]) {
        flag = true;
        arr[idx + 1] = "REMOVE";
        return false;
      } else return true;
    });
  }
  return arr;
}

console.log(
  dirReduc(["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"])
); // ["WEST"])
console.log(dirReduc(["NORTH", "WEST", "SOUTH", "EAST"])); // ["NORTH", "WEST", "SOUTH", "EAST"])
console.log(dirReduc(["NORTH", "SOUTH", "EAST", "WEST", "EAST", "WEST"])); // [])
