function cakes(recipe, available) {
  let ans = 0;
  let flag = true;
  while (flag) {
    for (let key of Object.keys(recipe)) {
      if (available.hasOwnProperty(key) && available[key] >= recipe[key]) {
        available[key] -= recipe[key];
      } else {
        flag = false;
        break;
      }
    }
    if (flag) ans += 1;
  }
  return ans;
}

recipe = { flour: 500, sugar: 200, eggs: 1 };
available = { flour: 1200, sugar: 1200, eggs: 5, milk: 200 };
console.log(cakes(recipe, available)); // 2, "Wrong result for example #1");

recipe = { apples: 3, flour: 300, sugar: 150, milk: 100, oil: 100 };
available = { sugar: 500, flour: 2000, milk: 2000 };
console.log(cakes(recipe, available)); // 0, "Wrong result for example #2");
