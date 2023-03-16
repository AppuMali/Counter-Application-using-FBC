import React,{Component, useState} from 'react'
import "./HooksCounterApp.css"

const HooksCounterApp = () => {
    let [count,setCount]=useState(0)
    let handleIncrement=()=>{
        setCount(count+1)
    }
    let handleDecrement=()=>{
        setCount(count-1)
    }
    let handleReset=()=>{
        setCount(0)
    }
    return (
        <div className='mainDiv'>
            <h1>{count}</h1>
            <div className='btngroup'>
                <button onClick={handleIncrement}>+INCREMENT</button>
                <button onClick={handleDecrement}>-DECREMENT</button>
                <button onClick={handleReset}>RESET</button>
            </div>
        </div>
    )
}

export default HooksCounterApp