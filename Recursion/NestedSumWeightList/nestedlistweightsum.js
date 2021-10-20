
/**
 * @param {NestedInteger[]} nestedList
 * @return {number}
 */
 let sum = 0;
 export var depthSum = function(nestedList) {

     return getSum(nestedList, 0);
    //  return sum;
 };
 // item: number or array
 function getSum(item, depth) {
     let sum = 0;
     if(Number.isInteger(item)) {
         return item * depth;
     }
     // item is an array ...
     for(let i = 0; i< item.length; i++) {
         sum += getSum(item[i], depth + 1);
     }
     return sum;
 }
