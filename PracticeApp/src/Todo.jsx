// import React, { useState } from 'react'

// const Todo = () => {
//     const [valu, setValue] = useState("") // For input value
//     const [list, setList] = useState([])  // For storing list of todos
//     const [isEditing, setIsEditing] = useState(false) // Track editing mode
//     const [editIndex, setEditIndex] = useState(null)  // Index of the todo being edited

//     // Handle adding a new todo or saving an edited todo
//     const handleClick = () => {
//         if (valu.trim()) {
//             if (isEditing) {
//                 // Update an existing todo if we are in editing mode
//                 updateTodo()
//             } else {
//                 // Add a new todo if not in editing mode
//                 setList([...list, valu])
//             }
//             setValue("") // Clear input after add/edit
//         }
//     }

//     // Update an existing todo
//     const updateTodo = () => {
//         const updatedList = list.map((item, index) =>
//             index === editIndex ? valu : item // Update the todo at the edit index
//         )
//         setList(updatedList)
//         setIsEditing(false) // Exit edit mode
//         setEditIndex(null) // Reset the edit index
//     }

//     // Handle deleting a todo
//     const handleDelete = (i) => {
//         const updatedList = list.filter((_, index) => index !== i)
//         setList(updatedList)
//     }

//     // Start editing a todo
//     const handleEdit = (i) => {
//         setIsEditing(true) // Set editing mode
//        setEditIndex(i) // Set the index of the todo being edited
//         setValue(list[i]) // Set the value of the input field to the todo being edited
//     }

//     return (
//         <div style={{ display: "flex", flexDirection: "column", height: "50vh", width: "50vw", background: "" }}>
//             <h3>To Do</h3>
//             <input
//                 type="text"
//                 placeholder="Enter work"
//                 style={{ width: "200px", padding: "4px" }}
//                 value={valu}
//                 onChange={(e) => setValue(e.target.value)} // Set input value on change
//             />
//             <button
//                 style={{ width: "80px", margin: "2px", backgroundColor: "royalblue" }}
//                 onClick={handleClick} // Add or update todo on button click
//             >
//                 {isEditing ? "Save Changes" : "Add"}
//             </button>
//             <div style={{ display: "flex" }}>
//                 <div>
//                     <ul>
//                         {list.map((ele, i) => (
//                             <li key={i}>
//                                 {ele}
//                                 <button onClick={() => handleEdit(i)}>Edit</button>
//                                 <button onClick={() => handleDelete(i)}>Delete</button>
//                             </li>
//                         ))}
//                     </ul>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default Todo



import React, { useEffect, useState } from 'react'

const Todo = () => {
  const[value, setValue] = useState("")
  const [list,setList]  = useState([])
   const handleSubmit =()=>{
      setList([...list, value]);
      setValue("")
   }
   const handleDelete =(index)=>{
    console.log(index,"index")
    const updatedList = list.filter((_, i) => i !== index); 
    console.log(updatedList,"hi")
    setList(updatedList)
   }
   const handeEdit=(index)=>{
    setValue(list[index])
   }
//    useEffect(()=>{
//     console.log(list)
//    })
  return (
    <div style={{
        height: "100vh",
        width: "100vw",
        display:"flex",
        alignItems:'center',
        justifyContent:'center',
       // background:'pink',
        flexDirection:"column",
        // border:"none",
        border:"none"
    }}>
      <input 
      style={{
        height:"20px",
        width:"100px"
      }} type="text" value={value} onChange={(e)=>setValue(e.target.value) } />
      <button style={{
        background:'blue'
      }} onClick={handleSubmit}>Add</button>
      <div
      style={{
        display:"flex",
        height:"50%",
        alignItems:"center",
        justifyContent:"center"
      }}
      >
               <ul
               style={{
                 }}
               >
                
                {list && list.map((item ,index)=>{
                   return(
                    <>
                   <li key={index}>{item}</li>
                   <button 
                   style={{
                    height:'20px',
                    width:"40px",
                    fontSize:"10px",
                    background:"blue"
                   }}
                   onClick={()=>handleDelete(index)}
                   >Delete</button>
                    <button 
                   style={{
                    height:'20px',
                    width:"40px",
                    fontSize:"10px",
                    background:"blue"
                   }}
                   onClick={()=>handeEdit(index)}
                   >Edit</button>
                   </>
                   )
                 }
                        )}
               </ul>
      </div>
    </div>
  )
}

export default Todo
