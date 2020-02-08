
// this function runs in O(n) time where n is = R * C as well as O(n) storage
function allCellsDistOrder(R, C, r0, c0) {
  //treat r0 c0 as a target cord
  //iterate through the RxC matrix and add the cordinnates to hashtable based on distance to target cord
  //iterate from 0 to the max distance away from the target cord and add cords in that order to the output
  
  if (R === 0 || C === 0) {
    return [];
  }
  
  const distanceToCords = {};
  let maxDist = 0;
  for (let r = 0; r < R; r++) {
    for (let c = 0; c < C; c++) {
      const dist = Math.abs(r0 - r) + Math.abs(c0 - c);
      maxDist = dist > maxDist ? dist : maxDist;
      if (distanceToCords[dist] === undefined) {
        distanceToCords[dist] = [[r, c]];
      } else {
        distanceToCords[dist].push([r, c]);
      }
    }
  }
  
  const sortedCordsByDist = [];
  for (let distance = 0; distance <= maxDist; distance++) {
    for (let cords of distanceToCords[distance]) {
      sortedCordsByDist.push(cords);
    }
  }
  
  return sortedCordsByDist;
};