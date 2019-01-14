// Digit root of some positive integer is defined as the sum of all of its digits.

// You are given an array of integers. Sort it in such a way that if a comes before b then the digit root of a is less than or equal to the digit root of b. If two numbers have the same digit root, the smaller one (in the regular sense) should come first. For example 4 and 13 have the same digit root, however 4 < 13 thus 4 comes before 13 in any digitRoot sorting where both are present.

// Example

// For a = [13, 20, 7, 4], the output should be [20, 4, 13, 7].

// [execution time limit] 4 seconds (js)

// [input] array.integer a

// Array of positive integers.

// [output] array.integer

// [JavaScript (ES6)] Syntax Tips

function digitRootSort(a) {
  let roots = [];
  if (a === null) return 0;
  
  roots = a.map(d => [d, d.toString().split('').map(Number).reduce((acc, val) => acc + val, 0)]);
  roots.sort((a, b) => 
          a[1] == b[1]
            ? a[0] - b[1]
            : a[1] - b[1]);
  
  return roots.map(function(root) {
    return root[0];
  });
}

function rootSortTests () {
  let totalPassed = 0;
  let tests = [
    [[13, 20, 7, 4], [20, 4, 13, 7]]
  ];

  for (let test of tests) {
    const result = digitRootSort(test[0]);
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

rootSortTests();