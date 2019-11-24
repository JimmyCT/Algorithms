// Suppose an array sorted in ascending order is rotated at some pivot unknown to you beforehand.
// For example, [0,1,2,4,5,6,7] might become  [4,5,6,7,0,1,2].


function findMin(nums, lowerBound = 0, upperBound = nums.length - 1) {
  if (nums.length === 0) {
    return;
  }
  //check if there is a rotation, if none then array is sorted
  if (nums[0] < nums[nums.length - 1] || nums.length === 1) {
    return nums[0]
  } 
  
  let mid = Math.ceil((lowerBound + upperBound) / 2);
  
  if (mid - lowerBound < 2 && nums[lowerBound] > nums[mid]) {
    return nums[mid];
  }
  
  if (nums[lowerBound] > nums[mid]) {
    return findMin(nums, lowerBound, mid);
  } else {
    return findMin(nums, mid, upperBound);
  }
};