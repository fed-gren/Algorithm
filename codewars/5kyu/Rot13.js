const obj = {};
const OBJ = {};

(function() {
  let start = "a".charCodeAt();
  let end = "z".charCodeAt();

  for (let i = start; i <= start + (end - start) / 2; i += 1) {
    obj[String.fromCharCode(i)] = String.fromCharCode(i + 13);
  }
  let valArr = Object.values(obj);
  let keyArr = Object.keys(obj);
  valArr.forEach((v, idx) => {
    obj[v] = keyArr[idx];
  });

  start = "A".charCodeAt();
  end = "Z".charCodeAt();

  for (let i = start; i <= start + (end - start) / 2; i += 1) {
    OBJ[String.fromCharCode(i)] = String.fromCharCode(i + 13);
  }
  valArr = Object.values(OBJ);
  keyArr = Object.keys(OBJ);
  valArr.forEach((v, idx) => {
    OBJ[v] = keyArr[idx];
  });
})();

function rot13(message) {
  return message
    .split("")
    .map(c => {
      if (/[a-z]/.test(c)) {
        return obj[c];
      } else if (/[A-Z]/.test(c)) {
        return OBJ[c];
      } else return c;
    })
    .join("");
}

console.log(rot13("Test")); //Grfg
console.log(rot13("test")); //grfg
