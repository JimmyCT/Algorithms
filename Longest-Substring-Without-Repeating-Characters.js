/*
 * @param {string} s
 * @return {number}
 */
 function lengthOfLongestSubstring(s) {
  let uniqueChars = {};
  let longestSubStringCount = 0;   
  let start = 0;
  let end = 0;
  
  if (s.length === 1) {
    return 1;
  }
  
  while (end < s.length) {
    const endChar = s[end];
    if (uniqueChars[endChar] === undefined) {
      uniqueChars[endChar] = 1;
    } else {
      uniqueChars[endChar]++
    }
    
    while(uniqueChars[endChar] > 1) {
      const startChar = s[start];
      if ((end - start) > longestSubStringCount) {
        longestSubStringCount = end - start;
      }

      uniqueChars[startChar]--
      start++
    }
    
    end++
  }
  
  //check to see if the whole string is composed of unique characters
  if (end - start > longestSubStringCount) {
    longestSubStringCount = end - start;
  }
  return longestSubStringCount;
};