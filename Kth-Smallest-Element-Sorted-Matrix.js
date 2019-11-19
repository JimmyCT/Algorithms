/*Given a n x n matrix where each of the rows and columns are sorted in ascending order,
  find the kth smallest element in the matrix.
*/



class MinHeap {
  constructor() {
    this.storage = [];
  }
  
  insertVal(val) {
    //insert value to end of the list (last leaf in tree)
    this.storage.push(val);
    
    let currIndex = this.storage.length - 1;
    
    //starting at the last leaf, "swim" up the heap with inserted value
    //and place the val where it belongs in the unsorted min heap
    while(currIndex > 0) {
      const parentIndex = Math.floor((currIndex - 1) / 2);
      if (this.storage[currIndex] < this.storage[parentIndex]) {
        const temp = this.storage[currIndex];
        this.storage[currIndex] = this.storage[parentIndex];
        this.storage[parentIndex] = temp;
        currIndex = parentIndex;
      } else {
        break;
      }
    }
  }
    
  removeMin() {
    
    if (this.storage.length === 0) {
      return -1;
    }
    
    //swap the root node with the last leaf node
    let pos = 0;
    let lastIndex = this.storage.length - 1;
    
    let temp = this.storage[pos];
    this.storage[pos] = this.storage[lastIndex];
    this.storage[lastIndex] = temp;
    
    //pop out the previous root node from the last position 
    const minVal = this.storage.pop();
    lastIndex--;
    
    //"sink" the new root that was swapped in, into the correct position
    //within the min heap
    
    while(pos <= Math.floor((lastIndex - 1) / 2) && lastIndex > 0) {
      const leftIndex = pos * 2 + 1
      let compareIndex = leftIndex
      if (leftIndex < lastIndex) {
        const rightIndex = leftIndex + 1;
        
        if(this.storage[rightIndex] < this.storage[leftIndex]) {
          compareIndex = rightIndex
        }
      } 
      
      if (this.storage[compareIndex] < this.storage[pos]) {
        temp = this.storage[compareIndex];
        this.storage[compareIndex] = this.storage[pos];
        this.storage[pos] = temp;
        pos = compareIndex;
      } else {
        break;
      }
    }
    
    return minVal;
  }
}

var kthSmallest = function(matrix, k) {
};