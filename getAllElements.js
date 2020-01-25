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

function getAllElements(root1, root2) {
  const root1Vals = fetchVals(root1);
  const root2Vals = fetchVals(root2);
  
  let pointer;
  let root1Index = 0;
  let root2Index = 0;
  const output = [];
  while (pointer !== null) {
    if (root1Index === root1Vals.length && root2Index === root2Vals.length) {
      pointer = null
    } else if (root2Index === root2Vals.length || (root2Index !== root2Vals.length && root1Vals[root1Index] <= root2Vals[root2Index])) {
      output.push(root1Vals[root1Index]);
      root1Index++
    } else {
      output.push(root2Vals[root2Index])
      root2Index++
    }
  }
  
  return output
};