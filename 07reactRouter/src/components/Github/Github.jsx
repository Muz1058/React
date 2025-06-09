import React, { useState } from "react";
import { useEffect } from "react";
import { useLoaderData } from 'react-router-dom'

function Github(){
    const data=useLoaderData()
 //   const [data,setData]=useState([])

// useEffect(()=>{
//     fetch('https://api.github.com/users/muz1058')
//     .then(res=> res.json())
//     .then(data=>{
//         setData(data)
//     })
// },[])

    return(
       <div className="text-center m-4 bg-gray-500 text-white p-4 text-3xl">Github Followers : {data.followers}
      
       <img src={data.avatar_url} alt="git profile pic" width={300} />
        <div className="m-1.5">{data.bio}</div>
       </div>
    )
}

export default Github

export const githubInfoLoader=async()=>{
    const response= await  fetch('https://api.github.com/users/muz1058')

    return response.json()
}