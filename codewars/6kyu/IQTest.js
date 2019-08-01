function iqTest(numbers) {
  const odds = [];
  const evens = [];

  numbers
    .split(" ")
    .map(c => Number(c))
    .forEach((c, idx) => {
      if (c % 2 === 0) evens.push({ val: c, idx });
      else odds.push({ val: c, idx });
    });
  return evens.length === 1 ? evens[0].idx + 1 : odds[0].idx + 1;
}

console.log(iqTest("2 4 7 8 10")); // 3);
console.log(iqTest("1 2 2")); // 1);
