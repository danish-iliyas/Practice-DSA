// import { useCallback, useEffect, useState } from 'react'

// import './App.css'
// // import Child from './Child'
// import useCounter from "./useCounter"

// function App() {
//   const [count, setCount] = useState(0)
  
//   const increamet =()=>{
//     setCount(count+1)
//   }
//    let Number = 1333e0
//   // const fn =()=>{
//   //   console.log("hi passed in children")
//   // }
//       const fn =  useCallback(()=>{
//     console.log("hi passed in children")
//   },[Number])
  
//   return (
//     <>
//          <div>
//           <Child Number = {Number} fn ={fn} />
//           <h3>
//             {count}
//           </h3>
//           <button onClick={increamet}>inc</button>
//          </div>
//     </>
//   )
// }      


// import React from 'react'

// const App = () => {
//   // console.log(useCounter())
//   console.log("hi")
//      const {count ,increamet,decreament } = useCounter()
//     //  useEffect(() => {yyy
      
//     //  }, [count])
      
//   return (
//     <div>
//        <p>Counter for checking custom hooks</p>
//        <p>{count}</p>

//        <button onClick={increamet}>inc</button>
//        <button onClick={decreament}>dec</button>
    
//     </div>
//   )
// }

// export default App

import React from 'react'
import Photo from './Photo'
// import Todo from './Todo'

const App = () => {
  return (
    <div style = {{display:"flex" , justifyContent:"center",alignItems:"center"}}>
      {/* <Todo/> */}
      <Photo/>
    </div>
  )
}

export default App
