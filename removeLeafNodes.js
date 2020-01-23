function removeLeafHelper(currNode, target) {
  if (currNode.val === target && currNode.left === null && currNode.right === null) {
    currNode.val = null
  } else {
    if (currNode.left !== null) {
      removeLeafHelper(currNode.left, target, currNode);
      currNode.left = currNode.left.val === null ? null : currNode.left;
    }
    
    if (currNode.right !== null) {
      removeLeafHelper(currNode.right, target, currNode);
      currNode.right = currNode.right.val === null ? null : currNode.right
    }
    
    if (currNode.left === null && currNode.right === null && currNode.val === target) {
      // removeLeafHelper(currNode, target);
      currNode.val = null
    }
  }
}

function removeLeafNodes(root, target) {
  
  removeLeafHelper(root, target);
  root = root.val === null ? null : root;
  return root
};