// Given an array of strings, return another array containing all of its longest strings.

// Example

// For inputArray = ["aba", "aa", "ad", "vcd", "aba"], the output should be
// allLongestStrings(inputArray) = ["aba", "vcd", "aba"].

// Input/Output

// [execution time limit] 4 seconds (js)

// [input] array.string inputArray

// A non-empty array.

// Guaranteed constraints:
// 1 ≤ inputArray.length ≤ 10,
// 1 ≤ inputArray[i].length ≤ 10.

// [output] array.string

// Array of the longest strings, stored in the same order as in the inputArray.
const test = require('../test.js');

function allLongestStrings(inputArray) {
  const longest = Math.max(...(inputArray.map(el => el.length)));
  return inputArray.filter(element => element.length === longest);
 
}

const tests = [
  [['aba', 'aa', 'ad', 'vcd', 'aba'], ['aba', 'vcd', 'aba']],
  [['aa'], ['aa']],
  [['abc', 'eeee', 'abcd', 'dcd'], ['eeee', 'abcd']],
  [['a', 'abc', 'cbd', 'zzzzzz', 'a', 'abcdef', 'asasa', 'aaaaaa'], ['zzzzzz', 'abcdef', 'aaaaaa']]
];

test('allLongestStrings', allLongestStrings, tests);
