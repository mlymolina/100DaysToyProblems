// Given an integer size, return an array containing each integer from 1 to size in the following order:

// 1, size, 2, size - 1, 3, size - 2, 4, ...

// Example

// For size = 7, the output should be
// constructArray(size) = [1, 7, 2, 6, 3, 5, 4].

// Input/Output

// [execution time limit] 4 seconds (js)

// [input] integer size

// A positive integer.

// Guaranteed constraints:
// 1 ≤ size ≤ 15.

// [output] array.integer

// [JavaScript (ES6)] Syntax Tips

function constructArray(size) {
  let currentSize = size;
  let outputArray = [];

  let i = 1;
  while (outputArray.length < size) {
    outputArray.push(i);
    if (size - outputArray.length >= 2) {
      outputArray.push(currentSize);
      currentSize -= 1;
    }

    i += 1;  
  }

  return outputArray;
}

function testConstructArray () {
  let totalPassed = 0;
  const tests = [
    [7, [1, 7, 2, 6, 3, 5, 4]],
    [2, [1, 2]],
    [1, [1]]
  ];

  for (let test of tests) {
    const result = constructArray(test[0]);
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

testConstructArray();