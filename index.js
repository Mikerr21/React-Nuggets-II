const data =[
  {name:'Tomato',cost:10,weight:5},
  {name:'Carrot,cost:15,weight:2},
  {name:'Onion,cost:5,weight:7}
]

function getSortValue=(element)=>{
  return element.cost;
}
const sortOrder='asc';
const reversedOrder=sortOrder==='asc'? 1:-1;
   
data.sort((a,b)=>{
  const valueA=getSortValue(a);
  const valueB=getSortValue(b);

  if(typeof valueA==='string'){
    return valueA.localeCompare(valueB)
  }
  else{
    return valueA - valueB
      }
  
})

// If we want to do sorting in descending order just multiply valueA-valueB to -1. or check line 11 for a better idea.
