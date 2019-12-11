

//longestArithSeqLength takes in an array of numbers and returns the longest arithmetic subsequence 
//Lets assume an array A, consists of values a_i1, a_i2, a_i3... a_ik
//a subsequence of array A is a list of values such that the index values are i1 < i2 < ... <ik
//an a subsequence, lets call B, is arithmetic if B[i + 1] - B[i] are all the same value

function longestArithSeqLength(A) {
  let longestSeqLength = 1;
  
  for (let i = 0 ; i < A.length - 1; i++) {
    
    for (let j = i + 1; j < A.length; j++) {
      let gap = A[j] - A[i];
      const subsequence = [A[i]];
      
      let k = j;
      while (k < A.length) {
        if (gap === A[k] - subsequence[subsequence.length - 1]) {
          subsequence.push(A[k]);
        }
        k++
      }
      
      longestSeqLength = longestSeqLength >= subsequence.length ? longestSeqLength : subsequence.length
    }
  }
  
  return longestSeqLength;
};
