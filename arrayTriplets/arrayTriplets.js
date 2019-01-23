// Given an array of integers arr, your task is to find the number of array triplets a, b, c ∈ arr that satisfy all of the following conditions:

// a + b > c
// a + c > b
// b + c > a
// Example

// For arr = [1, 2, 10, 5, 12, 8, 2], the output should be arrayTriplets(arr) = 5.

// There are 5 triplets that satisfy the condition:

// 1, 2, 2
// 10, 5, 8
// 5, 12, 8
// 10, 5, 12
// 10, 12, 8
// so the answer is 5.

// Input / Output

// [execution time limit] 4 seconds (js)

// [input] array.integer arr

// An array of integers.

// Guaranteed constraints:
// 0 ≤ arr.length ≤ 104
// 0 ≤ arr[i] ≤ 109

// [output] integer

// An integer representing the number of triplets in the array that match the above conditions.
const test = require('../test.js');

// function combineTriples(num, arr) {

// }

function arrayTriplets(arr) {
  let tripletsCount = 0;

  // Todo: Implement with recursion
  for(let i = 0; i < arr.length; i++) { 
    for (let j = i + 1; j < arr.length; j++) {    
     for (let k = j + 1; k < arr.length; k++) {
       if((arr[i] + arr[j] > arr[k]) && 
       (arr[j] + arr[k] > arr[i]) && 
       (arr[i] + arr[k] > arr[j])) {
         tripletsCount++;
       }
      }           
    }
  }
  return tripletsCount;
}

var tests = [
  [[1, 2, 10, 5, 12, 8, 2], 5],
  [[1, 19, 6, 2, 4, 7, 2, 6], 12],
  [[8, 4, 10, 9], 4],
  [[5, 8, 2, 1, 8, 6, 2, 4, 3, 9], 42],
  [[35, 37, 61, 100, 72, 58, 80, 69, 88, 81, 47, 75, 44, 93, 51, 49, 50, 70, 77, 28, 60, 43], 1391],
  [[88, 13, 9, 6, 88, 27, 21, 25, 75, 43, 65, 94, 27, 99, 63, 100, 73, 8], 306],
  [[], 0],
  [[6797239, 23107, 181408949, 1, 6508, 704186, 801896, 4794414, 20562767, 0], 0]
];

// r = 0
// arrayTriplets = a =>
//     a.sort((a, b) => a-b).map((x, i) => {
//         for (j = i; y = a[++i]; r += j > i && j + ~i)
//             while (x+y > a[j])
//                 j++
//     }) | r

test('Array Triplets', arrayTriplets, tests);