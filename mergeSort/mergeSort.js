// Implement the missing code, denoted by ellipses. You may not modify the pre-existing code.
// Sort an array of integers.

// Example

// For sequence = [3, 6, 1, 5, 3, 6], the output should be
// mergeSort(sequence) = [1, 3, 3, 5, 6, 6].

// Input/Output

// [execution time limit] 4 seconds (js)

// [input] array.integer sequence

// Guaranteed constraints:
// 1 ≤ sequence.length ≤ 100,
// -100 ≤ sequence[i] ≤ 100.

// [output] array.integer

// sequence sorted in non-decreasing order.


const test = require('../test.js');

function mergeSort(sequence) {
  var merge = function(sequence, left, middle, right) {

    var result = [];
    var i;
    var j;

    for (i = left, j = middle; i < middle && j < right; ) {
      if (sequence[i] < sequence[j]) {
        result.push(sequence[i]);
        i++;
      }
      else {
        result.push(sequence[j]);
        j++;
      }
    }

    while (i < middle) {
      result.push(sequence[i]);
      i++;
    }

    while (j < right) {
      result.push(sequence[j]);
      j++;
    }

    for (i = left; i < right; i++) {
      sequence[i] = result[i - left];
    }
  }

  var split = function(sequence, left, right) {
    if (right - left > 1) {
      var middle = Math.floor((left + right) / 2);
      split(sequence, left, middle);
      split(sequence, middle, right);
      merge(sequence, left, middle, right);
    }
  }

  split(sequence, 0, sequence.length);

  return sequence;
}

var tests = [
  [[3, 6, 1, 5, 3, 6], [1, 3, 3, 5, 6, 6]],
  [[-10, -20, 0], [-20, -10, 0]],
  [[1, 2], [1, 2]],
  [[100, 99], [99, 100]],
  [[100, 100, 100], [100, 100, 100]],
  [[100, 64, 99], [64, 99, 100]],
  [[1], [1]],
  [[3, 5, 2, 4, 3, 7], [2, 3, 3, 4, 5, 7]]
];

test('Merge Sort', mergeSort, tests);