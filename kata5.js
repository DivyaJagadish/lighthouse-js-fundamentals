const urlEncode = function(text) {
  var temp = "";
  for( var i = 0 ; i < text.length ; i++)
  {
    if ( text[i] == ' ')
    {
      temp =temp +"%20"
    }
    else
    {
      temp =temp + text[i]
    }
  }
   return temp;
};

console.log(urlEncode("Lighthouse Labs"));
console.log(urlEncode(" Lighthouse Labs "));
console.log(urlEncode("blue is greener than purple for sure"));
