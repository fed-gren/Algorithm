function accum(s) {
  let arr = s.split(``);
  arr = arr.map((el, idx) => {
    let newText = el.toUpperCase();
    while(idx--) {
      newText += el.toLowerCase();
    }
    return newText;
  });
  return arr.join(`-`);
}


accum("abcd") //-> "A-Bb-Ccc-Ddd
accum("RqaEzty") //-> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyy
accum("cwAt") //-> "C-Ww-Aaa-Tttt"