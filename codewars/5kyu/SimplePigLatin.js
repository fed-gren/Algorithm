const pigIt = str =>
  str
    .split(" ")
    .map(w => {
      const arr = w.split("");
      let front = arr.shift();
      if (/[a-z]|[A-Z]/.test(front)) front += "ay";
      arr.push(front);
      return arr.join("");
    })
    .join(" ");

console.log(pigIt("Pig latin is cool")); //, "igPay atinlay siay oolcay"
console.log(pigIt("This is my string")); //, "hisTay siay ymay tringsay"
console.log(pigIt("O tempora o mores !")); //, 'Oay emporatay oay oresmay !'
