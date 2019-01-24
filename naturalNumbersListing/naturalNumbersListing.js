// A pairing function can be used to describe a relation between the natural numbers and the set of pairs of natural numbers (often used to prove that the set of pairs is countably infinite).

// One example is to list the natural numbers in the following way:

// Start with 1.
// Add on the right a diagonal of length two numbered from bottom to top.
// Add on the right a diagonal of length three numbered from top to bottom.
// Continue with step 2 with diagonal length increased by two.
// We'll continue this process until we reach the given number n (a positive integer). So for example, if n = 13, the figure would look like this:

// 11
// 10  12
//  4   9  13
//  3   5   8
//  1   2   6   7
// For the given n, your task is to return the sum of the numbers in the bottom row.

// Example

// For n = 3 the output should be naturalNumbersListing(n) = 6.

// When we stop the listing at n = 3, in the bottom row we'll have 1 + 2 = 3.

// For n = 6 the result is naturalNumbersListing(n) = 9.

// When we stop the listing at n = 6, we have written 1 + 2 + 6 = 9 in the bottom row.

// Input / Output

// [execution time limit] 4 seconds (js)

// [input] integer n

// An integer representing the number where the listing described above is stopped.

// Guaranteed Constraints:
// 1 ≤ n ≤ 2 · 106

// [output] integer

// The sum of the numbers in the bottom line of the triangle constructed above.

function naturalNumbersListing(n) {

}

// Input:
// n: 1
// Expected Output:
// 1


// Input:
// n: 2
// Expected Output:
// 3


// Input:
// n: 3
// Expected Output:
// 3


// Input:
// n: 6
// Expected Output:
// 9

// Input:
// n: 7
// Expected Output:
// 16

// Input:
// n: 57
// Expected Output:
// 195


// Input:
// n: 476
// Expected Output:
// 4735

// Input:
// n: 46
// Expected Output:
// 195

// Input:
// n: 997
// Expected Output:
// 14696


// Input:
// n: 4950
// Expected Output:
// 164249