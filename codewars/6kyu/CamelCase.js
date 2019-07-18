String.prototype.camelCase = function() {
  return this.split("")
    .map((c, idx, arr) =>
      idx === 0 || arr[idx - 1] === " "
        ? c.toUpperCase()
        : arr[idx] === " "
        ? ""
        : c
    )
    .join("")
    .trim();
};

console.log("test case".camelCase()); //, "TestCase");
console.log("camel case method".camelCase()); //, "CamelCaseMethod");
