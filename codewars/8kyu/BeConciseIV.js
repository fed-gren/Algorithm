const find = (arr, v) => {
  let idx = arr.indexOf(v);
  return idx === -1 ? "Not found" : idx;
}

const array = [2, 3, 5, 7, 11];

console.log(find(array, 5));
console.log(find(array, 11));
console.log(find(array, 3));
console.log(find(array, 2));
console.log(find(array, 7));
console.log(find(array, 1)); //not
console.log(find(array, 8)); //not

//best practice code
const find2 = (a, x) => (x = a.indexOf(x)) < 0 ? 'Not found' : x