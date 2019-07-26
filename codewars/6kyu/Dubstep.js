const WORD = "WUB";

function songDecoder(song) {
  while (song.indexOf(WORD) >= 0) {
    const start = song.indexOf(WORD);
    const end = start + 2;
    song = song
      .split("")
      .map((cur, idx) => {
        if (idx === start) return " ";
        else if (idx > start && idx <= end) return "";
        else return cur;
      })
      .filter(cur => cur !== "")
      .filter((_, idx, arr) => !(arr[idx] === " " && arr[idx + 1] === " "))
      .join("")
      .trim();
  }
  return song;
}

console.log(songDecoder("AWUBBWUBC")); // "A B C","WUB should be replaced by 1 space");
console.log(songDecoder("AWUBWUBWUBBWUBWUBWUBC")); // "A B C","multiples WUB should be replaced by only 1 space");
console.log(songDecoder("WUBAWUBBWUBCWUB")); // "A B C","heading or trailing spaces should be removed");
console.log(songDecoder("KOM")); // "A B C","heading or trailing spaces should be removed");
