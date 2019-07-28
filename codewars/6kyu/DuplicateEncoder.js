const duplicateEncode = word =>
  word
    .toLowerCase()
    .split("")
    .map(c =>
      word.toLowerCase().indexOf(c) === word.toLowerCase().lastIndexOf(c)
        ? "("
        : ")"
    )
    .join("");

console.log(duplicateEncode("din")); //"(((");
console.log(duplicateEncode("adc(eQQQkQ!")); //((((()))()(
