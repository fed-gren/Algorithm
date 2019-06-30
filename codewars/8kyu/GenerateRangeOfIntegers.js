const generateRange = (min, max, step) => {
  const arr = [];
  let curVal = min;
  while(curVal <= max) {
    arr.push(curVal);
    curVal += step;
  }
  return arr;
}