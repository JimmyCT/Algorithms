//Given an integer n, this algorithim returns a list
//of n numbers that sum up to 0
//This algorithim runs in O(n) space and time complexity
function sumZero(n) {
  const output = [];
  
  if (n % 2 === 1) {
    output.push(0);
  }
  
  for (let i = 1; i <= Math.floor(n / 2); i++) {
    output.push(i, i * -1);
  }
  
  return output
}