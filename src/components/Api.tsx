import React, { useEffect, useState } from 'react'


function Api() {
   const [user,setUser]=useState([]);
   useEffect(()=>{
    fetch("https://jsonplaceholder.typicode.com/users").then((res)=>{
        return res.json();
    }).then((res)=>{
      setUser(res);
    })
   },[])
     
  return (
      <>
    <div>
      <h1>Api</h1>
    </div>
    {
          user.map((item:any,index)=>{
              return <li key={index}>UserName:{item.name} : UserEmail:{item.email}</li>
          })
      }
    </>
  )
}

export default Api
