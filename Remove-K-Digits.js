/* Given a non-negative integer num represented as a string,
 remove k digits from the number so that the new number is the smallest possible.
*/

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