There was a test in your class and you passed it. Congratulations!
But you're an ambitious person. You want to know if you're better than the average student in your class.

You receive an array with your peers' test scores. Now calculate the average and compare your score!

Return True if you're better, else False!

Note:
Your points are not included in the array of your class's points. For calculating the average point you may add your point to the given array!

Solution:

function betterThanAverage(classPoints, yourPoints) {
    // Your code here
    const avg = classPoints.reduce((x,y)=> x+y, 0)/classPoints.length;
    return avg > yourPoints ? false:true
  }

  use reduce to calculate avg. comepare avg with your score through ternary operator. 

  solution 2:

  function betterThanAverage(classPoints, yourPoints) {
    const classPointsSum = classPoints.reduce((a, b) => a + b, 0);
    const classAverage = classPointsSum / classPoints.length;
    const isBetter = yourPoints > classAverage;
    return isBetter;
  }