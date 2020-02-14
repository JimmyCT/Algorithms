 

function citySchedulingCosts(costs) {
  //create a list of costDifferences between cities per person sorted from least to greatest
  //iterate length of costs divided by 2 through the costDifferences list in such a way that the lowest
  //diff is added to city A and highest is added to city B, then switch the pattern each iteration
  
  const costDifferences = [[costs[0][0], costs[0][1]]];
  
  for (let i = 1; i < costs.length; i++) {
    const [costA, costB] = costs[i];
    const diff = costA - costB
    for (let a = 0; a < costDifferences.length; a++) {
      const currDiff = costDifferences[a][0] - costDifferences[a][1];
      const nextDiff = a + 1 === costDifferences.length ? null : costDifferences[a + 1][0] - costDifferences[a + 1][1];
      if (diff <= currDiff) {
        costDifferences.splice(a, 0, [costA, costB]);
        break;
      } else if (currDiff < diff && diff <= nextDiff) {
        costDifferences.splice(a + 1, 0, [costA, costB]);
        break;
      } else if (diff > nextDiff && a + 1 === costDifferences.length) {
        costDifferences.push([costA, costB]);
        break;
      }
    }
  }
  
  //we don't have to worry about odd number of costs because there are 2N costs
  let minCost = 0;
  for (let i = 0; i < costDifferences.length / 2; i++) {
    minCost += costDifferences[i][0] + costDifferences[costDifferences.length - (i + 1)][1];
  }
  
  return minCost
};