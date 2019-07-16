const isTriangle = (a,b,c) => a + b > c && a + c > b && b + c > a;

console.log(isTriangle(1,2,2));  //, true);
console.log(isTriangle(7,2,2));  //, false);