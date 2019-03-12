 const headquartersBlocks = 42;
 const feetPerBlock = 264;
 function distanceFromHqInBlocks(block){
   return Math.abs(block - headquartersBlocks);
 }
 function distanceFromHqInFeet(feet){
   return (distanceFromHqInBlocks(block) * feetPerBlock);
 }
 function distanceTravelledInFeet(block1, block2){
   return (Math.abs(block2 - block1) * feetPerBlock);
 }