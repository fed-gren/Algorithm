const squareDigits = num =>
  Number(
    num
      .toString()
      .split("")
      .map(n => Math.pow(Number(n), 2).toString())
      .join("")
  );

console.log(squareDigits(9119)); //811181
