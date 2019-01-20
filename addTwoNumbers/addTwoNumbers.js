// You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order and each of their nodes contain a single digit. Add the two numbers and return it as a linked list.

// You may assume the two numbers do not contain any leading zero, except the number 0 itself.

// Example:

// Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
// Output: 7 -> 0 -> 8
// Explanation: 342 + 465 = 807.

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */



var addTwoNumbers = function(l1, l2) {
  var remaining = 0; //carry
  var output;
  var currentOutput;
  var currentl1 = l1;
  var currentl2 = l2;

  while (currentl1 != null || currentl2 != null) {
    // update to check val || 0
    var sum = ((currentl1 || {}).val || 0) + 
              ((currentl2 || {}).val || 0) + 
              remaining;
    if (sum >= 10) {
      const sumDigits = sum.toString().split('');
      remaining = Number(sumDigits[0]);
      sum = Number(sumDigits[1]);
    } else {
      remaining = 0;
    }

    const newNode = new ListNode(sum);      
    if (output == null) { 
        // store output head
        output = newNode;
        currentOutput = output;
    } else {
        // keep appending to the list
        currentOutput.next = newNode;
        currentOutput = currentOutput.next;
    }

    currentl1 = currentl1 ? currentl1.next : null;
    currentl2 = currentl2 ? currentl2.next : null;
  }
    
  if (remaining != 0) {
    currentOutput.next = new ListNode(remaining);  
    }

  return output;
};




