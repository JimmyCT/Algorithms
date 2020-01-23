function removeLeafNodes(root, target) {
  
  removeLeafHelper(root, target);
  root = root.val === null ? null : root;
  return root
};