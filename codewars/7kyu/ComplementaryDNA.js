const DNAStrand = dna =>
  dna
    .split("")
    .map(c => {
      if (c === "A") return "T";
      else if (c === "T") return "A";
      else if (c === "G") return "C";
      else if (c === "C") return "G";
    })
    .join("");

console.log(DNAStrand("AAAA")); //,"TTTT"
console.log(DNAStrand("ATTGC")); //,"TAACG"
console.log(DNAStrand("GTAT")); //,"CATA"
