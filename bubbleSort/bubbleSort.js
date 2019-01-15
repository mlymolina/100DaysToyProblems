// Implement the missing code, denoted by ellipses. You may not modify the pre-existing code.
// Given an array of integers, sort it.

// Example

// For items = [2, 4, 1, 5], the output should be
// bubbleSort(items) = [1, 2, 4, 5].

// Input/Output

// [execution time limit] 4 seconds (js)

// [input] array.integer items

// Guaranteed constraints:
// 1 ≤ items.length ≤ 15,
// -100 ≤ items[i] ≤ 100.

// [output] array.integer

function bubbleSort(items) {

  var swap = function(firstIndex, secondIndex){
    var temp = items[firstIndex];
    items[firstIndex] = items[secondIndex];
    items[secondIndex] = temp;
  }

  var len =  items.length,
      i, j, stop;

  for (i = 0; i < len; i++){
      for (j = 0, stop = len - i; j < stop - 1; j++){
          if (items[j] > items[j + 1]){
              swap(j, j + 1);
          }
      }
  }

  return items;
}

function testFunction () {
  let totalPassed = 0;
  const tests = [
    [[2, 4, 1, 5], [1, 2, 4, 5]],
    [[3, 6, 1, 5, 3, 6], [1, 3, 3, 5, 6, 6]],
    [[2, 8, 2, 9, 3, 2, 10, 7, 3], [2, 2, 2, 3, 3, 7, 8, 9, 10]]
  ];

  for (let test of tests) {
    const result = bubbleSort(test[0]);
    const testPassed = JSON.stringify(result) === JSON.stringify(test[1]);

    if(testPassed) {
      totalPassed += 1;
    }

    console.log(
      'Array: ' + `[${test[0]}]`,
      'Expected: ' +`[${test[1]}]`,
      'Received: ' + `[${result}]`, 
      testPassed ? 'PASS': 'FAIL'
    );
  }
  console.log(`${totalPassed} out of ${tests.length} passed`);
}

testFunction();
