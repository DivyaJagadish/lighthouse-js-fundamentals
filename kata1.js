const sumLargestNumbers = function(data) {
  for( var i = 0 ; i < data.length ; i++)
  for( var j = i+1 ; j < data.length ; j++)
  {
    if( data [j] > data [i] )
    {
      var temp = data [i];
      data [i] = data[j];
      data [j] = temp;
    }
  }
   return (data[0]+data[1])
};
console.log( sumLargestNumbers([ 1, 4 ,3,8,5,7,2]));
console.log(sumLargestNumbers([1, 10]));
console.log(sumLargestNumbers([1, 2, 3]));
console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2]));