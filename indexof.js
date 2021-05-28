var numarray = [] , num ;
function lastIndexof( numarray , num)
{
  var position = 0, value = 0;
  for ( var i = 0; i < numarray.length ; i ++ )
  {
    if ( numarray [i] === num)
    {
      position = i;
      value = 1;
    }
  }
  if ( value === 0)
  {
    position = -1;
  }
  return position;
}
console.log(lastIndexof([1,2, 3, 4, 5], 5));