var length,width,base,height,radius;

function calculateRectangleArea(length, width){
  var area;
  if(length > 0 && width > 0)
  {
    area = length * width;
    return(area);
  }
return(undefined)
}
function calculateTriangleArea(base, height)
{
  var area;
  if ( base > 0 && height > 0 )
  {
    area = 0.5 * base * height;
    return(area);
  } 
  return(undefined);
}
function calculateCircleArea(radius)
{
  var area ;
   if (radius > 0)
   {
     area = Math.PI * radius * radius;
     return (area);

   }
   return(undefined);
}
