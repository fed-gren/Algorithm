function array_diff(a, b) {
  b.forEach(bN => (a = a.filter(aN => aN !== bN)));
  return a;
}

console.log(array_diff([], [4, 5])); //, [], "a was [], b was [4,5]");
console.log(array_diff([3, 4], [3])); //, [4], "a was [3,4], b was [3]");
console.log(array_diff([1, 8, 2], [])); //, [1,8,2], "a was [1,8,2], b was []");
