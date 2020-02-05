function alphabetBoardPath(target) {
  const boardCharToPositions = {};
  
  let startCharCodePosition = 'a'.charCodeAt(0);
  for (let i = 0; i < 26; i++) {
    boardCharToPositions[String.fromCharCode(startCharCodePosition)] = {};
    boardCharToPositions[String.fromCharCode(startCharCodePosition)].x = i % 5
    boardCharToPositions[String.fromCharCode(startCharCodePosition)].y = Math.floor(i / 5);
    startCharCodePosition++
  }
};