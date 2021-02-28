var numarray1 = [] , numarray2 = [];
function concat ( numarray1 , numarray2 )
{
  for ( i= 0; i < numarray2.length ; i++)
  {
     numarray1.push(numarray2[i])
  }
  return numarray1;
}
