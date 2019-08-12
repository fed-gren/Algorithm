const fib = new Array(100);
fib[0] = 0;
fib[1] = 1;

function productFib(prod) {
  for (let i = 2; i < 100; i += 1) {
    fib[i] = fib[i - 1] + fib[i - 2];
  }

  let i = 2,
    num1 = 0,
    num2 = 0;
  let ansFlag = false;
  while (true) {
    if (i >= 100) break;
    if (fib[i] * fib[i + 1] === prod) {
      num1 = fib[i];
      num2 = fib[i + 1];
      ansFlag = true;
      break;
    } else if (fib[i] * fib[i + 1] > prod) {
      num1 = fib[i];
      num2 = fib[i + 1];
      break;
    }
    i += 1;
  }

  return [num1, num2, ansFlag];
}

console.log(productFib(4895)); // [55, 89, true]
console.log(productFib(5895)); // [89, 144, false]
console.log(productFib(74049690)); // [6765, 10946, true]
console.log(productFib(84049690)); // [10946, 17711, false]
console.log(productFib(193864606)); // [10946, 17711, true]
console.log(productFib(447577)); // [610, 987, false]
console.log(productFib(602070)); // [610, 987, true]
