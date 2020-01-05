function frequencySort(s) {
  var charCount = {};
  var charArray = [];
  var result = '';
  for (var i = 0; i < s.length; i++) {
    var char = s[i];
    if (charCount[char]) {
      charCount[char]++;
    } else {
      charCount[char] = 1;
    }
  }
  
  for (var char in charCount) {
    if (charArray.length === 0) {
      charArray.push([char, charCount[char]]);
    } else {
      for (var j = 0; j < charArray.length; j++) {
        if (charCount[char] >= charArray[j][1]) {
          charArray.splice(j, 0, [char, charCount[char]]);
          break;
        } else if (j === charArray.length - 1) {
          charArray.push([char, charCount[char]]);
          break;
        }
      } 
    }
  }

  for (var k = 0; k < charArray.length; k++) {
    var charTuple = charArray[k];
    for (var l = 0; l < charTuple[1]; l++) {
      result = result + charTuple[0];
    }
  }
                                  
  return result;
};