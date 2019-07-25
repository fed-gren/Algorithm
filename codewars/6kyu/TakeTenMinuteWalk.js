function isValidWalk(walk) {
  if (walk.length !== 10) return false;
  let verticalPos = (horizontalPos = 0);
  walk.forEach(dir => {
    if (dir === "n") verticalPos += 1;
    else if (dir === "s") verticalPos -= 1;
    else if (dir === "e") horizontalPos += 1;
    else horizontalPos -= 1;
  });
  return verticalPos === 0 && horizontalPos === 0;
}

//some test cases for you...
console.log(isValidWalk(["n", "s", "n", "s", "n", "s", "n", "s", "n", "s"])); //true
console.log(
  !isValidWalk(["w", "e", "w", "e", "w", "e", "w", "e", "w", "e", "w", "e"])
); //false
console.log(!isValidWalk(["w"])); //false
console.log(!isValidWalk(["n", "n", "n", "s", "n", "s", "n", "s", "n", "s"])); // false
