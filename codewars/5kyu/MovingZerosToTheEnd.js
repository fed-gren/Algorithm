var moveZeros = function(arr) {
  let cntZero = 0;
  arr.forEach(c => {
    if (c === 0) cntZero += 1;
  });
  arr = arr.filter(c => c !== 0);
  for (let i = 0; i < cntZero; i += 1) {
    arr.push(0);
  }
  return arr;
};

console.log(moveZeros([1, 2, 0, 1, 0, 1, 0, 3, 0, 1])); //[1,2,1,1,3,1,0,0,0,0]
