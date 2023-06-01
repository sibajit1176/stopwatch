import React, {  useEffect, useState } from 'react'

function Set() {
    const[num,setNum]=useState(0);
    const[run,setRun]=useState(false);
    const[laps,setLaps]=useState([`Time`]);
    useEffect(()=>{
        let intervalId:any;
       if(run){
          intervalId= setInterval(()=>{
            setNum(num=>num+1)
           },10);
       }
       return () => {
        clearInterval(intervalId);
      };
    },[run])
    function time(){
        let hour=Math.floor(num / 3600);
        let minute=Math.floor(num / 60);
        let sec=num % 60;
        return `${hour}:${minute}:${sec}`;
    }
    function lap(num:any){
        console.log(num);
        let count=time();
        setLaps([...laps,count]);
        console.log(laps);
        
    }
    function reset(){
        setNum(0);
        setRun(false);
    }
  return (
    <>
        <div>{
            run?(
                <button onClick={()=>{setRun(false)}}>Stop</button>
            ):(
                <button onClick={()=>{setRun(true)}}>Start</button>
            )

        }
        <button onClick={()=>{lap(num)}}>Lap</button>
        <button onClick={()=>{reset()}}>Reset</button>
        </div>
        
      <h1>{time()}</h1>
      {
          
            laps.map((item,index)=>{
              return  <li key={index}>{item}</li>
            })
        
      }
    </>
  )
}

export default Set
