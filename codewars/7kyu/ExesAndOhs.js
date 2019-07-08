const XO = s => {
  return (
    s
      .toLowerCase()
      .split("")
      .filter(c => c === "x").length ===
    s
      .toLowerCase()
      .split("")
      .filter(c => c === "o").length
  );
};

console.log(XO("ooxx"));
console.log(XO("xooxx"));
console.log(XO("ooxXm"));
console.log(XO("zpzp"));
