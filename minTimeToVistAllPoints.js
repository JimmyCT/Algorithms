//Given a list of points that needs to be connected in the order they appear in the list
//return the minimum number of moves to connect all the points
//1 unit of change can either be 1 unit change in the x direction, 1 unit change in the y, or diagonal (1 in both)

function minTimeToVisitAllPoints(points) {
     let numMoves = 0;
     
     for (let i = 0; i < points.length - 1; i++) {
         const point = points[i];
         const nextPoint = points[i + 1];
         
         const changeX = Math.abs(point[0] - nextPoint[0]);
         const changeY =  Math.abs(point[1] - nextPoint[1]);
         
         //Do as many diagonal moves as the minimum number of changes in x and y 
         //remaning number of changes is number of moves in either x or y
         
         const diagonalMove = Math.min(changeX, changeY);
         const remainingMoves = Math.max(changeX, changeY) - diagonalMove;
         
         numMoves += diagonalMove + remainingMoves;
     }
     
     return numMoves;
};