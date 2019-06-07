var shell               = require('./shell');
var quicksort           = require('./quicksort');
var selectionSort       = require('./selectionSort');
var insertionSort      = require('./insertionSort');

function sorter(type, items) {
  var start = new Date().getTime();
  var r = null;

  switch (type) {
    case 'shell':
      r = shell(items);
      break;
    case 'quicksort':
      r = quicksort(items, 0, items.length - 1);
      break;
    case 'selection':
      r = selectionSort(items);
      break;
    case 'insertion':
      r = insertionSort(items);
      break;
  }

  var end = new Date().getTime();

  r.time = end - start;

  return r;
}

module.exports = sorter;
