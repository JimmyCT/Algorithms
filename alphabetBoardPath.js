//Given a target word to spell out on a board with the alphabet appearing in order on a in a grid with 
//5 columns and the letter z by itself on the last row first column
//We can only move in 4 directions, (L)eft, (U)p, (R)ight, (D)own
//return a list of directions that can be taken starting at 'a' to spell out the target word 
//in minimum moves 
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