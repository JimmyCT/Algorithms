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