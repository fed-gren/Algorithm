const { pow } = Math;

const arrayMadness = (a, b) => a.reduce((acc, val) => acc + pow(val, 2), 0) > b.reduce((acc, val) => acc + pow(val, 3), 0);
