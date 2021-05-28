const vegetables = [
  {
    submitter: 'Old Man Franklin',
    redness: 10,
    plumpness: 5
  },
  {
    submitter: 'Sally Tomato-Grower',
    redness: 2,
    plumpness: 8
  },
  {
    submitter: 'Hamid Hamidson',
    redness: 4,
    plumpness: 3
  }
]

const metric = 'redness'

 function judgeVegetable(vegetables, metric)
 {
   var temp = 0, tempstring = "" ;

  for ( var i = 0; i< vegetables.length ; i++ )
  
  {
    if ( vegetables[i] [metric] > temp)
    {
      tempstring = vegetables[i].submitter
      temp = vegetables[i] [metric]
    }

  }
return (tempstring);

 }

console.log(judgeVegetable(vegetables,"redness"));
