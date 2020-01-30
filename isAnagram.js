//time complexity of the function runs in O(n) where n is the length of either string s or string t 
//when they are of equal lengths
//space complexity of the function is also in O(n) where n is the length of either string s or string t
 function isAnagram(s, t) {
  if (s.length !== t.length) {
    return false;
  }
  
  
  const sCharsToCharCount = {size: 0};
  const tCharsToCharCount = {size: 0};
  
  for (let i = 0; i < s.length; i++) {
    if (sCharsToCharCount[s[i]] === undefined) {
      sCharsToCharCount[s[i]] = 1
      sCharsToCharCount.size++
    } else {
      sCharsToCharCount[s[i]]++
    }
  }
  
  for (let i = 0; i < t.length; i++) {
    if (tCharsToCharCount[t[i]] === undefined) {
      tCharsToCharCount[t[i]] = 1
      tCharsToCharCount.size++
    } else {
      tCharsToCharCount[t[i]]++
    }
  }
  
  if (sCharsToCharCount.size !== tCharsToCharCount.size) {
    return false;
  }
  
  for (const tChar in tCharsToCharCount) {
    if (sCharsToCharCount[tChar] === undefined || sCharsToCharCount[tChar] !== tCharsToCharCount[tChar]) {
      return false;
    }
  }
  
  return true
};

