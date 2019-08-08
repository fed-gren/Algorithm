const rgb = (r, g, b) =>
  [r, g, b]
    .map(v => (v < 0 ? 0 : v > 255 ? 255 : v))
    .map(v => Number(v).toString(16))
    .map(s => (s.length < 2 ? "0" + s : s))
    .map(s => s.toUpperCase())
    .join("");

console.log(rgb(0, 0, 0)); // '000000')
console.log(rgb(0, 0, -20)); // '000000')
console.log(rgb(300, 255, 255)); // 'FFFFFF')
console.log(rgb(173, 255, 47)); // 'ADFF2F')
