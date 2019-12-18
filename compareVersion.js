function leadingZeroRemover(num) {
  for (let i = 0; i < num.length; i++) {
    const digit = num[i];
    if (digit !== '0') {
      return num.slice(i, num.length);
    }
  }

  return 0
}

/*returns 1 if version1 is newer than version2
returns -1 if version1 is older than version2
returns 0 otherwise
*/
function compareVersion(version1, version2) {
  const version1Levels = version1.split('.');
  const version2Levels = version2.split('.');
  
  const longestVersionLength = Math.max(version1Levels.length, version2Levels.length);
  for (let i = 0; i < longestVersionLength; i++) {
    let subV1 = version1Levels[i] === undefined ? 0 : parseInt(leadingZeroRemover(version1Levels[i]));
    let subV2 = version2Levels[i] === undefined ? 0 : parseInt(leadingZeroRemover(version2Levels[i]));
    
    if (subV1 > subV2) {
      return 1;
    } else if (subV2 > subV1) {
      return -1;
    }
  }
  
  return 0
};