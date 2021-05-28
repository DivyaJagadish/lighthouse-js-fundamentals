const instructorWithLongestName = function(instructors) {
   let temp = [
    {name: "", course: ""}
  ]
  for( var i = 0; i < instructors.length ; i++)
  {
    for (var j= i+1 ; j < instructors.length ; j++)
    {
       nameofi = instructors[i].name;
       nameofj = instructors[j].name;
       if (nameofj.length > nameofi.length)
       {
         temp = instructors[i];
         instructors[i] = instructors[j]
         instructors[j] = temp;
       }
    } 
  }
 return instructors[0];
  // Put your solution here
};

console.log(instructorWithLongestName([
  {name: "Samuel", course: "iOS"},
  {name: "Jeremiah", course: "Web"},
  {name: "Ophilia", course: "Web"},
  {name: "Donald", course: "Web"}
]));
console.log(instructorWithLongestName([
  {name: "Matthew", course: "Web"},
  {name: "David", course: "iOS"},
  {name: "Domascus", course: "Web"}
]));
