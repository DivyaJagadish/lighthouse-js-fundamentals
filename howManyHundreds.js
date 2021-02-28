var num;
function howManyHundreds(num)
{
  var num2 = (num % 100);
  num = num - num2;
  return num/100; 
}
console.log(howManyHundreds(0));
