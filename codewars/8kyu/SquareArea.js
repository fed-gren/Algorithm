function squareArea(A){
  let r = (A * 4) / (2 * Math.PI);
  return Number((r*r).toFixed(2));
}

console.log(squareArea(2));   // 1.62
console.log(squareArea(0));   // 0
console.log(squareArea(14.05));   // 80