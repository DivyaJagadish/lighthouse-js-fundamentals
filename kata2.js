const conditionalSum = function(values, condition) {
var evensum = 0,oddsum = 0 ;
for( i= 0 ; i < values.length ; i++)
  {
    if( values[i] % 2 === 0)
    {
      evensum += values[i]
    }
    else 
    {
      oddsum += values[i];
    }
  }
if (condition == "even")
{
  return evensum;
}else
{
  return oddsum;
}

};

console.log(conditionalSum([1, 2, 3, 4, 5], "even"));
console.log(conditionalSum([1, 2, 3, 4, 5], "odd"));
console.log(conditionalSum([13, 88, 12, 44, 99], "even"));
console.log(conditionalSum([], "odd"));
