
//function runs in O(1) space complexity and O(n) time complexity where n is the number of digits in num
function maximum69Number(num) {
  let stringNum = num.toString();
  for (let i = 0; i < stringNum.length; i++) {
    if (stringNum[i] === '6') {
      stringNum = stringNum.slice(0, i) + '9' + stringNum.slice(i + 1);
      return parseInt(stringNum)
    }
  }
  return parseInt(stringNum);
};