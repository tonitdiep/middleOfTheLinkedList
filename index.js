Leetcode 876. Middle of the Linked List
Given the head of a singly linked list, return the middle node of the linked list.

If there are two middle nodes, return the second middle node.

 

Example 1:
Input: head = [1,2,3,4,5]
Output: [3,4,5]
Explanation: The middle node of the list is node 3.

Constraints:
The number of nodes in the list is in the range [1, 100].
1 <= Node.val <= 100

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var middleNode = function(head) {
  //peer programmed to see the linked-lists
    // console.log('start', head)
    // console.log('first time slow', head.next)
    // console.log('first time fast', head.next.next)
    // console.log('first time fast', head.next.next)
    //  console.log('?? time fast', head.next.next.next)
    //  console.log('?? time ??', head.next.next.next.next)
    
     //76 ms runtime from Leetcode soln
    let =   slow = fast = head;
      
    while (fast && fast.next) {
 
        slow = slow.next;

        fast = fast.next.next;
    }
 
    return slow;

}