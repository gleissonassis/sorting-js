var sorter = require('./sorter.js');

var ns = [1000, 10000, 100000, 500000, 1000000, 3000000, 5000000, 10000000];

for (var i = 0; i < ns.length; i++) {
  var items = [];

  for (var j = 0; j < ns[i]; j++) {
    items.push(parseInt(Math.random() * ns[i]));
  }

  r = sorter('selection', items);

  console.log(`N: ${ns[i]}, Comparisons: ${r.comparisons}, Moves: ${r.moves}, Time (ms): ${r.time}`);
}
