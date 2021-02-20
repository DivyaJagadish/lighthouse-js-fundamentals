var name =" ";
var birthyear,currentyear;
function ageCalculator(name,birthyear,currentyear)
{
  var age = currentyear -birthyear;
  return (name+ " is" + age + "years old.");

}
 console.log(ageCalculator("divya",1234,2015));
