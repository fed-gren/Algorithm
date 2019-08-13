const comp = (a, b) => {
  if (a.newVal === b.newVal) {
    let i = 0;
    while (a.weight[i] === b.weight[i]) {
      i += 1;
      if (i > a.weight.length && i > b.weight.length) break;
    }
    return a.weight[i] - b.weight[i];
  } else return a.newVal - b.newVal;
};

const conv2NewVal = v => {
  return v.split("").reduce((acc, cur) => {
    return acc + Number(cur);
  }, 0);
};

function orderWeight(str) {
  return str
    .split(" ")
    .map(v => {
      return {
        weight: v,
        newVal: conv2NewVal(v)
      };
    })
    .sort(comp)
    .map(arr => arr.weight)
    .join(" ");
}

console.log(orderWeight("103 123 4444 99 2000")); // "2000 103 123 4444 99"
console.log(orderWeight("2000 10003 1234000 44444444 9999 11 11 22 123")); // "11 11 2000 10003 22 123 1234000 44444444 9999"
