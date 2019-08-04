function validParentheses(parens) {
  const stack = [];
  const s = "(";
  const e = ")";
  if (parens[0] === e) return false;
  let flag = false;

  parens.split("").forEach(c => {
    if (c === s) stack.push(1);
    else {
      if (stack.length <= 0) flag = true;
      stack.pop(e);
    }
  });

  if (flag) return false;
  else if (stack.length !== 0) return false;
  else return true;
}

console.log(validParentheses("()")); // true);
console.log(validParentheses("())")); // false);
console.log(validParentheses(")(()))")); // false);
console.log(validParentheses("(")); // false);
console.log(validParentheses("(())((()())())")); // true);
