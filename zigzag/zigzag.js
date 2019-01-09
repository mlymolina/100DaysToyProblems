// A sequence of integers is called a zigzag sequence if each of its elements is either strictly less than all its neighbors or strictly greater than all its neighbors. For example, the sequence 4 2 3 1 5 3 is a zigzag, but 7 3 5 5 2 and 3 8 6 4 5 aren't. Sequence of length 1 is also a zigzag.

// For a given array of integers return the length of its longest contiguous sub-array that is a zigzag sequence.

// Example

// For a = [9, 8, 8, 5, 3, 5, 3, 2, 8, 6], the output should be
// zigzag(a) = 4.

// The longest zigzag sub-arrays are [5, 3, 5, 3] and [3, 2, 8, 6] and they both have length 4.

// For a = [4, 4], the output should be
// zigzag(a) = 1.

// The longest zigzag sub-array is [4] - it has only one element, which is strictly greater than all its neighbors (there are none of them).

// Input/Output

// [execution time limit] 4 seconds (js)

// [input] array.integer a

// Guaranteed constraints:
// 2 ≤ a.length ≤ 25,
// 0 ≤ a[i] ≤ 100.

// [output] integer

// Input:
// a: [9, 8, 8, 5, 3, 5, 3, 2, 8, 6]
// Expected Output:
// 4

// Input:
// a: [4, 4]
// Expected Output:
// 1

// Input:
// a: [2, 1, 4, 4, 1, 4, 4, 1, 2, 0, 1, 0, 0, 3, 1, 3, 4, 1, 3, 4]
// Expected Output:
// 6


  function zigzag(a) {
    if (a == null) return 0;

    let currentCount = 0;
    let longest = 0;
 
    for (let i = 0; i < a.length; i += 1) {
      const current = a[i];
      const prev = a[i - 1];
      const next = a[i + 1];
    
      if (currentCount === 0) {
        currentCount += 1;
        if (next != null && next != current) {
          currentCount += 1;
        }
      } else if (
        (current > next && current > prev) ||
        (current < next && current < prev)
      ) {
        currentCount += 1; 
      } else {
        i -= 1;
        longest = Math.max(currentCount, longest);
        currentCount = 0;
      }
    }
    return longest;
  }
