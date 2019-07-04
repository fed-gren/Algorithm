const isEven = n => n % 2 === 0;

function getMiddle(s) {
  const len = s.length;
  if (isEven(len)) {
    return `${s[len / 2 - 1]}${s[len / 2]}`;
  } else if (len === 1) {
    return s;
  } else {
    return `${s[(len - 1) / 2]}`;
  }
}

getMiddle("test"); //,"es"
getMiddle("testing"); //,"t"
getMiddle("middle"); //,"dd"
getMiddle("A"); //,"A"
