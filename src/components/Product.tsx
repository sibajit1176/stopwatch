import React, { useState } from 'react'

function Product() {

    const[product,setProduct]=useState([{title:"my product"}]);
    const[json,setJson]=useState({
        title:""
    })
    
    function myfunc(){
      setProduct([...product,json])
      console.log(product);
      
    }
  return (
      <>
    <div>
      <h1>Product</h1>
      <input type="text" value={json.title} onChange={(e)=>{setJson({title:e.target.value})}}/>
      <button onClick={()=>{myfunc()}}>Submit</button>
    </div>
    {
          product.map((item,index)=>{
              return <li>{item.title}</li>
          })
      }
    </>
  )
}

export default Product
