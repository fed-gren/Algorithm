const digital_root = n => {
  while (n >= 10) {
    n = Number(n)
      .toString()
      .split("")
      .reduce((acc, cur) => {
        return acc + Number(cur);
      }, 0);
  }
  return n;
};

console.log(digital_root(16)); //, 7 )
console.log(digital_root(456)); //, 6 )
