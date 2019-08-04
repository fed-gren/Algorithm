function humanReadable(seconds) {
  const time = {
    h: 0,
    m: 0,
    s: 0
  };

  time.s = seconds;
  time.m = parseInt(time.s / 60);
  time.s = time.s % 60;

  time.h = parseInt(time.m / 60);
  time.m = time.m % 60;

  for (let prop in time) {
    time[prop] = time[prop].toString();
    if (time[prop].length === 1) time[prop] = "0" + time[prop];
  }

  return `${time.h}:${time.m}:${time.s}`;
}

console.log(humanReadable(0)); // '00:00:00', 'humanReadable(0)');
console.log(humanReadable(5)); // '00:00:05', 'humanReadable(5)');
console.log(humanReadable(60)); // '00:01:00', 'humanReadable(60)');
console.log(humanReadable(86399)); // '23:59:59', 'humanReadable(86399)');
console.log(humanReadable(359999)); // '99:59:59', 'humanReadable(359999)');
