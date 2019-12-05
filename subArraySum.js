function subarraySum(nums, k) {
  
  let numContinuousSubArrays = 0;
  let sum = 0
  const subArrTotals = {"0":1};
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
    
    if (subArrTotals[sum - k] !== undefined) {
      numContinuousSubArrays += subArrTotals[sum - k];
    }
    if (subArrTotals[sum] === undefined) {
      subArrTotals[sum] = 1
    } else {
      subArrTotals[sum]++
    }
  }
  
  return numContinuousSubArrays;
};