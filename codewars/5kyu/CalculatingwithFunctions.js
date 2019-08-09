const OPERATORS = ["+", "-", "*", "/"];

function Num(n) {
  return function(str) {
    if (str !== undefined) {
      const arr = str.split("");
      const v = Number(arr[1]);
      switch (arr[0]) {
        case OPERATORS[0]:
          return n + v;
        case OPERATORS[1]:
          return n - v;
        case OPERATORS[2]:
          return n * v;
        case OPERATORS[3]:
          return Math.floor(n / v);
        default:
          break;
      }
      return `${n}${str}`;
    } else {
      return n;
    }
  };
}

const Operator = s => n => `${s}${n}`;

const funcArr = [];
const operatorArr = [];

for (let i = 0; i < 10; i += 1) {
  funcArr.push(Num(i));
}

for (let i = 0; i < 4; i += 1) {
  operatorArr.push(Operator(OPERATORS[i]));
}

const [zero, one, two, three, four, five, six, seven, eight, nine] = funcArr;
const [plus, minus, times, dividedBy] = operatorArr;

console.log(one(plus(one())));
console.log(two(minus(nine())));
console.log(four(times(six())));
console.log(seven(dividedBy(eight())));

console.log(seven(times(five()))); // must return 35);
console.log(four(plus(nine()))); // must return 13);
console.log(eight(minus(three()))); // must return 5);
console.log(six(dividedBy(two()))); // must return 3);
