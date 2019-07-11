const convertToUpper = s => {
  const arr = s.split("");
  arr[0] = arr[0].toUpperCase();
  return arr.join("");
};

String.prototype.toJadenCase = function() {
  return this.split(" ")
    .map(c => convertToUpper(c))
    .join(" ");
};

var str = "How can mirrors be real if our eyes aren't real";
console.log(str.toJadenCase()); // "How Can Mirrors Be Real If Our Eyes Aren't Real"
