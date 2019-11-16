/*
 * @param {number[][]} intervals
 * @return {number[][]}
 */

function merge (intervals) {
  let output = [];
  
  if (intervals.length <= 1) {
    return intervals;
  }
  
  intervals.sort(function(firstInterval, secondInterval) {return firstInterval[0] - secondInterval[0]} );
  
  output.push(intervals[0]);
  
  let pointer = 0;
  let prevEnd = intervals[0][1];
  for (let i = 1; i < intervals.length; i++) {
    const start = intervals[i][0];
    const end = intervals[i][1];
    
    if (prevEnd >= start) {
      const appendEnd = prevEnd >= end ? prevEnd : end;
      output[pointer][1] = appendEnd;
      prevEnd = appendEnd;
    } else {
      output.push([start, end]);
      prevEnd = end;
      pointer++
    }
  }

  return output;
};