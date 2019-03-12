 const headquartersBlocks = 42;
 const feetPerBlock = 264;
 function distanceFromHqInBlocks(block){
   return Math.abs(block - headquartersBlocks);
 }
 function distanceFromHqInFeet(block){
   return (distanceFromHqInBlocks(block) * feetPerBlock);
 }
 function distanceTravelledInFeet(block1, block2){
   return (Math.abs(block2 - block1) * feetPerBlock);
 }
 
 function calculatesFarePrice(start, destination){
   if (distanceTravelledInFeet(start, destination) < 400){
     return 0; }
   else if(distanceTravelledInFeet(start, destination)>=400 && distanceTravelledInFeet(start, destination) >2000){
     return (distanceTravelledInFeet - 400)* 0.02
   }
   
   else if (distanceTravelledInFeet(start, destination) > 2000 && distanceTravelledInFeet(start, destination) <= 2500){
   return 25;
   }
   else{
     return 'cannot travel that far';
   }
 }