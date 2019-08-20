const comp = (a, b) => a.strIdx - b.strIdx;

function procLowUpper(arr) {
  const start = "a".charCodeAt();
  const end = "z".charCodeAt();
  const gap = start - "A".charCodeAt();
  for (let i = start; i <= end; i += 1) {
    const lower = arr[i];
    const upper = arr[i - gap];

    if (
      !(
        (lower.count === 1 && upper.count === 0) ||
        (lower.count === 0 && upper.count === 1)
      )
    ) {
      lower.count = 0;
      upper.count = 0;
    }
  }
}

function firstNonRepeatingLetter(s) {
  if (s.length === 1) return s;
  const arr = [];
  for (let i = 0; i < 65536; i += 1) {
    arr.push({ value: null, strIdx: -1, count: 0 });
  }

  s.split("").map((c, idx) => {
    const code = c.charCodeAt();
    if (arr[code].value === null) {
      arr[code] = { value: c, strIdx: idx, count: 1 };
    } else {
      arr[code].count += 1;
    }
  });

  procLowUpper(arr);

  const filteredArr = arr.filter(o => o.count === 1).sort(comp);
  if (filteredArr.length === 0) return "";
  return filteredArr[0].value;
}

console.log(firstNonRepeatingLetter("a")); // "a"
console.log(firstNonRepeatingLetter("stress")); // "t"
console.log(firstNonRepeatingLetter("moonmen")); // "e"

// best practice
/*
function firstNonRepeatingLetter(s) {
  for (var i in s) {
    if (s.match(new RegExp(s[i], "gi")).length === 1) {
      return s[i];
    }
  }
  return "";
}
*/
