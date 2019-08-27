function printerError(s) {
  const total = s.length;
  const start = "a".charCodeAt();
  const end = "m".charCodeAt();
  const err = s
    .split("")
    .filter(c => !(c.charCodeAt() >= start && c.charCodeAt() <= end)).length;
  return `${err}/${total}`;
}

var s = "aaaaaaaaaaaaaaaabbbbbbbbbbbbbbbbbbmmmmmmmmmmmmmmmmmmmxyz";
console.log(printerError(s)); // "3/56");
