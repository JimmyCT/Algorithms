function leadingZeroRemover(num) {
  for (let i = 0; i < num.length; i++) {
    const digit = num[i];
    if (digit !== '0') {
      return num.slice(i, num.length);
    }
  }

  return 0
}