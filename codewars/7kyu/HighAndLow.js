const {max, min} = Math;

const highAndLow = nums => {
  const arr = nums.split(` `).map(n => Number(n));
  return `${max(...arr)} ${min(...arr)}`;
}

console.log(highAndLow("4 5 29 54 4 0 -214 542 -64 1 -3 6 -6"));  //"542 -214"