//Assume we have a list of numbers such that A = [a_0, a_1, ... , a_n]; 
//As we move left to right add the a_i value to our sum and take the mod K to find the remainder
//the number of times the remainder is evaluated up to each index , i, of A minus one is the number of subarrays up 
//until that iTh value that contains a sum divisble by K
function subarraysDivByK(A, K) {
  let sum = 0;
  let output = 0;
  const freq = new Array(K).fill(0);
  //we start with a frequency of 1 for remainder 0 because the sum of the Array before any number added is 0
  //so seeing another subarray sum that has a reaminder of 0 at index i means every number from index 0 to i has a sum divisble 
  //by K
  freq[0]++
  
  for (let i = 0; i < A.length; i++) {
    sum += A[i];
    let remainder = sum % K;
    
    //assuming the sum could be negative due to negative numbers being a possibility
    if (remainder < 0) {
      remainder += K
    }
    
    output += freq[remainder];
    freq[remainder]++
  }
  
  return output;
};
