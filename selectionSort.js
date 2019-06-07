function selectionSort(items) {
    var comparisons = 0;
    var moves = 0;

    var temp = 0;

    for (var i = 0; i < items.length; ++i) {
        for (var j = i + 1; j < items.length; ++j) {
          comparisons++;
            if (items[i] > items[j]) {
                temp = items[i];
                items[i] = items[j];
                moves++;
                items[j] = temp;
                moves++;
            }
        }
    }

    return {
      items: items,
      comparisons: comparisons,
      moves: moves
    };
}

module.exports = selectionSort;
