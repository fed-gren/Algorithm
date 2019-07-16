function GetSum(a, b) {
  if (a > b) {
    let c = a;
    a = b;
    b = c;
  }

  for (let i = a + 1; i <= b; i++) {
    a += i;
  }

  return a;
}

console.log(GetSum(0, -1)); //-1
console.log(GetSum(0, 1)); //1
