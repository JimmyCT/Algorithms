/*
 * Singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */


/*
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */


 function removeNthFromEnd(head, n) {
  const nodesList = [];
  let currNode = head
  while(currNode !== null) {
    nodesList.push(currNode);
    currNode = currNode.next;
  }
  
  if (nodesList.length < n) {
    return `${n} is greater than the length of the list`;
  }
  
  if (nodesList.length === n) {
    head = n === 1 ? null : nodesList[1];
  } else {
    nodesList[nodesList.length - n - 1].next = nodesList[nodesList.length - n + 1];
  }
  return head
};