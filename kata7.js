const checkAir = function (samples, threshold) 
{
  var temp =0;
  var strlen = samples.length;
  for ( var i = 0 ; i < samples.length ; i++)
  {
    if(samples[i]==="dirty")
    {
      temp +=1;
    }
  }
   var percent = temp/strlen ;  
   if( percent < threshold)
   {
     return("Clean");
   }
   else 
   {
     return("Polluted");
   }
  // Code here!

};

console.log(checkAir(
  ['clean', 'clean', 'dirty', 'clean', 'dirty', 'clean', 'clean', 'dirty', 'clean', 'dirty'],
  0.3
));

console.log(checkAir(
  ['dirty', 'dirty', 'dirty', 'dirty', 'clean'],
  0.25
));

console.log(checkAir(
  ['clean', 'dirty', 'clean', 'dirty', 'clean', 'dirty', 'clean'],
  0.9
))
