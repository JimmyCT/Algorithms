function printVertically(s) {
  const output = [];
  
  const words = s.split(' ')
  for (let i = 0; i < words.length; i++) {
    const word = words[i]
    
    for (var j = 0; j < word.length; j++) {
      const char = word[j];
      output[j] = output[j] === undefined ? '' : output[j];

      while (output[j].length < i) {
        output[j] += ' '
      }

      output[j] += char;
    }
  }
  
  return output;
};