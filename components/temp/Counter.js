import React, { useState } from 'react'
import classes from './Counter.module.css'
function Counter() {
    const [count,setCount] = useState(0)

    const incrementHandler = () => setCount((previous)=>previous+1)
    const decrementHandler = () => setCount((previous)=>previous-1)
  return (
    <div className={classes.container}>
        <h2>
            This is Counter: {count}
        </h2>
        <button className={classes.btn} onClick={incrementHandler}>Increment</button>
        <button className={classes.btn} onClick={decrementHandler}>Decrement</button>
    </div>
  )
}

export default Counter