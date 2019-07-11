const findShort = s =>
  s.split(" ").reduce((acc, cur) => acc > cur.length ? cur.length : acc, 100);

console.log(findShort("bitcoin take over the world maybe who knows perhaps")); // 3
console.log(findShort("turns out random test cases are easier than writing out basic ones")); // 3
