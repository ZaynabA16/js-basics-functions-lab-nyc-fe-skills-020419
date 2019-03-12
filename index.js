 const headquartersBlocks = 42;
 const feetPerBlock = 264;
 function distanceFromHqInBlocks(block){
   return Math.abs(block - headquartersBlocks);
 }
 function distanceFromHqFeet(feet){
   return distanceFromHqInBlocks(block) * feetPerBlock;
 }