//Takes in a list of points and a number K
//and returns the K closest points to (0, 0);

function kClosestToOrigin(points, K) {
  const distances = [];
  
  if (points.length === 0 || K === 0) {
    return distances;
  } else if (points.length === K) {
    return points;
  }
  for (let i = 0; i < points.length; i++) {
    const distance = Math.sqrt(Math.pow(points[i][0], 2) + Math.pow(points[i][1], 2));
    //insertion sort into distances from least to greatest
    if (distances.length === 0) {
      distances.push([points[i], distance]);
      continue;
    }
    for (let j = 0; j < distances.length; j++) {
      if (distance < distances[0][1]) {
        distances.unshift([points[i], distance]);
        break;
      } else if (j + 1 === distances.length) {
        distances.push([points[i], distance]);
        break
      } else if ((distances[j][1] <= distance && distance <= distances[j + 1][1])) {
        distances.splice(j + 1, 0, [points[i], distance]);
        break;
      }
    }
  }
  
  const output = [];
  for (let i = 0; i < K; i++) {
    output.push(distances[i][0]);
  }
  
  return output;
};