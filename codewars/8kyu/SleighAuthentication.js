function Sleigh() {}

Sleigh.prototype.authenticate = function(name, password) {
  return name === "Santa Claus" && password === "Ho Ho Ho!";
};

var sleigh = new Sleigh();

console.log(sleigh.authenticate("Santa Claus", "Ho Ho Ho!")); // must return TRUE

console.log(sleigh.authenticate("Santa", "Ho Ho Ho!")); // must return FALSE
console.log(sleigh.authenticate("Santa Claus", "Ho Ho!")); // must return FALSE
console.log(sleigh.authenticate("jhoffner", "CodeWars")); // Nope, even Jake is not allowed to use the sleigh ;)
