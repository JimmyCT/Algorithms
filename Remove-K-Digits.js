/* Given a non-negative integer num represented as a string,
 remove k digits from the number so that the new number is the smallest possible.
*/

function removeKdigits(num, k) {
  let output = num;
  
  if (num.length <= k) {
    return '0';
  }
  
  for (let i = 0; i < k; i++) {
    let j = 0;
    while (output[j] <= output[j + 1] && j < output.length - 1) {
      j++
    }
    
    const left = removeLeadingZeros(output.substring(0, j));
    const right = left.length === 0 ? removeLeadingZeros(output.substring(j + 1)) : output.substring(j + 1);
    
    output = left + right;
  }
  
  if (output.length === 0) {
    return "0";
  }
  
  return output;
};

function removeLeadingZeros(str) {
  let output = ``;
  
  let j = 0;
  
  while (str[j] === '0') {
    j++
  }
  
  while (j < str.length) {
    output += str[j]
    j++
  }
  
  return output;
}