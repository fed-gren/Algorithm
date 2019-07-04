const isVowel = (c) => c === `a` || c === `e` || c === `i` ||c === `o` ||c === `u`;

const disemvowel = str => str.split(``).filter(ch => !isVowel(ch) && !isVowel(ch.toLowerCase())).join(``);

console.log(disemvowel("This website is for losers LOL!"));  //"Ths wbst s fr lsrs LL!"