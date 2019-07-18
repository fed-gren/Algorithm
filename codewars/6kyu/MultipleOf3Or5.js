const solution = n => {
  const arr = [];
  for (let i = 1; i < n; i += 1) {
    if (i % 3 === 0 || i % 5 === 0) arr.push(i);
  }
  return arr.reduce((acc, cur) => acc + cur, 0);
};

console.log(solution(10)); //23
