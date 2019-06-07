function shellSort (items) {
  var comparisons = 0;
  var moves = 0;

  for (var h = items.length; h > 0; h = parseInt(h / 2)) {
      for (var i = h; i < items.length; i++) {
          var k = items[i];
          var j = i;

          for (; j >= h && k < items[j - h]; j -= h) {
            comparisons++;
            moves++;
            items[j] = items[j - h];
          }

          comparisons++;

          items[j] = k;
      }
  }

  return {
    items: items,
    moves: moves,
    comparisons: comparisons
  };
}
module.exports = shellSort;
