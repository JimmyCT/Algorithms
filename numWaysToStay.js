//Given there are three possible movements that you can make with each step - left, stay, right
//and a pointer at index 0
//this function returns the number of different ways that all the steps can be used to end at the same spot 
//without leaving the array

function numWaysToStay(steps, arrLen) {
  const mod = Math.pow(10, 9) + 7

  function dpHelper(steps, arrLen, currIndex = 0, currStep = 0, memo = {}) {
      if (currStep === steps) {
          if (currIndex === 0) {
              return 1
          }
          return 0
      } 
      
      if (currIndex < 0 || currIndex >= arrLen) {
          return 0;
      }
      
      if(memo[currIndex + ' ' + currStep] !== undefined) {
          return memo[currIndex + ' ' + currStep];
      }
      
      const res = (dpHelper(steps, arrLen, currIndex - 1, currStep + 1, memo) + dpHelper(steps, arrLen, currIndex, currStep + 1, memo) + dpHelper(steps, arrLen, currIndex + 1, currStep + 1, memo)) % mod;    
      memo[currIndex + ' ' + currStep] = res
      
      return res 
  }

  return dpHelper(steps, arrLen);
};