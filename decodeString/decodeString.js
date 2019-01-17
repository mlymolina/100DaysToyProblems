// Given an encoded string, return its corresponding decoded string.

// The encoding rule is: k[encoded_string], where the encoded_string inside the square brackets is repeated exactly k times. Note: k is guaranteed to be a positive integer.

// Note that your solution should have linear complexity because this is what you will be asked during an interview.

// Example

// For s = "4[ab]", the output should be
// decodeString(s) = "abababab";

// For s = "2[b3[a]]", the output should be
// decodeString(s) = "baaabaaa";

// For s = "z1[y]zzz2[abc]", the output should be
// decodeString(s) = "zyzzzabcabc".

// Input/Output

// [execution time limit] 4 seconds (js)

// [input] string s

// A string encoded as described above. It is guaranteed that:

// the string consists only of digits, square brackets and lowercase English letters;
// the square brackets form a regular bracket sequence;
// all digits that appear in the string represent the number of times the content in the brackets that follow them repeats, i.e. k in the description above;
// there are at most 20 pairs of square brackets in the given string.
// Guaranteed constraints:
// 0 ≤ s.length ≤ 80.

// [output] string

function decodeString(s) {

}

// Input:
// s: "4[ab]"
// Expected Output:
// "abababab"


// Input:
// s: "2[b3[a]]"
// Expected Output:
// "baaabaaa"

// Input:
// s: "z1[y]zzz2[abc]"
// Expected Output:
// "zyzzzabcabc"

// Input:
// s: "3[a]2[bc]"
// Expected Output:
// "aaabcbc"

// Input:
// s: "3[a2[c]]"
// Expected Output:
// "accaccacc"

// Input:
// s: "2[abc]3[cd]ef"
// Expected Output:
// "abcabccdcdcdef"

// Input:
// s: ""
// Expected Output:
// Empty

// Input:
// s: "codesignal"
// Expected Output:
// "codesignal"

// Input:
// s: "2[codesignal]"
// Expected Output:
// "codesignalcodesignal"

// Input:
// s: "100[codesignal]"
// Expected Output:
// "codesignalcodesignalcodesignalcodesignalcodesignalcodesignalcodesignalcodesignalcodesignalcodesignalcodesignalcodesignalcodesignalcodesignalcodesignalcodesignalcodesignalcodesignalcodesignalcodesignalcodesignalcodesignalcodesignalcodesignalcodesignalcodesignalcodesignalcodesignalcodesignalcodesignalcodesignalcodesignalcodesignalcodesignalcodesignalcodesignalcodesignalcodesignalcodesignalcodesignalcodesignalcodesignalcodesignalcodesignalcodesignalcodesignalcodesignalcodesignalcodesignalcodesignalcodesignalcodesignalcodesignalcodesignalcodesignalcodesignalcodesignalcodesignalcodesignalcodesignalcodesignalcodesignalcodesignalcodesignalcodesignalcodesignalcodesignalcodesignalcodesignalcodesignalcodesignalcodesignalcodesignalcodesignalcodesignalcodesignalcodesignalcodesignalcodesignalcodesignalcodesignalcodesignalcodesignalcodesignalcodesignalcodesignalcodesignalcodesignalcodesignalcodesignalcodesignalcodesignalcodesignalcodesignalcodesignalcodesignalcodesignalcodesignalcodesignalcodesignal"

// Input:
// s: "sd2[f2[e]g]i"
// Expected Output:
// "sdfeegfeegi"

// Input:
// s: "2[a]"
// Expected Output:
// "aa"

// Input:
// s: "2[a]3[b]4[c]5[d]"
// Expected Output:
// "aabbbccccddddd"


// Input:
// s: "2[2[b]]"
// Expected Output:
// "bbbb"

// Input:
// s: "2[2[2[b]]]"
// Expected Output:
// "bbbbbbbb"


// Input:
// s: "2[2[2[2[b]]]]"
// Expected Output:
// "bbbbbbbbbbbbbbbb"