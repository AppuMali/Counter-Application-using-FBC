import React,{useState} from 'react'

const HooksApp = () =>{
    let [username,setUsername]=useState("Appu")
    let[count,setCount]=useState(0)
    let handleChange =()=>{
        setUsername("AppuMali")
    }
    let handleCountChange=()=>{
        setCount(1)
    }
    return (
    <>
        <h1>{username}</h1>
        <h2>{count}</h2>
        <button onClick={handleChange}>CHANGE NAME</button>
        <button onClick={handleCountChange}>CHANGE NUMBER</button>
    </>
  )
}

export default HooksApp
