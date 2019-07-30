const compare = (a, b) => a.num > b.num;

function order(words) {
  return words
    .split(" ")
    .map(c => {
      let num = 0;
      c.split("").forEach(v => {
        if (isFinite(v)) num = v;
      });
      return { num, string: c };
    })
    .sort(compare)
    .map(c => c.string)
    .join(" ");
}

// console.log(order("is2 Thi1s T4est 3a")); //, "Thi1s is2 3a T4est")
console.log(order("4of Fo1r pe6ople g3ood th5e the2")); //, "Fo1r the2 g3ood 4of th5e pe6ople")
console.log(order("")); //, "")
