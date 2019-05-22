function makeArrayConsecutive2(statues) {
  const noDupl = new Set(statues);
  let max = 0, min = 20;
  noDupl.forEach(num => {
    max = (max < num) ? num : max;
    min = (min > num) ? num : min;
  });
  let ans = (max - min + 1) - noDupl.size;
  return ans;
}

let input, ans;

input = [6, 2, 3, 8];
ans = makeArrayConsecutive2(input);
console.log(ans); //3
