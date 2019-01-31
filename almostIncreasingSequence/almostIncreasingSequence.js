// Given a sequence of integers as an array, determine whether it is possible to obtain 
// a strictly increasing sequence by removing no more than one element from the array.

// Note: sequence a0, a1, ..., an is considered to be a strictly increasing if a0 < a1 < ... < an. 
//Sequence containing only one element is also considered to be strictly increasing.

// Example

// For sequence = [1, 3, 2, 1], the output should be
// almostIncreasingSequence(sequence) = false.

// There is no one element in this array that can be removed in order to get a strictly increasing 
// sequence.

// For sequence = [1, 3, 2], the output should be
// almostIncreasingSequence(sequence) = true.

// You can remove 3 from the array to get the strictly increasing sequence [1, 2]. 
//Alternately, you can remove 2 to get the strictly increasing sequence [1, 3].

// Input/Output

// [execution time limit] 4 seconds (js)

// [input] array.integer sequence

// Guaranteed constraints:
// 2 ≤ sequence.length ≤ 105,
// -105 ≤ sequence[i] ≤ 105.

// [output] boolean

// Return true if it is possible to remove one element from the array in order to get a strictly increasing sequence, otherwise return false.
const test = require('../test.js');

function isIncreasingSequence(sequence) {
  for (let j = 0; j < sequence.length - 1; j++) {
    if (sequence[j] >= sequence[j + 1]) return false;
  }
  return true;
}


function almostIncreasingSequence(sequence) {
  if(isIncreasingSequence(sequence)) return true;

  for (let i = 0; i < sequence.length; i++){
    if (sequence[i] >= sequence [i + 1] || sequence[i] <= sequence[i-1]) {
      var newSequence = sequence.slice(0);
      newSequence.splice(i, 1);
      if (isIncreasingSequence(newSequence)) return true;
    }
  }

  return false;
}


var tests = [
  [[1, 3, 2, 1], false], 
  [[1, 3, 2], true], 
  [[1, 2, 1, 2], false], 
  [[3, 6, 5, 8, 10, 20, 15], false],
  [[1, 1, 2, 3, 4, 4], false],
  [[1, 4, 10, 4, 2], false],
  [[10, 1, 2, 3, 4, 5], true],
  [[1, 1, 1, 2, 3], false],
  [[0, -2, 5, 6], true],
  [[1, 2, 3, 4, 5, 3, 5, 6], false],
  [[40, 50, 60, 10, 20, 30], false],
  [[1, 1], true],
  [[1, 2, 5, 3, 5], true],
  [[1, 2, 5, 5, 5], false],
  [[10, 1, 2, 3, 4, 5, 6, 1], false],
  [[1, 2, 3, 4, 3, 6], true],
  [[1, 2, 3, 4, 99, 5, 6], true],
  [[123, -17, -5, 1, 2, 3, 12, 43, 45], true],
  [[3, 5, 67, 98, 3], true]
];

test('almostIncreasingSequence', almostIncreasingSequence, tests);
