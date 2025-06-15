import React from "react";

function List() {
    // const fruits=["apple","orange","banana","cocunet","pineapple"]

    // fruits.sort()
    //  const fruitList=fruits.map((fr)=><li>{fr}</li>)
    const fruits=[{id:1,name:"apple",calories:95},
                 {id:2,name:"orange",calories:45},
                 {id:3,name:"banana",calories:105},
                {id:4,name: "cocunet",calories:159},
                {id:5,name:"pineapple",calories:37}];

    // fruits.sort((a,b)=>a.name.localeCompare(b.name)) // Alphabetcal sort
    // fruits.sort((a,b)=>b.name.localeCompare(a.name)) //Reverse Alphabetcal sort

    // fruits.sort((a,b)=> a.calories-b.calories)   //numrical sort
    // fruits.sort((a,b)=> b.calories-a.calories)   //Reverse numrical sort
   // const fruitList=fruits.map((fruit)=>   <li key={fruit.id}>{fruit.name} : &nbsp; <b>{fruit.calories}</b></li>)


    //const lowCalFruits=fruits.filter((fruit)=>fruit.calories<100)
    // const fruitList=lowCalFruits.map((fruit)=> <li key={fruit.id}>{fruit.name} : &nbsp; <b>{fruit.calories}</b></li>)

    const HighCalFruits=fruits.filter((fruit)=>fruit.calories>100)
    const fruitList=HighCalFruits.map((fruit)=> <li key={fruit.id}>{fruit.name} : &nbsp; <b>{fruit.calories}</b></li>)




  


  return (
   
     <ol>{fruitList}</ol>


  );
}

export default List;