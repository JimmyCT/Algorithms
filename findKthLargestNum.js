function mergeSort(arr) {

}

function findKthLargest (nums, k) {
  let sortedArr = mergeSort(nums);
  return sortedArr[sortedArr.length - k];
}