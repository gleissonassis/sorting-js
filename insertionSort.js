function insertionSort (items) {
  var comparisons = 0;
  var moves = 0;

  for (var i = 0; i < items.length; i++) {
    var value = items[i];
    var j = i - 1;

    for (;j > -1 && items[j] > value; j--) {
      comparisons++;
      items[j + 1] = items[j];
      moves++;
    }

    comparisons++;

    items[j + 1] = value;
    moves++;
  }

  return {
    items: items,
    comparisons: comparisons,
    moves: moves
  };
}

module.exports = insertionSort;
