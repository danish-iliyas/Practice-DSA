import React from 'react'
import { useState } from 'react'
const useCounter = () => {
    //  console.log("hi")   
    const[count , setCount] = useState(0)
     const increamet =()=>{
        setCount(count+1)
     }
    if(count<0){
        setCount(0)
    }
     const decreament =()=>{
        setCount(count-1)
     }  
     return{count , increamet , decreament}
}

export default useCounter
