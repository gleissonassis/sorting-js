function swap(items, leftIndex, rightIndex){
    var temp = items[leftIndex];
    items[leftIndex] = items[rightIndex];
    items[rightIndex] = temp;
}

function partition(items, left, right, comparisons, moves) {
    var pivot = items[Math.floor((right + left) / 2)];
    var i = left;
    var j = right;

    while (i <= j) {
      while (items[i] < pivot) {
        comparisons++;
        i++;
      }

      while (items[j] > pivot) {
        comparisons++;
        j--;
      }

      if (i <= j) {
        swap(items, i, j);
        moves += 2;
        i++;
        j--;
      }
    }

    return {
      i: i,
      comparisons: comparisons,
      moves: moves
    };
}

function quickSort(items, left, right) {
  var comparisons = 0;
  var moves = 0;

  var index;
  if (items.length > 1) {
      r = partition(items, left, right, comparisons, moves);
      comparisons += r.comparisons;
      moves += r.moves;

      index = r.i;
      if (left < index - 1) {
        comparisons++;
        quickSort(items, left, index - 1, comparisons, moves);
      }

      if (index < right) {
        comparisons++;
        quickSort(items, index, right, comparisons, moves);
      }
  }
  return {
    items: items,
    comparisons: comparisons,
    moves: moves
  };
}

 module.exports = quickSort;
