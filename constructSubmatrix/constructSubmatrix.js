// Given a matrix (i.e. an array of arrays), find its submatrix obtained by deleting the specified rows and columns.

// Example

// For

// matrix = [[1, 0, 0, 2], 
//           [0, 5, 0, 1], 
//           [0, 0, 3, 5]]
// rowsToDelete = [1], and columnsToDelete = [0, 2], the output should be

// constructSubmatrix(matrix, rowsToDelete, columnsToDelete) = [[0, 2],
//                                                              [0, 5]]
// Input/Output

// [execution time limit] 4 seconds (js)

// [input] array.array.integer matrix

// 2-dimensional array of integers.

// Guaranteed constraints:
// 1 ≤ matrix.length ≤ 5,
// 1 ≤ matrix[0].length ≤ 5,
// 0 ≤ matrix[i][j] ≤ 15.

// [input] array.integer rowsToDelete

// Array of indices (0-based) of rows to be deleted.

// Guaranteed constraints:
// 0 ≤ rowsToDelete.length ≤ 2,
// 0 ≤ rowsToDelete[i] < matrix.length.

// [input] array.integer columnsToDelete

// Array of indices (0-based) of columns to be deleted.

// Guaranteed constraints:
// 0 ≤ columnsToDelete.length ≤ 2,
// 0 ≤ columnsToDelete[i] < matrix[0].length.

// [output] array.array.integer

// nput:
// matrix: [[1,0,0,2], 
//  [0,5,0,1], 
//  [0,0,3,5]]
// rowsToDelete: [1]
// columnsToDelete: [0, 2]
// Expected Output:
// [[0,2], 
//  [0,5]]


// Input:
// matrix: [[1,0,0,2], 
//  [0,5,0,1], 
//  [0,0,3,5]]
// rowsToDelete: []
// columnsToDelete: [0]
// Expected Output:
// [[0,0,2], 
//  [5,0,1], 
//  [0,3,5]]

// Input:
// matrix: [[1]]
// rowsToDelete: []
// columnsToDelete: []
// Expected Output:
// [[1]]



function constructSubmatrix(matrix, rowsToDelete, columnsToDelete) {
  let newMatrix = matrix;
  for (let row of rowsToDelete){
      newMatrix.splice(row, 1);
  }
  
  for (let j = columnsToDelete.length - 1; j >= 0; j -= 1 ) {
      column = columnsToDelete[j];
      for (let i = newMatrix.length - 1; i >=0 ; i -= 1) {
          newMatrix[i].splice(column, 1)
      }
  }
  
  return newMatrix;
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