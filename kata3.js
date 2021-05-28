const numberOfVowels = function(data) {
  var temp = 0;
   for (var i = 0 ; i < data.length ; i++ )
   {
     if (data[i] === 'a' || data[i] === 'e' || data[i] === 'i' || data[i] === 'o' || data[i] === 'u' )
     {
       temp += 1;
     }
   }
   return temp;
  // Put your solution here
};

console.log(numberOfVowels("orange"));
console.log(numberOfVowels("lighthouse labs"));
console.log(numberOfVowels("aeiou"));
