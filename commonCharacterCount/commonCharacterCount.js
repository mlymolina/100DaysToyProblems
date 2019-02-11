// Given two strings, find the number of common characters between them.

// Example

// For s1 = "aabcc" and s2 = "adcaa", the output should be
// commonCharacterCount(s1, s2) = 3.

// Strings have 3 common characters - 2 "a"s and 1 "c".

// Input/Output

// [execution time limit] 4 seconds (js)

// [input] string s1

// A string consisting of lowercase English letters.

// Guaranteed constraints:
// 1 ≤ s1.length ≤ 15.

// [input] string s2

// A string consisting of lowercase English letters.

// Guaranteed constraints:
// 1 ≤ s2.length ≤ 15.

// Reference: https://app.codesignal.com/arcade/intro/level-3/JKKuHJknZNj4YGL32

function commonCharacterCount(s1, s2) {
  let counter = 0;
  const positions = [];
// Pending refactoring to improve time complexityå
  for(let i = 0; i < s1.length; i++) {
    for(let j = 0; j < s2.length; j++) {
      if ((s1[i] == s2[j]) && !(positions.includes(j))) {
        counter++;
        positions.push(j);
        break;
      }
    }
  }

  return counter;
}

