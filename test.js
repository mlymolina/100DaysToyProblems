function testFunction (functName, funct,inputOutput) {
  let totalPassed = 0;
  const tests = inputOutput;

  console.log(`Test for ${functName}`);

  for (let test of tests) {
    const result = funct(test[0]);
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

module.exports = testFunction;