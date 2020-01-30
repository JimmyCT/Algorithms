//merge sort algorithim runs in O(n) space complexity where n is the length of the passed array
//time complexity fo the merge sort algoritim runs in O(nLog(n)) time
function mergeSort(arr) {
  if (arr.length === 1) {
    return arr;
  }
  
  let arr1 = [];
  let arr2 = [];
  
  for (let [index, num] of arr.entries()) {
    const middleIndex = Math.ceil(arr.length / 2);
    index < middleIndex ? arr1.push(num) : arr2.push(num)
  }
  
  let sortedArr1 = mergeSort(arr1);
  let sortedArr2 = mergeSort(arr2);
  
  let i = 0;
  let j = 0;
  
  let output = [];
  while(i < sortedArr1.length || j < sortedArr2.length) {
    if (i >= sortedArr1.length) {
      output.push(sortedArr2[j]);
      j++
    } else if (j >= sortedArr2.length) {
      output.push(sortedArr1[i]);
      i++
    } else if (sortedArr1[i] < sortedArr2[j]) {
        output.push(sortedArr1[i]);
        i++
    } else {
        output.push(sortedArr2[j]);
        j++
    }   
  }
  
  return output;
}

function findKthLargestNum (nums, k) {
  let sortedArr = mergeSort(nums);
  return sortedArr[sortedArr.length - k];
}