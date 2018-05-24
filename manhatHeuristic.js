function manhatHeuristic(goal, current){
  var sum = 0;
  for(var i = 0; i < goal.length; i++){
    if(goal[i]==current[i]){
      sum = sum;
    }else{
      if(current[i] > goal[i]){
        sum =sum + current[i] - goal[i];
      }else{
        sum =sum + goal[i] - current[i];
      }
    }
  }
  return sum;
}

var goal = [1,2,3,4,5,6,7,8,9];
var current = [2,4,3,1,5,6,7,8,9];

console.log(manhatHeuristic(goal, current));