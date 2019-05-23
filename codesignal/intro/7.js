function almostIncreasingSequence(seq) {
  var bad = 0;
  for (var i = 1; i < seq.length; i++)
    if (seq[i] <= seq[i - 1]) {
      bad++;
      if (bad > 1) return false;
      if (seq[i] <= seq[i - 2] && seq[i + 1] <= seq[i - 1]) return false;
    }
  return true;
}

let input, ans;

input = [1, 3, 2, 1];
ans = almostIncreasingSequence(input);
console.log(ans); //false
input = [1, 3, 2];
ans = almostIncreasingSequence(input);
console.log(ans); //true
input = [1, 2, 1, 2];
ans = almostIncreasingSequence(input);
console.log(ans); //false
