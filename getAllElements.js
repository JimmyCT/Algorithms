function fetchVals(root) {
  const output = [];
  const stack = [];
  let pointer = root;

  while (pointer || stack.length) {
    if (pointer !== null) {
      stack.push(pointer)
      pointer = pointer.left
    } else {
      const tmp = stack.pop();
      output.push(tmp.val)
      pointer = tmp.right
    }
  }
  
  return output;
}

var getAllElements = function(root1, root2) {
  const root1Vals = fetchVals(root1);
  const root2Vals = fetchVals(root2);

  
  return output
};