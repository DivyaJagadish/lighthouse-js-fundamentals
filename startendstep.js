var start, end, step;
function range( start, end , step )
{ var a = [];
  if ((start === undefined || step === undefined || end === undefined ) || ( start >= end ) || ( step <= 0 ))
  {
    return a ;
  }
  else
  {
    for(var i = start ; i <= end ; i = i + step )
    {
      a.push(i);
    }
  }
  return a;
}
 console.log( range(0,8,2))