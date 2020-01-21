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