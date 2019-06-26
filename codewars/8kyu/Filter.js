
/**
 * title: Implement a Filter function
 * link: https://www.codewars.com/kata/56dd9b84fe5754786f0014f7
 */
Array.prototype.myFilter = function(fn) {
  const newArr = [];
  for(let el of this) {
    if(fn(el)) newArr.push(el);
  }

  return newArr;
}

const arr = [1,2,3,4];

console.log(arr.myFilter((num) => num > 3));