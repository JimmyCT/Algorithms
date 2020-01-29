//takes in two strings s1 and s2 and sees if there is a substring of s2 that is a permuation of s1
//this algorithim uses O(n) space where n is the length of s1
//since s2 is the longer string, we expect a worse case time complexity of O(n^2) where n is th length of s2  
function checkInclusion(s1, s2) {
  let charToCharCount = {};
  let missingUniqueCharsCounter = 0;
  
  for (let i = 0; i < s1.length; i++) {
    const char = s1[i];
    if (charToCharCount[char] === undefined) { 
      charToCharCount[char] = 1
      missingUniqueCharsCounter++
    } else {
      charToCharCount[char]++;
    }
  }
  
  let start = 0;
  let end = 0;
  
  for (let i = 0; i < s2.length; i++) {
    const endChar = s2[end];
    
    if(charToCharCount[endChar] !== undefined) {
      charToCharCount[endChar]--
      
      if (charToCharCount[endChar] === 0) {
        missingUniqueCharsCounter--
      }
    }
    
    end++
    while (missingUniqueCharsCounter === 0) {
      if ((end - start) === s1.length) {
        return true;
      }
      
      const startChar = s2[start];
      
      if (charToCharCount[startChar] !== undefined) {
        charToCharCount[startChar]++
        
        if (charToCharCount[startChar] > 0) {
          missingUniqueCharsCounter++
        }
      }
      start++
    }
  }
  
  return false;
};