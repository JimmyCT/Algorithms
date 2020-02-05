//Given a target word to spell out on a board with the alphabet appearing in order on a in a grid with 
//5 columns and the letter z by itself on the last row first column
//We can only move in 4 directions, (L)eft, (U)p, (R)ight, (D)own, and the char '!' means to enter the word
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

  let outputArr = [];
  let currPos = 'a'
  
  for (let i = 0; i < target.length; i++) {
    const targetChar = target[i];
    let travelX;
    if (targetChar === 'z') {
      travelX = -Math.abs(boardCharToPositions[currPos].x);
    } else {
      travelX = boardCharToPositions[targetChar].x - boardCharToPositions[currPos].x;
    }
    const travelY = boardCharToPositions[targetChar].y - boardCharToPositions[currPos].y;
    
    //if the target character is "z" we need to travel in the x direction to the far left first
    //otherwise for other characters, we travel in the y direction first then x for cases 
    //where the starting character is 'z' 
    if (targetChar === 'z') {
      for (let x = 0; x < Math.abs(travelX); x++) {
        if (travelX < 0) {
          outputArr.push('L');
        } else if (travelX > 0) {
          outputArr.push('R');
        }
      }
      
      for (let y = 0; y < Math.abs(travelY); y++) {
        if (travelY < 0) {
          outputArr.push('U');
        } else if (travelY > 0) {
          outputArr.push('D');
        }
      }
    } else {
      for (let y = 0; y < Math.abs(travelY); y++) {
        if (travelY < 0) {
          outputArr.push('U');
        } else if (travelY > 0) {
          outputArr.push('D');
        }
      }

      for (let x = 0; x < Math.abs(travelX); x++) {
        if (travelX < 0) {
          outputArr.push('L');
        } else if (travelX > 0) {
          outputArr.push('R');
        }
      }
    }
    outputArr.push('!');
    currPos = targetChar
  }
  
  return outputArr.join('');
};