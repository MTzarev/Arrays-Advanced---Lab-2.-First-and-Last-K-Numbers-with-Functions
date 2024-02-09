function firstAndLastKNumbers (array){
let k=array.shift()

function firstRow (array){
   for (let i=0; i<array.length; i++){
 
return firstRow = array.slice(0, k)
   }
}
function secondRow(array) {
    for(let i=0; i<array.length; i++){
return secondRow = array.slice(array.length-k,array.length)
    }
}

 
console.log(firstRow(array).join(` `));
console.log(secondRow(array).join(` `));
}
//firstAndLastKNumbers([2, 7, 8, 9]);
firstAndLastKNumbers([3, 6, 7, 8, 9]);