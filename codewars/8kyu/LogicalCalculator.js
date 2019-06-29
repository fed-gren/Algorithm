function logicalCalc(array, op) {
  let ans;
  switch (op) {
    case "AND":
      ans = array.every(el => el === true);
      break;

    case "OR":
      ans = array.some(el => el === true);
      break;

    case "XOR":
      ans = (array.filter(el => el === true).length % 2 === 1) ? true : false;
      break;

    default:
      throw new Error("wtf");
  }
  return ans;
}


//Best practice code
var ops = {
  'AND': (a, b) => a && b,
  'OR': (a, b) =>  a || b,
  'XOR': (a, b) => a !== b
}

function _logicalCalc(array, op){
  return array.reduce(ops[op]);
}