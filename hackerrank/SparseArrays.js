function matchingStrings(strings, queries) {
  const results = [];
  const stringsMap = new Map();
  strings.forEach(text => {
    stringsMap.set(text, stringsMap.has(text) ? stringsMap.get(text) + 1 : 1);
  });

  queries.forEach(query => {
    results.push(stringsMap.has(query) ? stringsMap.get(query) : 0);
  })
  return results;
}

let strings, queries, results;
strings = ['aba', 'baba', 'aba', 'xzxb'];
queries = ['aba', 'xzxb', 'ab'];

results = matchingStrings(strings, queries);
console.log(results); //2 1 0

strings = ['def', 'de', 'fgh'];
queries = ['de', 'lmn', 'fgh'];

results = matchingStrings(strings, queries);
console.log(results); //1 0 1