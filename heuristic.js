
  function genHeuristic(goal, current){
    var sum = 0;
    for(var i = 0; i < goal.length; i++){
 
            if(goal[i] == current[i]){
               sum++;
            }else{
              sum = sum;
            }
          }
        
   return sum;
  }
  
  var goal = [1,2,3,4,5,6,7,8,9];
  var current = [2,4,3,6,5,9,7,8,1];

  console.log(genHeuristic(goal, current));
