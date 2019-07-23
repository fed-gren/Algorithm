const arrayCutter = (arr, n) => {
  let str = "";
  while (n--) {
    str += arr.shift();
  }

  return [str, arr.join("")];
};

const createPhoneNumber = nums => {
  const first = arrayCutter(nums, 3);
  const second = arrayCutter(nums, 3);
  return `(${first[0]}) ${second[0]}-${nums.join("")}`;
};

console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])); //"(123) 456-7890"
